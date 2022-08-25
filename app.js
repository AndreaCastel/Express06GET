require("dotenv").config();

const port = process.env.APP_PORT ?? 5001;

const express = require("express");

const app = express();

app.use(express.json());

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

const movieHandlers = require("./movieHandlers");
app.get("/api/movies", movieHandlers.getMovies);
app.get("/api/movies/:id", movieHandlers.getMovieById);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

const users = require("./users");
app.get("/api/users", users.getUsers);
app.get("/api/users/:id", users.usersId);

app.post("/api/movies", movieHandlers.postMovie);
app.post("/api/users", users.postUsers);

app.put("/api/movies", movieHandlers.putMovie);
app.put("/api/users/:id", users.putUsers);

//VALIDATION EXPRESS04BIS

const { validateMovie, validateUser } = require("./validator.js");

app.post("/api/movies", validateMovie, movieHandlers.postMovie);
app.post("/api/users", validateUser, users.postUsers);

app.put("/api/movies", validateMovie, movieHandlers.putMovie);
app.put("/api/users", validateUser, users.putUsers);

app.use(express.json());

app.delete("/api/movies/:id", movieHandlers.deleteMovie);
app.delete("/api/users/:id", users.deleteUsers);
