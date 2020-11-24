
const products = require('../products.json')

const getProducts = (req,res) => {
    const product = products.filter(prod=> prod.price>=req.query.price)
    req.query.price
    ?res.status(200).send(product)
    
    :res.status(200).send(products)
}

module.exports = getProducts