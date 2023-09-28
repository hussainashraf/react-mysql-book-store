import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export const Books = () => {
  const [books, setBook] = useState([]);
  useEffect(() => {
    const fetchbook = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/books`);
        setBook(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchbook();
  }, []);
  const handleDelete=async(id)=>{
    try {
        await axios.delete("http://localhost:4000/books/"+id)
        window.location.reload()
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <div>
      <h1>Hussain Book Store</h1>
      <div className="card">
        <div className="card-body">
        {books.map((book) => (
          <div key={book.id}>
            {/* {key={book.id}} */}
            <img src={book.cover} class="card-img-top" alt="..." />
            <h5 class="card-title">{book.title}</h5>
            <p class="card-text">{book.desc}</p>
            <h2>{book.name}</h2>
            <button onClick={()=>handleDelete(book.id)}>Delete</button>
           <Link to="/add"><button>AddBook</button></Link>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};
