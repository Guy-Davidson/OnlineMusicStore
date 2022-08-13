const fs = require('fs').promises
const path = require('path');

const handleError = (err) => {
    console.log(err);
}

exports.postProducts = async (req, res, next) => {
    try {
        const { price, tags, search } = req.body

        let data = await fs.readFile(path.resolve(__dirname, '../', 'db', 'products.json'))
        
        data = JSON.parse(data)
        
        data = data.filter(product => tags.includes(product.tag))

        res.send(data)
    } catch (err) {
        handleError(err)
    }
}