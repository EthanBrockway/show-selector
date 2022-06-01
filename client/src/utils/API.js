export const searchTvShows = (query) => {
  return fetch(
    `https://api.themoviedb.org/3/search/tv?api_key=ba45c2c6edb9df9ab7f35592b14f385b&query=${query}`
  ).then(function (result) {
    return result;
  });
};
