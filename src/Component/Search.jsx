import React, { useState } from 'react';

const Search = ({ items }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    const filteredResults = items.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className='pl-4 border border-black rounded-lg px-3 py-2 sm:px-4 sm:py-3 mr-2 sm:mr-4 mb-2 sm:mb-0'
        placeholder="Search..."
      />
      <button onClick={handleSearch} className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        Search
      </button>
      <ul className="mt-2 sm:mt-0 ml-2 sm:ml-4">
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
