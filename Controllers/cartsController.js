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

        res.send(products)
    } catch (err) {
        handleError(err)
    }
}

exports.patchCart = async (req, res, next) => {
    try {
        const { userId, productId } = req.query  
             
        let data = await fs.readFile(path.resolve(__dirname, '../', 'db', 'carts.json'))
        
        data = JSON.parse(data)

        let cart = data.find(cart => cart.userId === userId)  
        let newCart = null    

        if(req.body.quantity) {
            newCart = {
                userId: cart.userId,
                products: cart.products.map(product => {
                    if(product.id === productId) {
                        return {
                            id: productId,
                            quantity: req.body.quantity
                        }
                    } else {
                        return product
                    }
                })
            }
        }

        if(req.body.deleteProduct) {
            newCart = {
                userId: cart.userId,
                products: cart.products.filter(product => product.id !== productId)
            }
        }

        data = data.map(cart => {
            if(cart.userId === userId) {
                return newCart
            } else {
                return cart
            }
        })

        await fs.writeFile(path.resolve(__dirname, '../', 'db', 'carts.json'), JSON.stringify(data))
        res.send("ok")

    } catch (err) {
        handleError(err)
    }
}