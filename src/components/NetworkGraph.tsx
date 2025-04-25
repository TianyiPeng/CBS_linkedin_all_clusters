import React, { useEffect, useRef, useState } from 'react';
import { peopleData } from '../data/people';

interface Point {
  x: number;
  y: number;
}

interface NodePosition extends Point {
  id: string;
  scale: number;
  opacity: number;
}

interface Person {
  id: string;
  name: string;
  connections: string[];
  cluster: string;
  imageUrl: string;
  linkedin_url?: string;
}

const NetworkGraph: React.FC<{
  selectedPerson: string | null;
  onSelectPerson: (id: string | null) => void;
  filteredPeople: Person[];
}> = ({ selectedPerson, onSelectPerson, filteredPeople }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [positions, setPositions] = useState<NodePosition[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedNode, setDraggedNode] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState<Point>({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const animationRef = useRef<number>();
  const prevFilteredLengthRef = useRef<number>(0);
  const imageCache = useRef<Map<string, HTMLImageElement>>(new Map());
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images with loading state
  useEffect(() => {
    setImagesLoaded(false);
    const loadPromises = filteredPeople.map(person => {
      return new Promise((resolve, reject) => {
        if (!imageCache.current.has(person.imageUrl)) {
          const img = new Image();
          img.onload = () => {
            imageCache.current.set(person.imageUrl, img);
            resolve(null);
          };
          img.onerror = reject;
          img.src = person.imageUrl;
        } else {
          resolve(null);
        }
      });
    });

    Promise.all(loadPromises)
      .then(() => setImagesLoaded(true))
      .catch(error => {
        console.error('Error loading images:', error);
        setImagesLoaded(true); // Continue even if some images fail to load
      });
  }, [filteredPeople]);

  const calculateForces = () => {
    const newPositions = [...positions];
    
    // Repulsive force between all visible nodes (only filtered ones)
    const visibleNodes = newPositions.filter(pos => 
      filteredPeople.some(p => p.id === pos.id)
    );
    
    for (let i = 0; i < visibleNodes.length; i++) {
      for (let j = i + 1; j < visibleNodes.length; j++) {
        const dx = visibleNodes[j].x - visibleNodes[i].x;
        const dy = visibleNodes[j].y - visibleNodes[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 120) { // Slightly increased repulsion distance
          const force = (120 - distance) / distance;
          visibleNodes[j].x += dx * force * 0.05;
          visibleNodes[j].y += dy * force * 0.05;
          visibleNodes[i].x -= dx * force * 0.05;
          visibleNodes[i].y -= dy * force * 0.05;
        }
      }
    }

    // Attractive force between connected nodes that are in filtered data
    filteredPeople.forEach(person => {
      const sourcePos = newPositions.find(p => p.id === person.id);
      if (sourcePos) {
        // Filter connections to only include nodes in filteredPeople
        const filteredConnections = person.connections.filter(targetId => 
          filteredPeople.some(p => p.id === targetId)
        );
        
        filteredConnections.forEach(targetId => {
          const targetPos = newPositions.find(p => p.id === targetId);
          if (targetPos) {
            const dx = targetPos.x - sourcePos.x;
            const dy = targetPos.y - sourcePos.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance > 80) {
              const force = (distance - 80) / distance;
              sourcePos.x += dx * force * 0.05;
              sourcePos.y += dy * force * 0.05;
              targetPos.x -= dx * force * 0.05;
              targetPos.y -= dy * force * 0.05;
            }
          }
        });
      }
    });

    // Update scales and opacities based on selection and filter
    newPositions.forEach(pos => {
      // Check if this node is in the filtered set
      const isInFilteredSet = filteredPeople.some(p => p.id === pos.id);
      
      const isSelected = pos.id === selectedPerson;
      const isConnected = selectedPerson && isInFilteredSet
        ? filteredPeople.find(p => p.id === selectedPerson)?.connections.includes(pos.id) && 
          filteredPeople.some(p => p.id === pos.id)
        : isInFilteredSet;

      // Nodes not in filtered set should be invisible
      const targetScale = !isInFilteredSet ? 0 : isSelected ? 2 : isConnected ? 1.5 : 1;
      const targetOpacity = !isInFilteredSet ? 0 : isSelected || isConnected ? 1 : 0.6;

      pos.scale = pos.scale + (targetScale - pos.scale) * 0.1;
      pos.opacity = pos.opacity + (targetOpacity - pos.opacity) * 0.1;
    });

    // Center force - pull all visible nodes toward the center
    const canvas = canvasRef.current;
    if (canvas) {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      visibleNodes.forEach(pos => {
        const dx = centerX - pos.x;
        const dy = centerY - pos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const strength = 0.01; // Gentle pull
        
        pos.x += dx * strength;
        pos.y += dy * strength;
      });
    }

    // Center selected person with smooth transition
    if (selectedPerson && filteredPeople.some(p => p.id === selectedPerson)) {
      const selectedPos = newPositions.find(p => p.id === selectedPerson);
      if (selectedPos && canvas) {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const dx = centerX - selectedPos.x;
        const dy = centerY - selectedPos.y;
        newPositions.forEach(pos => {
          if (filteredPeople.some(p => p.id === pos.id)) {
            pos.x += dx * 0.1;
            pos.y += dy * 0.1;
          }
        });
      }
    }

    setPositions(newPositions);
    animationRef.current = requestAnimationFrame(calculateForces);
  };

  // Reset positions when filtered people changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Check if we need to reset
    const significantChange = 
      filteredPeople.length !== prevFilteredLengthRef.current || 
      positions.length === 0;
    
    if (significantChange) {
      prevFilteredLengthRef.current = filteredPeople.length;
      
      // Initialize positions in a circle layout for filtered people
      let newPositions: NodePosition[] = [];
      
      // Keep existing positions for nodes that remain
      const existingPositions = positions.filter(pos => 
        filteredPeople.some(p => p.id === pos.id)
      );
      
      // Create positions for new nodes
      const existingIds = existingPositions.map(p => p.id);
      const newNodes = filteredPeople.filter(p => !existingIds.includes(p.id));
      
      const radius = Math.min(canvas.width, canvas.height) * 0.3;
      
      newPositions = [
        ...existingPositions,
        ...newNodes.map((person, index) => {
          const angle = (index / Math.max(1, newNodes.length)) * Math.PI * 2;
          return {
            id: person.id,
            x: centerX + Math.cos(angle) * radius,
            y: centerY + Math.sin(angle) * radius,
            scale: 1,
            opacity: 1,
          };
        })
      ];
      
      // Add positions for nodes that exist in peopleData but not in filteredPeople
      // They'll be invisible but still part of the data structure
      const allIds = newPositions.map(p => p.id);
      const missingNodes = peopleData.filter(p => !allIds.includes(p.id));
      
      newPositions = [
        ...newPositions,
        ...missingNodes.map((person, index) => {
          // Position them far outside the visible area
          return {
            id: person.id,
            x: centerX + (Math.random() - 0.5) * canvas.width * 3,
            y: centerY + (Math.random() - 0.5) * canvas.height * 3,
            scale: 0,
            opacity: 0,
          };
        })
      ];
      
      setPositions(newPositions);
    }
  }, [filteredPeople, positions.length]);

  // Animation and force layout
  useEffect(() => {
    animationRef.current = requestAnimationFrame(calculateForces);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [filteredPeople, positions]);

  // Render the network
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw connections with opacity, but only between filtered nodes
    ctx.lineCap = 'round';
    
    filteredPeople.forEach(person => {
      const sourcePos = positions.find(p => p.id === person.id);
      if (sourcePos && sourcePos.opacity > 0.1) {
        // Only draw connections to other filtered people
        const filteredConnections = person.connections.filter(targetId => 
          filteredPeople.some(p => p.id === targetId)
        );
        
        filteredConnections.forEach(targetId => {
          const targetPos = positions.find(p => p.id === targetId);
          if (targetPos && targetPos.opacity > 0.1) {
            const isSelected = sourcePos.id === selectedPerson || targetId === selectedPerson;
            ctx.beginPath();
            ctx.strokeStyle = isSelected 
              ? `rgba(59, 130, 246, ${(sourcePos.opacity + targetPos.opacity) / 2})`
              : `rgba(203, 213, 225, ${(sourcePos.opacity + targetPos.opacity) / 2})`;
            ctx.lineWidth = isSelected ? 2 : 1;
            ctx.moveTo(sourcePos.x, sourcePos.y);
            ctx.lineTo(targetPos.x, targetPos.y);
            ctx.stroke();
          }
        });
      }
    });

    // Draw nodes with glow effect, but only for filtered nodes
    positions.forEach(pos => {
      if (pos.opacity <= 0.1) return; // Skip invisible nodes
      
      const person = filteredPeople.find(p => p.id === pos.id);
      if (person) {
        const isSelected = pos.id === selectedPerson;
        const isConnected = selectedPerson
          ? filteredPeople.find(p => p.id === selectedPerson)?.connections.includes(pos.id)
          : false;

        // Get color based on cluster
        let clusterColor: string;
        switch (person.cluster) {
          case 'W': clusterColor = isSelected ? 'rgba(168, 85, 247, 1)' : 'rgba(216, 180, 254, 1)'; break; // Purple
          case 'X': clusterColor = isSelected ? 'rgba(59, 130, 246, 1)' : 'rgba(147, 197, 253, 1)'; break; // Blue
          case 'Y': clusterColor = isSelected ? 'rgba(34, 197, 94, 1)' : 'rgba(134, 239, 172, 1)'; break; // Green
          case 'Z': clusterColor = isSelected ? 'rgba(249, 115, 22, 1)' : 'rgba(253, 186, 116, 1)'; break; // Orange
          default: clusterColor = isSelected ? 'rgba(107, 114, 128, 1)' : 'rgba(209, 213, 219, 1)'; break; // Gray
        }

        // Glow effect
        if (isSelected || isConnected) {
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, 25 * pos.scale, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(
            pos.x, pos.y, 0,
            pos.x, pos.y, 25 * pos.scale
          );
          
          // Color the glow based on the node's cluster
          const glowColor = clusterColor.replace('1)', `${pos.opacity * 0.3})`);
          gradient.addColorStop(0, glowColor);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        // Draw profile picture
        const img = imageCache.current.get(person.imageUrl);
        if (img && img.complete) {
          const size = 30 * pos.scale;
          ctx.save();
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, size / 2, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(img, pos.x - size / 2, pos.y - size / 2, size, size);
          ctx.restore();
        }

        // Add white border
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 15 * pos.scale, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${pos.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw name with shadow for all visible nodes
        if (pos.opacity > 0.3) {
          ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
          ctx.shadowBlur = 4;
          ctx.fillStyle = `rgba(31, 41, 55, ${pos.opacity})`;
          ctx.font = `${Math.max(10, 12 * pos.scale)}px sans-serif`;
          ctx.textAlign = 'center';
          ctx.fillText(person.name, pos.x, pos.y + (25 * pos.scale));
          ctx.shadowBlur = 0;
        }
      }
    });
  }, [positions, selectedPerson, filteredPeople]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const clickedNode = positions.find(pos => {
      // Only consider visible nodes (i.e., in filtered set)
      if (pos.opacity <= 0.1) return false;
      
      const dx = pos.x - x;
      const dy = pos.y - y;
      return Math.sqrt(dx * dx + dy * dy) < 15 * pos.scale;
    });

    if (clickedNode) {
      setIsDragging(true);
      setDraggedNode(clickedNode.id);
      setMousePos({ x, y });
      onSelectPerson(clickedNode.id);
    } else {
      // If clicked outside any node, deselect
      onSelectPerson(null);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !draggedNode) return;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPositions(positions.map(pos => {
      if (pos.id === draggedNode) {
        return {
          ...pos,
          x: pos.x + (x - mousePos.x),
          y: pos.y + (y - mousePos.y),
        };
      }
      return pos;
    }));

    setMousePos({ x, y });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDraggedNode(null);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.01;
    setScale(prevScale => Math.min(Math.max(0.5, prevScale + delta), 2));
  };

  // Reset all nodes to center
  const resetView = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) * 0.3;
    
    setPositions(positions.map((pos, index) => {
      if (filteredPeople.some(p => p.id === pos.id)) {
        const angle = (index / Math.max(1, filteredPeople.length)) * Math.PI * 2;
        return {
          ...pos,
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
        };
      }
      return pos;
    }));
    
    onSelectPerson(null);
    setScale(1);
  };

  return (
    <div className="relative w-full flex justify-center">
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        className="border border-gray-200 rounded-lg bg-white shadow-lg"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          transition: 'transform 0.2s ease-out',
          maxWidth: '100%',
          height: 'auto'
        }}
      />
      <button
        onClick={resetView}
        className="absolute top-4 right-4 px-4 py-2 bg-white hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-600 transition-colors shadow"
      >
        Reset View
      </button>
    </div>
  );
};

export default NetworkGraph;