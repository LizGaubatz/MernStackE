const PirateController = require('../controllers/pirate.controller');

module.exports = (app) => {
    // app.get('/api', pirateController.index);
    app.post('/api/pirate/new', PirateController.addPirate)
    app.get('/api/pirate', PirateController.allPirates)
    app.get('/api/pirate/:id', PirateController.onePirate)
    app.put('/api/pirate/update/:id', PirateController.updatePirate)
    app.delete('/api/pirate/delete/:id', PirateController.deletePirate)
}
