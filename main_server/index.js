const fs = require("fs");
const express = require("express");
const app = express();
const port = 4000;

function readJSONFile(filename, callback) {
  fs.readFile(filename, function (err, data) {
    if (err) {
      callback(err);
      return;
    }
    try {
      callback(null, JSON.parse(data));
    } catch (exception) {
      callback(exception);
    }
  });
}

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/projects", (req, res) => {
  readJSONFile("./projects.json", function (err, json) {
    if (err) {
      throw err;
    }
    var result = {};
    result.projects = json;
    result.selected_project_id = json[1].id;
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
