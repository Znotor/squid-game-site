import React from 'react';
import Grid from './Grid';
import './App.css';

const participants = [
  { name: 'Rex', number: '053' },
  { name: 'Bee', number: '018' },
  { name: 'Samantha', number: '067' },
  { name: 'Stephanie', number: '018' },
  { name: 'Figgy', number: '033' },
  { name: 'Rosemary', number: '051' },
  // Ajoutez tous les autres participants ici jusqu'à 60
];

function App() {
  return (
    <div className="App">
      <Grid participants={participants} />
    </div>
  );
}

export default App;
