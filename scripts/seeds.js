const sequelize = require("../config/db");
const characterModel = require("../models/CharacterModel");
const genreModel = require("../models/GenreModel");
const movieModel = require("../models/MovieModel");
require("../config/associations");

// Characters
const characters = [
  {
    name: "Donald Duck",
    age: 28,
    weight: 45,
    history: "Lorem ipsum dolor sit amet, consectetur adipiscing el",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Mickey Mouse",
    age: 56,
    weight: 21,
    history: "Lorem ipsum dolor sit amet, consectetur adipiscing el",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Goofy",
    age: 40,
    weight: 22,
    history: "Lorem ipsum dolor sit amet, consectetur adipiscing el",
    image: "https://picsum.photos/200/300",
  },
];

// Genres
const genres = [
  { name: "Action", image: "https://picsum.photos/200/300" },
  { name: "Romance", image: "https://picsum.photos/200/300" },
  { name: "Thriller", image: "https://picsum.photos/200/300" },
  { name: "Comedy", image: "https://picsum.photos/200/300" },
  { name: "Fantasy", image: "https://picsum.photos/200/300" },
];

// Movies

const movies = [
  {
    title: "The lords of the ring",
    rate: 5,
    creationDate: "2000-08-15",
    image: "https://picsum.photos/200/300",
    GenreId: 5,
  },
  {
    title: "Batman",
    rate: 4,
    creationDate: "2020-01-01",
    image: "https://picsum.photos/200/300",
    GenreId: 1,
  },
  {
    title: "Titanic",
    rate: 2,
    creationDate: "1998-12-22",
    image: "https://picsum.photos/200/300",
    GenreId: 2,
  },
];

const characterMovies = [
  { MovieId: 1, CharacterId: 2 },
  { MovieId: 2, CharacterId: 3 },
  { MovieId: 3, CharacterId: 1 },
];

(async () => {
  try {
    // await sequelize.sync({ force: false });
    await characters.forEach((character) => characterModel.create(character));
    await genres.forEach((genre) => genreModel.create(genre));
    await movies.forEach((movie) => movieModel.create(movie));
    // await characterMovies.forEach((character) => characterModel.create(character));
    console.log("Inserción.");
  } catch (error) {
    console.error("No inserción:", error);
  }
})();
