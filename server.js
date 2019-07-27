var express = require("express");
var exphbs = require("express-handlebars");

var routes = require("./controllers/burgers_controller.js");
var app = express();

var PORT = process.env.PORT || 8001;
app.use(express.static("public"));


app.use(express.urlencoded({ extended: false }));
app.use(express.json());



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(routes);

app.listen(PORT, function() {
  console.log("Listeng on port:%s", PORT);
});