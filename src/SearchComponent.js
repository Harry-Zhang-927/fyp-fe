import React, { useState } from 'react';

const SearchComponent = ({ endpoint }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    const payload = { Signature: inputValue };

    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Handle the response data
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange}
        placeholder="Enter signature data"
      />
      <button onClick={handleSearch}>搜索</button>
    </div>
  );
};

export default SearchComponent;
