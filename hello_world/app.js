//require dependencies
var express = require("express");
var http = require("http");
var path = require("path");


//instantiate express
var app = express();

//Configure setting (key,value)
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

//middleware section for parsers


//routes
app.all("*", function(req, res) {
    res.render("index", { msg: "Welcome to NodeJS Session" })
});

//start the server
http.createServer(app).listen(
    app.get("port"),
    function() {
        console.log("Expressjs server is listening on port " + app.get("port"));
    }
)