require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const app = express();
const SERVER_PORT = process.env.PORT || 3000;
const store = new MongoDBStore({
  uri: process.env.MONGODB_URI,
  collection: "mySessions",
});
const path = require("path");

const register = require("@react-ssr/express/register");
const flash = require("express-flash");
const mongoose = require("mongoose");

const favicon = require("serve-favicon");

(async () => {
  await register(app);

  // move all app code here
  app.use(favicon("./public/favicon.ico"));

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  //app.use(express.static(path.join(__dirname, "public")));

  app.use(morgan("combined"));
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  app.use(
    session({
      secret: "secret",
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
      },
      store,
      resave: true,
      saveUninitialized: false,
    })
  );
  app.use(flash());

  app.use("/", require("./controllers/resume"));

  app.listen(SERVER_PORT, () =>
    console.log("Server listening on port " + SERVER_PORT)
  );
})();

mongoose.set("bufferCommands", false);

mongoose.connect(
  process.env.MONGODB_URI, // connection string from .env file

  {
    useNewUrlParser: true,

    useUnifiedTopology: true,

    useCreateIndex: true,
  },

  // callback that’s called when connection succeeds or fails.

  (err) => {
    if (err) {
      console.log("Error connecting to db: ", err);
    } else {
      console.log(`Connected to MongoDB @ ${process.env.MONGODB_URI}`);
    }
  }
);
