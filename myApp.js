let express = require('express');
let app = express();

/*app.get("/json", (req, res) => {
  res.json({ message : "Hello json" });
});*/

app.get('/json', (req, res) => {
  let message = 'Hello json'
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    return res.json({"message": message.toUpperCase()})
  }
  return res.status(200).json({"message": message})
})
//app.use("/public", express.static(__dirname + "/public"))
//console.log("Hello World");



































 module.exports = app;
