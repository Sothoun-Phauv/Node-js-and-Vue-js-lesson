const express = require("express");
const app = express();
const PORT = 3000;
app.listen(PORT);

// Example of REQUEST using QUERRY PARAMETERS
app.get("/book", (req, res) => {
  let id = req.query.id;
  let color= req.query.color;
  res.send("this request uses QUERY to get: " + id+' color is: '+ color);
});

// Example of REQUEST using ROUTE PARAMETERS
app.get("/book/:id/:color", (req, res) => {
  let id = req.params.id;
  let color = req.params.color;
  res.send("this request uses PARAMS to get: " + id+"this color is: "+color);
});
