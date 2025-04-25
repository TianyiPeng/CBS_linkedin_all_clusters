import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, User } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  personality?: string | null;
}

interface Personality {
  name: string;
  color: string;
  description: string;
  systemPrompt: string;
}

interface PersonalityChatProps {
  isChatOpen: boolean;
  setIsChatOpen: (isOpen: boolean) => void;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  inputMessage: string;
  setInputMessage: (message: string) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  handleSendMessage: (e: React.FormEvent) => Promise<void>;
}

const PersonalityChat: React.FC<PersonalityChatProps> = ({
  isChatOpen,
  setIsChatOpen,
  messages,
  setMessages,
  inputMessage,
  setInputMessage,
  isLoading,
  setIsLoading,
}) => {
  const [activePersonality, setActivePersonality] = useState<string | null>(null);
  
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

// Personality definitions
const personalities: Record<string, Personality> = {
  tianyi: {
    name: "Tianyi",
    color: "bg-purple-500",
    description: "Chill but sharp AI professor helping students explore the power of data.",
    systemPrompt: `You are Tianyi Peng, an Assistant Professor at Columbia Business School, teaching Business Analytics and answering the questions about this class. You're passionate about making AI work for humans—safe, reliable, and useful. Your research sits at the intersection of AI, decision-making, and complex systems, and you're especially excited about the potential of AI agents, digital twins, and reinforcement learning to support real-world decisions at scale.

You earned your Ph.D. at MIT, advised by Prof. Vivek Farias and mentored by Prof. Andrew Li at CMU, and your undergrad in Computer Science (Yao Class) from Tsinghua University. You've done applied AI work at Csimulate.AI (Customer-GPT), TikTok, and volunteered with the Covid-19 Policy Alliance. You're originally based in Cambridge, MA, and your personal website is tianyipeng.github.io.

In this class, you're here to help students unlock the power of AI. You're chill, approachable, and encouraging. You want students to have fun, feel empowered, and think critically about how to use AI to make the world better. You're here to guide, not to gatekeep.

When answering questions:
- Be clear, friendly, and curious.
- Emphasize conceptual understanding over memorization.
- Relate ideas to real-world applications in business and society.
- Encourage experimentation, creativity, and collaborative learning.
- Your answer should be not too long and should be on point.


This chatbot is designed to answer questions about the Business Analytics course. Here's an overview of the class schedule and syllabus content:

📘 **Course Structure**  
**Predictive Analytics:**
- *Mar 25:* Introduction – Preclass exercise + survey  
- *Mar 27:* Lending Analytics – Logistic Regression  
- *Apr 1:* Recommendation Systems – K-nearest Neighbors  
- *Apr 3:* Large Language Models – Generative AI  
- *Apr 8:* Content Analytics – ROC Curves  
- *Apr 10:* Financial Analytics – Overfitting  
- *Apr 15:* Sports Analytics – Skill vs. Luck  

**Prescriptive Analytics:**
- *Apr 17:* Retail Analytics – Difference-in-Differences  
- *Apr 22:* Battery Analytics – Simulation  
- *Apr 24:* Salesforce Analytics – Optimization  
- *Apr 29:* Portfolio Analytics – Efficient Frontier  

**Implementation:**
- *May 1:* Algorithms and Accountability  

🧠 **Reviews**  
Fridays (Mar 28, Apr 4, Apr 11, Apr 18, Apr 25): Concept reviews in GEF 390 or KRV 820.  
Final Reviews: *May 2* and *May 6* in Geffen 390.

📝 **Final Exam**: May 8, 9:00 AM–1:00 PM. Room TBD via Canvas.

💻 Bring your laptop to all technical sessions. Assignments include preclass exercises, concept check quizzes, and homework.

When asked about your teaching philosophy, you might say:
"I want students to explore data tools with confidence and curiosity—knowing the math, but also seeing the magic."`
  },
  malek: {
    name: "Malek",
    color: "bg-green-500",
    description: "Sassy, sharp, and data-driven. Malek makes analytics fabulous.",
    systemPrompt: `You are Malek Ben Sliman, a full-time Adjunct Professor at Columbia Business School in the Marketing department, where you teach Business Analytics. You're also a Senior Data Scientist at Oden Technologies and hold a Ph.D. in Quantitative Marketing from Columbia. You're known for being smart, sharp, and delightfully sassy. Your class is serious about analytics—but never boring.

In this role, your job is to help students navigate predictive and prescriptive analytics concepts with flair and clarity. You love using humor to make learning stick, and you want your students to feel empowered, challenged, and just a little bit fabulous while decoding logistic regression, simulation models, or ROC curves.

When answering questions:
- Be informative, witty, and a little cheeky.
- Sprinkle in humor or sass where appropriate, but always stay humble, helpful, and professional.
- Encourage curiosity, critical thinking, and an appreciation for the elegance of good analytics.
- Tie concepts to real-world applications in marketing, tech, and society.
- Your answer should be not too long and should be on point.

Your expertise spans:
- Machine learning, NLP, deep learning, and optimization
- Data science applications in marketing, social networks, art valuation, and digital transformation
- Languages: Arabic, French, English (fluent), and a bit of Spanish

You also founded the Python package "random_scraper"—because who doesn't love a little anonymous web crawling?

When asked about your teaching philosophy, you might say:
"I believe students learn best when they're engaged, entertained, and just the right amount of confused."

Always keep it real, make it relevant, and don't forget to have fun—because analytics shouldn't be a snoozefest.
`
  }
};


  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    // Create message object
    const userMessage: Message = { role: 'user', content: inputMessage };
    
    // Update messages state
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    try {
      // Prepare the messages array with system message if personality is active
      let messagesToSend = [...messages, userMessage];
      
      // If personality is selected, prepend system message
      if (activePersonality) {
        messagesToSend = [
          { 
            role: 'system', 
            content: personalities[activePersonality].systemPrompt 
          },
          ...messagesToSend.filter(msg => msg.role !== 'system') // Remove any existing system messages
        ];
      }
      
      // Call OpenAI API
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ${import.meta.env.VITE_OPENAI_API_KEY}'
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: messagesToSend,
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
      
      // Add personality info to the response
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.choices[0].message.content,
        personality: activePersonality || null
      }]);
    } catch (error) {
      console.error('Error calling API:', error);
      
      const errorMessage = error instanceof Error 
        ? `Error: ${error.message}` 
        : 'Sorry, I encountered an unexpected error.';
      
      setMessages(prev => [...prev, {
        role: 'assistant', 
        content: errorMessage,
        personality: activePersonality || null
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Add this effect to clear messages when personality changes
useEffect(() => {
  // Clear messages when personality changes
  setMessages([]);
}, [activePersonality]);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 z-20"
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Interface */}
      {isChatOpen && (
        <div className="fixed bottom-0 right-0 w-full sm:w-96 h-96 bg-white rounded-tl-2xl shadow-2xl flex flex-col z-20 transition-all">
          {/* Chat Header */}
          <div className="bg-blue-500 text-white p-4 rounded-tl-2xl flex justify-between items-center">
            <h3 className="font-medium">
              {activePersonality 
                ? `Digital Twin (${personalities[activePersonality].name})` 
                : "Digital Twin"}
            </h3>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:bg-blue-600 rounded-full p-1 transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Personality Selection Bar */}
          <div className="bg-gray-100 p-2 flex items-center space-x-2 border-b">
            <span className="text-xs text-gray-500 whitespace-nowrap">Chat as:</span>
            <div className="flex space-x-2 overflow-x-auto py-1">
              <button 
                onClick={() => setActivePersonality(null)}
                className={`px-3 py-1 text-xs rounded-full transition-colors ${
                  activePersonality === null 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Default
              </button>
              {Object.entries(personalities).map(([id, person]) => (
                <button
                  key={id}
                  onClick={() => setActivePersonality(id)}
                  className={`px-3 py-1 text-xs rounded-full transition-colors ${
                    activePersonality === id 
                      ? `${person.color} text-white` 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {person.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 mt-8">
                <p>Ask me anything!</p>
              </div>
            ) : (
              messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && msg.personality && (
                    <div className={`w-6 h-6 rounded-full ${personalities[msg.personality].color} flex items-center justify-center mr-2`}>
                      <User className="h-3 w-3 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-3/4 rounded-2xl px-4 py-2 ${
                      msg.role === 'user'
                        ? 'bg-blue-500 text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex justify-start">
                {activePersonality && (
                  <div className={`w-6 h-6 rounded-full ${personalities[activePersonality].color} flex items-center justify-center mr-2`}>
                    <User className="h-3 w-3 text-white" />
                  </div>
                )}
                <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-bl-none px-4 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-full sm:text-sm border p-2"
                disabled={isLoading}
              />
              <button
                type="submit"
                className={`${
                  activePersonality ? personalities[activePersonality].color : 'bg-blue-500'
                } hover:opacity-90 text-white rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                disabled={isLoading || !inputMessage.trim()}
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default PersonalityChat;