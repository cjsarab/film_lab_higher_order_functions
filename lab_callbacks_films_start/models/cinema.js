const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function() {
  return result = this.films.map(film=>film.title);
};

Cinema.prototype.findFilmByTitle = function(title) {
  const result = this.films.filter((film)=>{return title})
  return result;
}

Cinema.prototype.filterFilmsByGenre = function (genre) {
  const result = this.films.filter((film)=>{return genre})
  return result;
}

Cinema.prototype.checkForFilmsFromYear = function (year) {
  const result = this.films.some((film)=>{return year})
  return result;
}

// Cinema.prototype.checkAllFilmsOverLength = function (length) {
//   let result = this.films.every((film)=>{return film.length > length})
//   return result;
// }

Cinema.prototype.checkAllFilmsOverLength = function (length) {
  const result = this.films.every((film)=>{return length > film.length})
  return result;
};

Cinema.prototype.totalRunningTimes = function() {
  let result = this.films.reduce((runningTimes, number)=>{
    return runningTimes + number;
  })
  return result;
};











module.exports = Cinema;