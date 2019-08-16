const Client = require('../models').Client;

module.exports = {
    retrieve(req, res, diController) {
    return Client
      .findAll({})
      .then((client) => {

        if (client.length >= 3) {
            diController(req, res);
        } else {
            console.log("Unable to make bid per participation requirments of three");
        }
      })
      .catch((error) => 'not found');
    }
}