class CharacterController {
  constructor(characterService) {
    this.characterService = characterService;
  }

  findCharacters(req, res) {}
  findCharacterByName(req, res) {}
  findCharactersByAge(req, res) {}
  findCharactersByWeight(req, res) {}
  findCharacterMovies(req, res) {}
  createCharacter(req, res) {}
  updateCharacter(req, res) {}
  deleteCharacterById(req, res) {}
}

module.exports = CharacterController;
