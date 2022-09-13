import React, { useState } from "react";
// import React from 'react'
const bookAPI = "https://books-backend-galore.herokuapp.com/books";

   

function AddBook({addBook}) {
  const [books, setBooks] = useState([]);
  const[author, setAuthor] = useState([])
  const[genre, setGenre] = useState([])
  const [title, setTitle] = useState('')
  const [user, setUser] = useState('')


  function handleSubmit(e) {
    e.preventDefault();
    fetch(bookAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        books,
        title,
        author,
        genre,
        user,
      }),
    })
      .then((r) => r.json())
      .then((newBook) => addBook(newBook));

    setTitle("");
    setBooks("");
    setAuthor("");
    setGenre("");
   
    setUser("");
    
    
  }

 
  return (
    <div>
    <form className="new-book-form" onSubmit={handleSubmit} >
      <input 
        placeholder="Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input 
        placeholder="Books" 
        value={books}
        onChange={(e) => setBooks(e.target.value)}
      />

      <input 
        placeholder="Author" 
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <input 
        placeholder="Genre" 
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />

      <input 
        placeholder="User" 
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      
      <input 
        type="submit" 
        value="Add book to library" 
      />
    </form>
    </div>

  
  )
};

export default AddBook
