const express = require("express");
const app = express();
cookieParser = require("cookie-parser");
const path = require("path");
const router = require("./route/main.route");
const { sample } = require("./route/main.route");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const passcode = ["kp123", "skrk123"];

app.all("/", (req, res) => {
  console.log(req.body.passcode, "cookie", req.cookies);
  if (req.cookies?.logged) {
    res.cookie("logged", Math.random());
    res.redirect("/api-doc");
  } else {
    if (req.body?.passcode) {
      if (passcode.indexOf(req.body?.passcode) === -1) {
        res.render(path.join(__dirname, "./view", "login.html"), {
          error: "Please enter a valid passcode",
        });
      } else {
        res.cookie("logged", Math.random());
        res.redirect("/api-doc");
      }
    } else {
      res.render(path.join(__dirname, "./view", "login.html"), { error: "" });
    }
  }
});
console.log("main route", sample);
app.use(router);
const port = process.env.PORT || 80;
app.listen(port, () => console.log(`server running on port ${port}`));
