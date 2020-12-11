const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.use("/public", express.static("public"));
app.use(express.json())

app.get('/', (req, res) => {
    var todos = [
        {title: "Task 1"},
        {title: "Task 2"},
    ];
  res.render('index', {title: "Task List", todos})
})

module.exports = app;