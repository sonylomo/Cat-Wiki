import express from "express";
import mongoose from "mongoose";
import CatSearch from "./dbmodel.js";
import Cors from "cors";

//app config
const app = express();
const port = process.env.PORT || 8080;
const connection_url =
  "mongodb+srv://catwiki-server:INZTc7uZhpp9SJ4D@cluster0.dwjpl.mongodb.net/catwiki-server?retryWrites=true&w=majority";

// middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API endpoints
app.get("/", (req, res) => {
  res.status(200).send("Ssup Sony 😏");
});

app.post("/search", (req, res) => {
  const dbCat = req.body;

  /* creates new document */
  CatSearch.create(dbCat, (err, data) => {
    try {
      res.status(201).send(data);
    } catch {
      res.status(500).send(err);
    }
  });
});

app.get("/search", (req, res) => {
  CatSearch.find((err, data) => {
    try {
      res.status(200).send(data);
    } catch {
      res.status(500).send(err);
    }
  });
});

// listener
app.listen(port, () => {
  console.log("We're up and running!!");
});
