import './App.css';
import React from 'react';
import TeamProvider from './components/TeamProvider';
import TeamSelection from './components/TeamSelection';
import TeamData from './components/TeamData';

function App() {
  return (
    <TeamProvider>
      <TeamSelection />
      <TeamData />
    </TeamProvider>
  );
}

export default App;
