let express = require('express');
let app = express();

/*app.get("/json", (req, res) => {
  res.json({ message : "Hello json" });
});*/

app.get(’/json’,function(req,res)
{
let message=“Hello json”;
res.status(200).setHeader(‘Content-Type’, ‘application/json’);

res.json({“message”: message});

});
//app.use("/public", express.static(__dirname + "/public"))
//console.log("Hello World");



































 module.exports = app;
