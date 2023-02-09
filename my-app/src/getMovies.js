export const getMovies = async(cityIndex) => {
  fetch(`https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:${cityIndex}%7D&extended=true`)
    .then(response => response.json())
    .then(data => data);
};
