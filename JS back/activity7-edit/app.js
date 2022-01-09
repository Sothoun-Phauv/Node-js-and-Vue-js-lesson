const fs = require("fs");

// 1- Create a server.
const express = require("express");
const app = express();
const PORT = 3000;
app.listen(PORT, () => console.log("server is running on  " + PORT));
app.use(express.json());
app.use(express.static("front_end"));

// 2- Create a server.
let all_posts = JSON.parse(fs.readFileSync("chat.json"));

//  GET message request ------------------------------------------------
app.get("/messages", (req, res) => {
  res.send(all_posts);
});

//  POST message request ------------------------------------------------
app.post("/messages", (req, res) => {
  let username = req.body.username;
  let text = req.body.text;

  let newPost = { name: username, text: text };
  all_posts.push(newPost);

  fs.writeFileSync("chat.json", JSON.stringify(all_posts));
  res.send(newPost);
});
