var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var createsend = require("createsend-node");
var urlencodedparser = bodyparser.urlencoded({ extended: false });

var auth = {
  apiKey:
    "SBRwQ/pZh9drGKQbA/wfizilUw3vx11yFfOxwg4tWau7uccHjPWK4ykNENNcYvCn8dI8x2NDmZb+V13zBbGxngoQwS0aGR3Ydtb+iIosisZRlEfAcLR+SecZuj/JxvpcrphGgxTv7ugg336/Kp8HJw=="
};
var api = new createsend(auth);
var listId = "43c9ac2da554fa06bd35b6ac5a0fda12"; // The ID of the list
var details = {
  EmailAddress: "yudi@example.com",
  Name: "John fdgdfgdf"
  // CustomFields: [
  //   { Key: 'CustomKey', Value: 'Some Value' }
  // ]
};

app.set("views", __dirname + "/public");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.render("index.ejs");
});

api.subscribers.addSubscriber(listId, details, (err, res) => {
  if (err) console.log(err);
});

app.post(
  "https://api.createsend.com/api/v3.2/subscribers/43c9ac2da554fa06bd35b6ac5a0fda12",
  urlencodedparser,
  function (req, res) {
    console.log(req);
    console.log("req received");
    res.redirect("/");
  }
);

app.listen(8888);
