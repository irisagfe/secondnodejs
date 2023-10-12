let express = require('express');
let app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use('/json', (req, res) => {
   let message = "Hello json"
   return res.json({"message": message})
})

app.use("/public", express.static(__dirname + "/public"))
console.log(message);



































 module.exports = app;
