const { Product } = require('../models/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createProduct = (request, response) => {
    const { Title, Price, Description } = request.body;
    Product.create({
Title,
Price,
Description
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}
