const { v4 } = require('uuid')
const { read, write } = require('../db/persist')

const handleError = (err) => {
    console.log(err);
}

const initUserData = async (userId, collection, keyName) => {
    let data = await read(collection)

    const initialUserData = { userId } 
    initialUserData[`${keyName}`] = []

    await write(collection, JSON.stringify([...data, initialUserData]))
}

exports.postRegister = async (req, res, next) => {
    try {
        const { userName, password, confirmPassword } = req.body

        if(!Object.values(req.body).every(v => v)) {
            res.status(400).send('Invalid Fields')
            return
        }

        if(password !== confirmPassword) {
            res.status(400).send('Passwords does not match')
            return
        }

        let data = await read('users')

        if(data.find(user => user.userName === userName)) {
            res.status(400).send('User already exists') 
            return
        }

        delete req.body.confirmPassword

        req.body.id = v4()

        await write('users', JSON.stringify([...data, req.body]))

        await initUserData(req.body.id, 'carts', 'products')
        await initUserData(req.body.id, 'logins', 'dates')
        await initUserData(req.body.id, 'logouts', 'dates')
        await initUserData(req.body.id, 'addToCart', 'products')

        res.status(200).send(req.body.id) 

    } catch (err) {
        handleError(err)
    }
}