const { read, write } = require('../db/persist')

const handleError = (err) => {
    console.log(err);
}

exports.getUserAddToCart = async (req, res, next) => {
    try {
        const { userId } = req.query 
        
        let data = await read('addToCart')

        const userAddToCarts = data.find(userAddToCart => userAddToCart.userId === userId)

        res.send(userAddToCarts.products)

    } catch (err) {
        handleError(err)
    }
}

exports.postAddToCart = async (req, res, next) => {
    try {
        const { userId, title } = req.body     
        
        let addToCarts = await read('addToCart')
        
        addToCarts = addToCarts.map(addToCart => {
            if(addToCart.userId === userId) {
                return {userId: addToCart.userId, products:[...addToCart.products, title]}
            } else {
                return addToCart
            }
        })

        await write('addToCart', JSON.stringify(addToCarts))
            
        res.send("ok")

    } catch (err) {
        handleError(err)
    }
}