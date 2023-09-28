import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

export const Add = () => {
    const navigate = useNavigate();
    const [book,setBook] = useState(
        {
            title:"",
            desc:"",
            name:"",
            cover:""
        }
    )
    const handleChange=(e)=>{
        setBook((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    console.log(book)
    const onClicked=async(e)=>{
        e.preventDefault();
        try {
            await axios.post("http://localhost:4000/books",book)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='form'>
        <h1>Add New Book</h1>
        <input type="text" placeholder='title' onChange={handleChange}name='title'/>
        <input type="text" name="name" id="" onChange={handleChange}placeholder='name' />
        <input type="text" name="cover" id="" onChange={handleChange}placeholder='cover'/>
        <input type="text" placeholder='desc' onChange={handleChange} name='desc'/>
        <button type="submit" onClick={onClicked}>Add Book</button>
    </div>
  )
}
