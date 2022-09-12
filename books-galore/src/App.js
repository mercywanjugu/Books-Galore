import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import "./App.css";
import Navbar from "./components/Navbar";
//  import Review from './components/Review';
import React from "react";
import About from './components/About'
import Genre from './components/Genre';
import Review from './components/Review'
import Book from './components/Book'
import AddBook from './components/AddBook'
function App() {
  return (
    <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/book" element={<Book />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/addBook"  element={<AddBook/>} />
        </Routes>
    </Router>
  );
}

export default App;
