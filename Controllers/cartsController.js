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

        const products = cart.products.map(product => {
            let foundProduct = productsData.find(currProd => currProd.id === product.id)
            return {
                product: foundProduct,
                quantity: product.quantity
            }
        })

        console.log(products)

        res.send(products)
    } catch (err) {
        handleError(err)
    }
}