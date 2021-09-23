const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    function (error, response, body) {
      const data = JSON.parse(body);
      if (error || data[0] === undefined) {
        callback(error, null);
      } else {
        const firstElement = data[0];
        const description = firstElement.description;
        callback(null, description);
      }
    }
  );
};

module.exports = { fetchBreedDescription, request };
