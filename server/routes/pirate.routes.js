const PirateController = require('../controllers/pirate.controller');

module.exports = app => {
    app.get('/api/pirates', PirateController.getAllPirates);
    app.get('/api/pirates/:id', PirateController.findPirate);
    app.post('/api/pirates/new', PirateController.createPirate);
    app.put('/api/pirates/:id/update', PirateController.updatePirate);
    app.delete('/api/pirates/:id/delete', PirateController.deletePirate);
}