
const products = require('../products.json')

const getProduct = (req,res) => {
    
    const product = products.find(item=>item.id===+req.params.id)
    product
    ?res.status(200).send(product)
    :res.status(500).send("item is not here")
}

module.exports = getProduct