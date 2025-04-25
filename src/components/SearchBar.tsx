import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { peopleData } from '../data/people';

interface SearchBarProps {
  onSelectPerson: (id: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSelectPerson }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredPeople = peopleData.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (id: string) => {
    onSelectPerson(id);
    setSearchTerm('');
    setShowDropdown(false);
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowDropdown(true);
          }}
          placeholder="Search for a person..."
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      {showDropdown && searchTerm && (
        <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          {filteredPeople.length > 0 ? (
            filteredPeople.map(person => (
              <button
                key={person.id}
                onClick={() => handleSelect(person.id)}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center space-x-2"
              >
                <img
                  src={person.imageUrl}
                  alt={person.name}
                  className="w-8 h-8 rounded-full"
                />
                <span>{person.name}</span>
              </button>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;