import {React, useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'


function Book() {
  const [books, setBooks] = useState([]);
  const[author, setAuthor] = useState([])
  const[genre, setGenre] = useState([])
  const [title, setTitle] = useState('')
  const [user, setUser] = useState('')

  
  useEffect(() =>{
    fetch("http://localhost:9292/books")

    .then(res =>res.json())
    .then(data =>{
      setBooks(data)
    })
  },[])
  function handleSubmit(e){
    e.prevent.Default();
    
    fetch("http://localhost:9292/books", {
      method: "POST",
      headers: {
          "Content-Type":"application/json"
    },
    body: JSON.stringify({
      
      title: title,
      author: author,
      genre:genre,
      user:user,
  })})
.then(res => res.json())
.then (newBook => {
  // setBooks([...Books, newBook])
  console.log(newBook)
})
setTitle('')
setAuthor('')
setGenre('')
setUser('')
}

// function onDeleteClick(e) {
//   e.preventDefault();
//   fetch(`http://localhost:9292/books/${id}`, {
//     method: "DELETE",
//   });
//   removeBook(Book);
// }
function handleDeleteClick(id){
fetch(`http://localhost:9292/books/${id}`, {
method: "DELETE"
})
.then(res => res.json())
.then((deletedBook) => {
  const updatedBooks = books.filter(Book => Book.id !== deletedBook.id )
  setBooks(updatedBooks)
 
} )
}

return (
<div>
  <div>
      <h4 className='search'>Book Search Form</h4>
  </div>
  <div>
 
  <div>
      <h4 className='details'>Details for All the Currently Added Books</h4>
  </div>
  </div>
  <div>
  <Table striped bordered hover size="sm">
<thead>
<tr>
<th>id</th>
<th>Author</th>
<th>Title</th>
<th>Genre</th>
{/* <th>User</th> */}

{ <th>Delete Book</th> }
</tr>
</thead>
<tbody>
{books.map(book => <tr key={book.id}>
      <td>{book.id}</td>
      <td>{book.author_id}</td>
      <td>{book.title}</td>
      <td>{book.genre_id} </td>
      {/* <td>{book.user.name} </td> */}
      
      
      {/* {<td><Button variant="success">Update</Button></td> } */}
      <td><button type="button" class="btn btn-danger" onClick={()=> handleDeleteClick(book.id)}>Delete</button></td>
      {/* <button type="button" class="btn btn-danger">Danger</button> */}
  </tr>)}
</tbody>
</Table>
  </div>
</div>
);
}

export default Book;
