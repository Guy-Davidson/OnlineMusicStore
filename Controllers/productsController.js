const fs = require('fs').promises
const path = require('path');
const { v4 } = require('uuid')
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
            data = data.filter(product => product.title.split(' ').some(word => word.toLowerCase().startsWith(search.toLowerCase())))
        }

        if(price === 'ascending') {
            data = data.sort((a,b) => a.price - b.price)
        } else if(price === 'descending') {
            data = data.sort((a,b) => b.price - a.price)
        }

        if(page > 0) {
            data = data.slice((page - 1) * PAGE_SIZE, (page) * PAGE_SIZE)
        }     
        
        console.log(data.length)

        res.send(data)
    } catch (err) {
        handleError(err)
    }
}

exports.deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.query

        let data = await fs.readFile(path.resolve(__dirname, '../', 'db', 'products.json'))
        
        data = JSON.parse(data)        
        
        data = data.filter(product => product.id !== id)

        await fs.writeFile(path.resolve(__dirname, '../', 'db', 'products.json'), JSON.stringify(data))

        res.send("ok")
    } catch (err) {
        handleError(err)
    }
}

exports.postProduct = async (req, res, next) => {
    try {
        req.body

        let data = await fs.readFile(path.resolve(__dirname, '../', 'db', 'products.json'))
        
        data = JSON.parse(data)     
        
        req.body.id = v4()
        
        data = [req.body, ...data]

        await fs.writeFile(path.resolve(__dirname, '../', 'db', 'products.json'), JSON.stringify(data))

        res.send("ok")
    } catch (err) {
        handleError(err)
    }
}