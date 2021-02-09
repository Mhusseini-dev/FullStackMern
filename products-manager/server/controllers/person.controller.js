const { Person } = require('../models/person.model');
module.exports.all = (request, response) => {
    Person.find({})
    .then(allPerson => response.json(allPerson))
    .catch(err => response.json({message: "oh oh ", error:err}));
}
module.exports.createPerson = (request, response) => {
    const { title,price,description } = request.body;
    Person.create({
        title,
        price,
        description
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}
module.exports.getPerson = (request, response) => {
    Person.findOne({_id:request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}
