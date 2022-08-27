const fs = require('fs').promises
const path = require('path');

const handleError = (err) => {
    console.log(err);
}

exports.postPurchase = async (req, res, next) => {
    try {
        const { userId } = req.query

        let carts = await fs.readFile(path.resolve(__dirname, '../', 'db', 'carts.json'))
        
        carts = JSON.parse(carts)

        const cart = carts.find(cart => cart.userId === userId)

        let purchases = await fs.readFile(path.resolve(__dirname, '../', 'db', 'purchases.json'))
        
        purchases = JSON.parse(purchases)

        await fs.writeFile(path.resolve(__dirname, '../', 'db', 'purchases.json'), JSON.stringify([...purchases, cart]))

        carts = carts.map(cart => {
            if(cart.userId === userId) {
                return {userId, products:[]}
            } else {
                return cart
            }
        })

        await fs.writeFile(path.resolve(__dirname, '../', 'db', 'carts.json'), JSON.stringify(carts))

        res.send("ok")   
    } catch (error) {
        handleError(error)
    }
}