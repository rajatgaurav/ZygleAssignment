const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); const app = express();
const passport = require("passport");
const users = require("./routes/api/users");
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
const db = require("./config/keys").mongoURI;
mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
app.use(passport.initialize());
require("./config/passport")(passport);
app.use("/api/users", users);
const port = process.env.PORT || 5000; 