 import './App.css';
 import Navbar from './components/Navbar';
 import Review from './components/Review';
 import About from './components/About';
 import react, { useState, useEffect } from 'react';



import React from 'react'

function App() {
  const [books, setBooks] = useState([]);
  const [author,setAuthor] = useState([]);
  const [category,setCategory] = useState([]);
  return (
    <div className ='App'>
      <Navbar />
    </div>
  );
}

export default App