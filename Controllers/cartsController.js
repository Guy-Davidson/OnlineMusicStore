const { read, write } = require('../db/persist')

const handleError = (err) => {
    console.log(err);
}

exports.getCart = async (req, res, next) => {
    try {
        const { id } = req.query
        
        let data = await read('carts')

        const cart = data.find(cart => cart.userId === id)

        let productsData = await read('products')
        
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
             
        let data = await read('carts')

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

        if(req.body.addProduct) {
            if(cart.products.filter(product => product.id === productId).length) {
                newCart = {...cart}
            } else {
                newCart = {
                    userId: cart.userId,
                    products: [...cart.products, { id: productId, quantity: 1}]
                }
            }
        }

        data = data.map(cart => {
            if(cart.userId === userId) {
                return newCart
            } else {
                return cart
            }
        })

        await write('carts', JSON.stringify(data))

        res.send("ok")

    } catch (err) {
        handleError(err)
    }
}