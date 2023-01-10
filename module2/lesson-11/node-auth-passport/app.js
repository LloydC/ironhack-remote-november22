require("dotenv").config();

const express = require("express");
const app = express();

// database config
require("./config/db.config");
//passport config
require("./config/passport.config")
// session config
require("./config/session.config")(app);
// server config
require("./config/index")(app);


// default value for title local
app.locals.title = "Express - Generated with IronGenerator";

app.use("/", require("./routes/index"));
app.use("/", require("./routes/auth.routes"));

module.exports = app;
