const express = require ('express');
const app = express();
app.use(express.json());

//CRUD REST API

//List todo items
//GET /todos

//list one todo item
//GET /todos/:id

//Creating a new todo item to db
//POST /todos

//Editing a todo item
//PUT /todos/:id

//Deleting a todo item from db
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

//Listing all todo items
app.get('/todos', function (req, res) {

    console.log("my todos", todos);
    return res.status(200).send(todos);

})

//listing a single todo item
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


//creating new todo item
app.post('/todos', function (req, res) {

    console.log("request has a body", req.body);
    let newTodo = req.body;
    todos.push(newTodo);

    return res.status(200).send("okay, todo created");

})

//editing a todo item
app.put('/todos/:id', function (req, res) {
    let todo = req.body,
        id = req.params.id,
        exists = todos[id];

    todo.id = id;
    todos[id] = todo;
    todos.push(todo);

    if (exists) {
        return res.status(204).send("todos updated");
    }

    res.status(201).send('/todos/' + todo.id);
});
//deleting a todo item
app.delete('/todos/:id', function (req, res, next) {
        let id = req.params.id,
            body = todos[id],
            err;

        if (!body) {
            err = new Error('Todo not found');
            err.status = 404;
            return next(err);
        }

        delete todos[id];

        res.status(204).send("Todo item deleted");
    });

app.listen(8000 , function () {
    console.log("Crud Rest API");
})

