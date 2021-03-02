const express = require ('express');
const app = express();
app.use(express.json());

//CRUD REST API
//List items
//GET /todos

//list one item
//GET /todos/:id

//Creating a new item to db
//POST /todos

//Editing a item
//PUT /todos/:id

//Deleting an item from db
//delete /todos/:id

let todos= [
    {
        id : 1,
        name : "Brush Teeth"
    },

    {
        id : 2,
        name : "Take a shower"
    },

    {
        id : 3,
        name : "Watch a movie"
    }
]

//Listing all todos
app.get('/todos', function (req, res) {

    console.log("my todos", todos);
    return res.status(200).send(todos);

})

//listing a single todo
app.get('/todos/:id', function (req, res) {
    let id = req.params.id
    let todo = todos.find(function (todo){
        return todo.id === parseInt(id);
    })
    if (!todo){
        return res.status(404).send("todo item not found")
    }

    console.log("todo", todo);
    return res.send(todo);

})

app.listen(8000 , function () {
    console.log("Crud Rest API");
})

