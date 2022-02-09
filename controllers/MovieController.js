class MovieController {
  constructor(movieService) {
    this.movieService = movieService;
  }
  findMovies(req, res) {}
  findMovieById(req, res) {}
  findMovieByName(req, res) {}
  findMovieByGender(req, res) {}
  sortMoviesByCreationDate(req, res) {}
  createMovie(req, res) {}
  updateMovie(req, res) {}
  deleteMovieById(req, res) {}
}

module.exports = MovieController;
