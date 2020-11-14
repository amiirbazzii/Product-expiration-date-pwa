import React from 'react';
import Home from './Pages/Home/Home';

import './App.css';

if ('serviceWorker' in navigator) {
  console.log('yes');
} else {
  console.log('no');
}

function App() {
  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default App;
