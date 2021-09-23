const request = require("request");
const args = process.argv.splice(2);
// console.log(args);

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${args}`,
  function(error, response, body) {
    if (error) {
      console.log(error);
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log(
        "The requested breed was not found please ensure the your entry was spelt correctly or request another breed"
      );
      process.exit();
    } else {
      const firstElement = data[0];
      console.log(firstElement.description);
    }
  }
);
