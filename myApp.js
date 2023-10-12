require('dotenv').config()

let express = require('express');
let app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use('/json', (req, res) => {
   let message = "Hello json"

   if(process.env.MESSAGE_STYLE == "uppercase")
   {
       return res.json({"message": message.toUpperCase()})
   }
   else
   {
       return res.json({"message": message})
   }
})

app.use("/public", express.static(__dirname + "/public"))
console.log("Hello json");



































 module.exports = app;
