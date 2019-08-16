const { version } = require('../package.json')
const axios = require('axios');


module.exports = (args) => {
  console.log("Will add user: " + args._[1])

  axios.post("/api/users", {
    name: args._[1],
    age: "0",
    location: "SF"
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log("error : ");
    console.log(error);
  });
}