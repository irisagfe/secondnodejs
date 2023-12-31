require('dotenv').config()
var bodyParser = require('body-parser');

let express = require('express');
let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use("/", (req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip)
  next()
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/name", (req, res) => {
  console.log(req.query.first + " " + req.query.last);
  res.json({"name": req.query.first + " " + req.query.last});
})

app.post("/name", (req, res) => {
  res.json({"name": req.body.first + " " + req.body.last});
});

app.get("/:word/echo", (req, res) => {
  res.json({"echo": req.params.word})
})

app.get("/now", (req, res, next) => {
  req.time = new Date().toString();
  next()
}, (req, res) => {
  res.json({"time": req.time})
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
