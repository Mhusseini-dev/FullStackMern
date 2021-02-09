const PersonController = require('../controllers/person.controller');
module.exports = function(app){
    app.get('/api/people', PersonController.all);
    app.post('/api/people', PersonController.createPerson);
    app.get('/api/people/:id', PersonController.getPerson);
}
