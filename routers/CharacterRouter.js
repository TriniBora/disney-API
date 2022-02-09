const CharacterController = require("../controllers/CharacterController");
const CharacterService = require("../services/CharacterService");

const CharacterServiceInstance = new CharacterService();
const CharacterControllerInstance = new CharacterController(
  CharacterServiceInstance
);

const characterRoutes = (app) => {
  app.get("/characters", (req, res) =>
    CharacterControllerInstance.findCharacters(req, res)
  );

  app.get("/character/:id", (req, res) =>
    CharacterControllerInstance.findCharacterById(req, res)
  );

  app.get("/character/:name", (req, res) =>
    CharacterControllerInstance.findCharacterByName(req, res)
  );

  app.get("/character/:age", (req, res) =>
    CharacterControllerInstance.findCharacterByAge(req, res)
  );

  app.get("/character/:movies", (req, res) =>
    CharacterControllerInstance.findCharacterMovies(req, res)
  );

  app.post("/character", (req, res) =>
    CharacterControllerInstance.createCharacter(req, res)
  );

  app.put("/character/:id", (req, res) =>
    CharacterControllerInstance.updateCharacter(req, res)
  );

  app.delete("/character/:id", (req, res) =>
    CharacterControllerInstance.deleteCharacterById(req, res)
  );
};

module.exports = characterRoutes;
