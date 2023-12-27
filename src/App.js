import React from 'react';
import MyDropzone from './MyDropzone'; // 确保路径正确
import GetRequestButton from './GetRequestButton';
import SearchComponent from './SearchComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyDropzone />
        <GetRequestButton 
        url="http://localhost:8081/connect"
        params={{ p: 23, a: 5 }}
        />
        <SearchComponent endpoint="http://localhost:8081/challenging" />
      </header>
    </div>
  );
}

export default App;
