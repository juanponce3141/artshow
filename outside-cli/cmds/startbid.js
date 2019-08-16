const { version } = require('../package.json')
const axios = require('axios');


module.exports = (args) => {
  console.log("Will startbid on : " + args._[1])

  axios.post("/api/art/ID/startBid", {})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log("error : ");
    console.log(error);
  });
}