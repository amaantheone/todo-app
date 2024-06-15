const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://amaantheone:HTZz2ZwIGR028F4C@cluster0.scex0hw.mongodb.net/");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}