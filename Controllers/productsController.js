const fs = require('fs').promises
const path = require('path');
const PAGE_SIZE = 4

const handleError = (err) => {
    console.log(err);
}

exports.postProducts = async (req, res, next) => {
    try {
        const { price, tags, search, page } = req.body

        let data = await fs.readFile(path.resolve(__dirname, '../', 'db', 'products.json'))
        
        data = JSON.parse(data)        
        
        data = data.filter(product => tags.includes(product.tag))

        if(search.length) {
            data = data.filter(product => product.title.split(' ').some(word => word.toLowerCase().startsWith(search)))
        }

        if(price === 'ascending') {
            data = data.sort((a,b) => a.price - b.price)
        } else if(price === 'descending') {
            data = data.sort((a,b) => b.price - a.price)
        }

        data = data.slice((page - 1) * PAGE_SIZE, (page) * PAGE_SIZE)

        res.send(data)
    } catch (err) {
        handleError(err)
    }
}