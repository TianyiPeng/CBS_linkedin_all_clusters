import React, { useState, useRef, useEffect } from 'react';
import { Network, Filter, MessageCircle, Send, X } from 'lucide-react';
import NetworkGraph from './components/NetworkGraph';
import SearchBar from './components/SearchBar';
import { peopleData } from './data/people';
import PersonalityChat from './components/PersonalityChat'; // Import the new component

function App() {
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
  const [selectedCluster, setSelectedCluster] = useState<'W' | 'X' | 'Y' | 'Z' | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant' | 'system', content: string, personality?: string}[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom of chat whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isChatOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isChatOpen]);

  const handleSelectPerson = (id: string | null) => {
    setSelectedPerson(id);
  };

  const selectedPersonData = selectedPerson
    ? peopleData.find(p => p.id === selectedPerson)
    : null;

  const filteredPeople = selectedCluster
    ? peopleData.filter(p => p.cluster === selectedCluster)
    : peopleData;

  const clusterCounts = peopleData.reduce((acc, person) => {
    acc[person.cluster] = (acc[person.cluster] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const getClusterColor = (cluster: string) => {
    switch (cluster) {
      case 'W': return 'bg-purple-500';
      case 'X': return 'bg-blue-500';
      case 'Y': return 'bg-green-500';
      case 'Z': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    // Add user message to chat
    const userMessage = { role: 'user' as const, content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    try {
      // Call OpenAI API through your backend proxy
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [...messages, userMessage],
          temperature: 0.7
        })
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!data.choices?.[0]?.message?.content) {
        throw new Error('Invalid response format');
      }
      
      setMessages(prev => [...prev, {
        role: 'assistant' as const,
        content: data.choices[0].message.content
      }]);
    } catch (error) {
      console.error('Error calling API:', error);
      
      // More specific error handling
      const errorMessage = error instanceof Error 
        ? `Error: ${error.message}` 
        : 'Sorry, I encountered an unexpected error.';
      
      setMessages(prev => [...prev, {
        role: 'assistant' as const, 
        content: errorMessage
      }]);
    } finally {
      setIsLoading(false);
    }
   };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative">
      {error && (
        <div className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
          <button 
            onClick={() => setError(null)}
            className="absolute top-0 right-0 px-4 py-3"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
      
      <header className="bg-white shadow-sm backdrop-blur-sm bg-white/90 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Network className="h-8 w-8 text-blue-500" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Network Visualizer</h1>
                <p className="text-sm text-gray-500">Explore connections between people</p>
              </div>
            </div>
            <SearchBar onSelectPerson={handleSelectPerson} />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="h-5 w-5 text-gray-500" />
            <h2 className="text-lg font-semibold text-gray-700">Filter by Cluster</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {(['W', 'X', 'Y', 'Z'] as const).map(cluster => (
              <button
                key={cluster}
                onClick={() => setSelectedCluster(selectedCluster === cluster ? null : cluster)}
                className={`
                  px-4 py-2 rounded-full font-medium transition-all transform
                  ${selectedCluster === cluster
                    ? `${getClusterColor(cluster)} text-white scale-105`
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:scale-102'
                  }
                  shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                `}
              >
                <span className="flex items-center space-x-2">
                  <span>Cluster {cluster}</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm">
                    {clusterCounts[cluster] || 0}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <NetworkGraph
            selectedPerson={selectedPerson}
            onSelectPerson={handleSelectPerson}
            filteredPeople={filteredPeople}
          />
          
          {selectedPersonData && (
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-2xl transform transition-all duration-300 ease-in-out">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <img
                    src={selectedPersonData.imageUrl}
                    alt={selectedPersonData.name}
                    className="w-24 h-24 rounded-full object-cover ring-4 ring-blue-100"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                    {selectedPersonData.connections.length} connections
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-3">
                    <h2 className="text-2xl font-bold text-gray-900">
                      <a
                        href={selectedPersonData.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-inherit"
                      >
                        {selectedPersonData.name}
                      </a>
                    </h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${getClusterColor(selectedPersonData.cluster)}`}>
                      Cluster {selectedPersonData.cluster}
                    </span>
                  </div>
                  <p className="text-gray-500 mt-1">
                    Connected to {
                      peopleData
                        .filter(p => selectedPersonData.connections.includes(p.id))
                        .map((p, index, arr) => (
                          <span key={p.id}>
                            <a
                              href={p.linkedin_url}
                              className="text-blue-500 hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {p.name}
                            </a>
                            <span className="text-sm text-gray-400 ml-1">
                              ({p.role ? `${p.role} at ${p.company}` : 'Similar professional interests'})
                            </span>
                            {index < arr.length - 1 ? ', ' : ''}
                          </span>
                        ))
                    }
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Use the new PersonalityChat component instead of the original chat component */}
      <PersonalityChat
        isChatOpen={isChatOpen}
        setIsChatOpen={setIsChatOpen}
        messages={messages}
        setMessages={setMessages}
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
}

export default App;