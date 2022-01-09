const express = require("express");
const app = express();
const PORT = 5000;

// We serve assets on /public
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log("server started");
});
const value="Hello";
// TODO : Get the route "value" and return the value "HELLO"
app.get('/value',(req,res)=>{
  res.send(value);
})

