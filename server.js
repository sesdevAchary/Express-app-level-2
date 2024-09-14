const express= require('express')
const app = express();
const mongoose= require('mongoose')
const port= 3000;
//connect to mongodb
mongoose.connect('mongodb://localhost/myDatabase',{ useNewUrlParser: true,useUnifiedTopology:true });


const db=mongoose.connection
db.on('error',console.error
       .bind(console,'mongodb connectionerror:')
)
db.once('open',()=>{
    console.log("connected to mongodb")
})




















app.get('/', (req,res)=>{
    res.send(" hello boi");
});

let books=[];
app.use(express.json())

app.post('/books', (req,res)=>{
    const {title,author}=req.body;
    if (!title || !author){
        return res.statusCode(400).send('missing')
    }
    const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  res.status(201).send(newBook);
});
    


app.get('/books', (req,res)=>{
    res.send("get  request path is working")
})

app.get('/books/:id', (req,res)=>{
    const book = books.find(b=>b.id === parseInt(req.params.id));
    if (!book) {
        return res.send("book not found")
        }
        res.json(book)
})

app.put('/books/:id', (req,res)=>{

    const book = books.find(b=>b.id===parseInt(req.params.id));
    if (!book) {
        return res.status(404).send("book not found")
    }
    const {title,author} = req.body
    book.title = title|| book.title;
    book.author = author || book.author;

    res.send(" put by ID request path is working")
})
app.delete('/books/:id', (req,res)=>{
    const bookIndex=books.findIndex(b=>b.id === parseInt(req.params.id))
        if (bookIndex === -1) {
            return res.status(404).send("book not foud");
    }
    book.splice(bookIndex,1) // to delete//
    res.status(204).send // successfully deleted
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });