const { read } = require('../db/persist')

const handleError = (err) => {
    console.log(err);
}

exports.getUser = async (req, res, next) => {
    try {
        const { id } = req.query   
        
        let data = await read('users')

        const user = data.find(user => user.id === id)

        if(!user) {
            res.status(400).send('User not found') 
            return
        }

        res.send(user)

    } catch (err) {
        handleError(err)
    }
}

exports.postUsers = async (req, res, next) => {
    try {
        const { search } = req.body

        let data = await read('users')
        
        data = data.filter(user => user.userName !== 'admin')

        if(search.length) {
            data = data.filter(product => product.title.split(' ').some(word => word.toLowerCase().startsWith(search)))
        }

        res.send(data)
    } catch (err) {
        handleError(err)
    }
}