const express = require('express');
const app = express();

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

app.get('/todos' ,function (req, res) {

    console.log("my todos", todos);
    return res.send(todos)

})

app.listen(8000 , function () {
    console.log("Crud Rest API");
})

