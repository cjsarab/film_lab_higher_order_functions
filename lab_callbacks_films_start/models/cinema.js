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










module.exports = Cinema;