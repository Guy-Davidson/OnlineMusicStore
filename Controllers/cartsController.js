const fs = require('fs').promises
const path = require('path');

const handleError = (err) => {
    console.log(err);
}

exports.getCart = async (req, res, next) => {
    try {
        const { id } = req.query   
           
        let data = await fs.readFile(path.resolve(__dirname, '../', 'db', 'carts.json'))
        
        data = JSON.parse(data)

        const cart = data.find(cart => cart.userId === id)

        let productsData = await fs.readFile(path.resolve(__dirname, '../', 'db', 'products.json'))
        
        productsData = JSON.parse(productsData)

        const products = cart.productsIds.map(pId => {
            return productsData.find(currProd => currProd.id === pId)
        })

        res.send(products)
    } catch (err) {
        handleError(err)
    }
}