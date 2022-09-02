const fs = require('fs').promises
const path = require('path');

const handleError = (err) => {
    console.log(err);
}

exports.getUserAddToCart = async (req, res, next) => {
    try {
        const { userId } = req.query   

        let data = await fs.readFile(path.resolve(__dirname, '../', 'db', 'addToCart.json'))        
        
        data = JSON.parse(data)

        const userAddToCarts = data.find(userAddToCart => userAddToCart.userId === userId)

        res.send(userAddToCarts.products)

    } catch (err) {
        handleError(err)
    }
}

exports.postAddToCart = async (req, res, next) => {
    try {
        const { userId, title } = req.body     
        
        let addToCarts = await fs.readFile(path.resolve(__dirname, '../', 'db', 'addToCart.json'))
        
        addToCarts = JSON.parse(addToCarts)

        addToCarts = addToCarts.map(addToCart => {
            if(addToCart.userId === userId) {
                return {userId: addToCart.userId, products:[...addToCart.products, title]}
            } else {
                return addToCart
            }
        })

        await fs.writeFile(path.resolve(__dirname, '../', 'db', 'addToCart.json'), JSON.stringify(addToCarts))
            
        res.send("ok")

    } catch (err) {
        handleError(err)
    }
}