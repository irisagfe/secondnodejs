let express = require('express');
let app = express();

/*app.get("/json", (req, res) => {
  res.json({ message : "Hello json" });
});*/

app.use('/json', (req, res) => {
   let message = "Hello json"
   return res.json({"message": message})
})
//app.use("/public", express.static(__dirname + "/public"))
//console.log("Hello World");



































 module.exports = app;
