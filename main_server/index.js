const fs = require("fs");
const express = require("express");
const fileUpload = require("express-fileupload");
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
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  next();
});

app.use(express.json());

// Use the express-fileupload middleware
app.use(fileUpload());

app.use(express.static("public"));

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

var uploadedImage;

app.post("/upload", (req, res) => {
  // Log the files to the console

  uploadedImage = req.files.imageFile.data.toString("base64");

  // All good
  res.json({ status: "image_loaded" });
});

app.get("/image", (req, res) => {
  res.json({ image: uploadedImage });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
