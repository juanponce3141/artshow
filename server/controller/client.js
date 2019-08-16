const Client = require('../models').Client;

module.exports = {
  create(req, res) {
    return Client
      .create({
        name: req.body.name,
        age: req.body.age,
        location: req.body.location,
        maxbid: 1 // Setting max bid default on creation 1
      })
      .then((client) => res.status(201).send(client))
      .catch((error) => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Client
      .findAll({})
      .then((client) => {
        if (!client) {
          return res.status(404).send({
            message: 'clients Not Found',
          });
        }
        return res.status(200).send(client);
      })
      .catch((error) => res.status(400).send(error));
  },
  updateBid(req, res) {
    return Client
      .findById(req.params.clientId)
      .update({
        maxbid: req.body.maxbid
      })
      .then((client) => res.status(201).send(client))
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return Client
      .findById(req.params.clientId)
      .then(client => {
        if (!client) {
          return res.status(400).send({
            message: 'Client Not Found',
          });
        }
        return client
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
}

