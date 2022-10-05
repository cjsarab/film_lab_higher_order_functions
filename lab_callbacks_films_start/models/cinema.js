const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function() {
  return result = this.films.map(film=>film.title);
};

Cinema.prototype.findFilmByTitle = function(title) {
  let result = this.films.filter((film)=>{return title})
  return result;
}

Cinema.prototype.filterFilmsByGenre = function (genre) {
  let result = this.films.filter((film)=>{return genre})
  return result;
}

Cinema.prototype.checkForFilmsFromYear = function (year) {
  let result = this.films.some((film)=>{return year})
  return result;
}









module.exports = Cinema;