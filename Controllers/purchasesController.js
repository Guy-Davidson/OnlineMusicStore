const { read, write } = require('../db/persist')

const handleError = (err) => {
    console.log(err);
}

exports.postPurchase = async (req, res, next) => {
    try {
        const { userId } = req.query

        let carts = await read('carts')

        const cart = carts.find(cart => cart.userId === userId)

        let purchases = await read('purchases')

        await write('purchases', JSON.stringify([...purchases, cart]))

        carts = carts.map(cart => {
            if(cart.userId === userId) {
                return {userId, products:[]}
            } else {
                return cart
            }
        })

        await write('carts', JSON.stringify(carts))

        res.send("ok")   
    } catch (error) {
        handleError(error)
    }
}