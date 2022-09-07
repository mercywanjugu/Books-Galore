import './App.css';
import Navbar from './components/Navbar';
 import Contact from "./Contact";
import About from "./About";
import React, { useState, useEffect } from 'react';


function App() {
  const [books, setBooks] = useState([]);
  const [author,setAuthor] = useState([]);
  const [category,setCategory] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

    function handleDarkModeClick() {
      setIsDarkMode((isDarkMode) => !isDarkMode);
    }
  return (
    
    <div className="App">
        <Navbar />
        <About/>
        <Contact/>
    </div>
  );
}

export default App;
