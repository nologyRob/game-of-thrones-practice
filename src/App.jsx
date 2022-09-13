import './App.scss';
import React, {useState} from 'react';
import Main from './containers/Main/Main';
import Nav from './containers/Nav/Nav';

function App() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="App">
      <Nav setSearchTerm={setSearchTerm}/>
      <Main searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
