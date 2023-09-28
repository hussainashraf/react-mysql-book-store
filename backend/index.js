const express = require('express')
const mysql = require('mysql')
const app = express()
const cors = require('cors')
app.use(cors())
const port = 4000
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "root123456",
database:"test"
})
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!sss')
})

app.get('/books',(req,res)=>{
    const q = "SELECT * from books"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/books',(req,res)=>{
    const  q = "INSERT INTO books (`name`,`title`,`desc`,`cover`) VALUES (?)"
    const values = [
      req.body.title,
      req.body.desc,
      req.body.name,
      req.body.cover
    ]

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.delete('/books/:id',(req,res)=>{
  const bookid  = req.params.id;
  const q = "DELETE FROM books where id =?"
  db.query(q,[bookid],(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
})
})

app.listen(port, () => {
  console.log(`Backend  Connected  on port ${port}`)
})