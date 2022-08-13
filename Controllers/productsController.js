const fs = require('fs').promises
const path = require('path');

const handleError = (err) => {
    console.log(err);
}

exports.getProducts = async (req, res, next) => {
    try {
        const data = await fs.readFile(path.resolve(__dirname, '../', 'db', 'products.json'))
        res.send(JSON.parse(data))
    } catch (err) {
        handleError(err)
    }
}