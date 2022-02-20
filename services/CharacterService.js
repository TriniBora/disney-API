const { Op } = require("sequelize");

const characterModel = require("../models/CharacterModel");
const movieModel = require("../models/MovieModel");

const movieService = require("../services/MovieService");

// This function returns the characters which matching the given name, age, or weight stored in the database
// If any query parameter is provided, it returns all the characters stored in the database
const findCharactersService = async (query) => {
  // It searches for the characters which containing the given name exactly or partially,
  // the exactly given age and the exactly given weight in case that the query parameters are passed
  const queryKeys = Object.keys(query);
  // Defines a variable named "newQuery" to be actualized according to the query parameters
  let newQuery = { ...query };

  // It searches for the characters which containing the given name exactly or partially
  if (queryKeys.includes("name")) {
    //Includes the Op.like sequelize operator to match the name partially or exactly
    newQuery = { ...query, name: { [Op.like]: `%${query.name}%` } };
  }

  // Relation between the movies and the characters tables
  let includeMovies = {
    model: movieModel,
    as: "Movies",
    attributes: ["title"],
  };

  // If there is a movies query parameter, first finds the id of that movie/serie
  // then removes the movies parameter from the query because this is not a column in the database table "characters"
  // finally the movie is added to the query
  if (queryKeys.includes("movies")) {
    const movies = await movieService.findMovieByIdService(query.movies);

    //Removes movie key because this is not a column in the database table "movies"
    delete newQuery["movies"];

    // Relation between the movies and the characters tables
    includeMovies = {
      ...includeMovies,
      where: {
        id: movies.id,
      },
    };
  }

  // Returns the characters which matching the given name, age or movie id stored in the database
  // If any query parameter is provided, it returns all the characters stored in the database
  const characters = await characterModel.findAll({
    include: [includeMovies],
    where: newQuery,
  });
  return characters;
};

// This function return the character with the given id stored in the database
// If the character is not found, an error message is returned
const findCharacterByIdService = async (id) => {
  const character = await characterModel.findByPk(id);
  if (character === null) {
    throw { code: 400, message: "Invalid character id" };
  }
  return character;
};

// This function inserts a new character in the database
const createCharacterService = async (payload) => {
  // Destructuring the payload
  const { name, age, weight, history, image } = payload;

  await characterModel.create({
    name: name,
    age: age,
    weight: weight,
    history: history,
    image: image,
  });
};

// This function updates only the modified data of the character with the given id stored in the database
const updateCharacterService = async (payload, id) => {
  //Destructuring the payload
  const { name, age, weight, history, image } = payload;

  // Checks if the character exists in the database, if not found, throws an error
  const character = await findCharacterByIdService(id);
  await characterModel.update(
    {
      name: name || character.name,
      age: age || character.age,
      weight: weight || character.weight,
      history: history || character.history,
      image: image || character.image,
    },
    {
      where: {
        id: id,
      },
    }
  );
};

// This function deletes the character with the given id stored in the database
const deleteCharacterService = async (id) => {
  // Checks if the character exists in the database, if not found, throws an error
  await findCharacterByIdService(id);

  await characterModel.destroy({
    where: {
      id: id,
    },
  });
};

module.exports = {
  findCharactersService,
  findCharacterByIdService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
};
