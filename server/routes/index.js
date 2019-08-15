const clientController = require('../controller').client;
const countHelper = require('../helper');

 
module.exports = (app) => {

    app.get('/api', (req, res) => res.status(200).send({
        message: 'Made it to API',
      }));
    
    app.post('/api/users', clientController.create);
    app.get('/api/users', clientController.create);

    app.post('/api/users/maxBid', (req, res) => {

        // Only happen if 3 members are available to bid and in unsold state
        // Logic to test

        // clientController.updateBid(req, res)
        console.log(countHelper.retrieve(req, res)); // <= we'll let helper decide the controller, pass controller as callback?
    });


    app.post('/api/art/ID/startBid') 
        //
        // => create function to update status from “Unsold” to “Open”
        // => Requires callback

}