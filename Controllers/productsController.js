const { v4 } = require('uuid')
const PAGE_SIZE = 4
const { read, write } = require('../db/persist')

const handleError = (err) => {
    console.log(err);
}

exports.postProducts = async (req, res, next) => {
    try {
        const { price, tags, search, page } = req.body

        let data = await read('products')
        
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
        
        res.send(data)
    } catch (err) {
        handleError(err)
    }
}

exports.deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.query
        
        let data = await read('products')
        
        data = data.filter(product => product.id !== id)

        await write('products', JSON.stringify(data))

        res.send("ok")
    } catch (err) {
        handleError(err)
    }
}

exports.postProduct = async (req, res, next) => {
    try {
        let data = await read('products')
        
        req.body.id = v4()
        
        data = [req.body, ...data]

        await write('products', JSON.stringify(data))

        res.send("ok")
    } catch (err) {
        handleError(err)
    }
}