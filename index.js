const express = require("express");
const app = express();
const port = 3000;
// Body-Parser takes in the Body which is a string, parses it
// and turns it into an object to be used
const bodyParser = require("body-parser");

let todoRoutes = require("./routes/todos");

// These 2 bodyParsers allow access to the request  body of a put/post request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("HELLO FROM THE ROOT ROUTE ");
});

app.use("/api/todos", todoRoutes);

app.listen(port, () => console.log(`APP IS RUNNNING ON PORT: ${port}`));
