import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import './App.css';

function App() {
  const [color, setColor] = useState('white')
  console.log(color)
  return (
    <main className='main-container'>
      <Navbar/>
      <Content color={color} setColor={setColor}/>
    </main>
  );
}

export default App;
