import React from 'react';
import Header from './Header';
import PlayersInput from './PlayersInput';
import PlayersList from './PlayersList';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="PrincipalContent">
        <Header />
        <PlayersInput />
        <PlayersList />
      </main>
      
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
    </div>
  );
}

export default App;
