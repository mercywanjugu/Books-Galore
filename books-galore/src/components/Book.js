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
      <h4>Book Search Form</h4>
  </div>
  <div>
 
  <div>
      <h4>Details for All the Currently Added Books</h4>
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
)
}

export default Book
// import { Box, Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
// import React, { useState } from 'react'
// import { Container } from '@mui/system';

// const Book = ({handlePosting}) => {
//     const [formData, setFormData] = useState({
//         author_name: '',
//         genre_type: '',
//         user_name: '',
//         book_title: '',
//     })

//     function handleSubmit(e){
//         e.preventDefault();
//         fetch(`http://localhost:9292/books`,{
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(formData)
//         })
//         .then(r => r.json())
//         .then(data => {
//             handlePosting(data)
//         })

//         setFormData({
//           author_name: '',
//           genre_type: '',
//           user_name: '',
//           book_title: '',
//         })
//     }

//     function handleChange(e){
//         setFormData({
//             ...formData, [e.target.name]: e.target.value,
//         });
//     }  

//   return (
//     <div>
//         <Container className='formContainer'>
//     <div 
//     style={{ fontSize: "20px", fontWeight: "bold" }}
//     >
//         Course Form
//     </div>
//     <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
//       <div>
//         <FormControl sx={{ m: 1, width: '35ch' }}>
//             <InputLabel>Author_name</InputLabel>
//             <Input name="author_name" value={formData.course_name} onChange={handleChange}/>
//             <FormHelperText>Please Enter Author name</FormHelperText>
//         </FormControl>
//       </div>
//       <div>
//       <FormControl sx={{ m: 1, width: '35ch' }}>
//         <InputLabel>Genre_type</InputLabel>
//         <Input name="genre_type" value={formData.course_period} onChange={handleChange}/>
//         <FormHelperText>Enter Genre Type</FormHelperText>
//         </FormControl>
//       </div>
//       <div>
//         <FormControl sx={{ m: 1, width: '35ch' }}>
//             <InputLabel>Book_title</InputLabel>
//             <Input name="book_title" value={formData.total_units} onChange={handleChange}/>
//             <FormHelperText>Enter Book Title</FormHelperText>
//         </FormControl>
//       </div>
//       <div>
//         <FormControl sx={{ m: 1, width: '35ch' }}>
//             <InputLabel>Fees Amount</InputLabel>
//             <Input name="fees_amount" value={formData.fees_amount} onChange={handleChange}/>
//             <FormHelperText>Enter Fees Amount</FormHelperText>
//         </FormControl>
//       </div>
//     </Box>
//     <div>
//         <FormControl sx={{ display: "flex", flexWrap: "wrap", m: 1, width: '10ch' }}>
//             <Button variant='outlined' type='submit' onClick={handleSubmit}>
//                 SUBMIT
//             </Button>
//         </FormControl>
//       </div>
//     </Container>
//     </div>
//   )
// }

// export default Book;