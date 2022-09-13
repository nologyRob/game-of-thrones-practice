import './App.scss';
import React, {useState} from 'react';
import Main from './containers/Main/Main';
import Nav from './containers/Nav/Nav';

function App() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleInput = (event) => {
    setSearchTerm(event.target.value)
  }
  return (
    <div className="App">
      <Nav handleInput={handleInput}/>
      <Main searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
