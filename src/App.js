import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import './App.css';

function App() {
  return (
    <main className='main-container'>
      <Navbar/>
      <Content/>
    </main>
  );
}

export default App;
