const express = require("express");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const cors = require("cors");

var AUTH_MIDDLEWARE = require("./middleware/auth.middleware.js");

var USER_ROUTE = require("./routes/user.route.js");
var IMAGE_ROUTE = require("./routes/image.route.js");
var AUTH_ROUTE = require("./routes/auth.route.js");

require("dotenv").config();

const app = express();
const port = 4000;

app.use(
  cors({
    credentials: true,
    preflightContinue: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    origin: [process.env.LANDING_APP_URL, process.env.MAIN_APP_URL],
  }),
);

app.use(express.json());
app.use(fileUpload());
app.use(cookieParser());

app.use(AUTH_MIDDLEWARE.jwtMiddleware);

app.get("/projects", USER_ROUTE.projectRoute);
app.get("/user", USER_ROUTE.userRoute);

app.get("/image", IMAGE_ROUTE.imageRoute);
app.post("/upload", IMAGE_ROUTE.uploadImageRoute);

app.post("/login", AUTH_ROUTE.loginRoute);
app.get("/logout", AUTH_ROUTE.logoutRoute);
app.get("/refresh", AUTH_ROUTE.refreshRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
