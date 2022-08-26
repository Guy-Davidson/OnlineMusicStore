const fs = require('fs').promises
const path = require('path');
const { v4 } = require('uuid')

const handleError = (err) => {
    console.log(err);
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

        let data = await fs.readFile(path.resolve(__dirname, '../', 'db', 'users.json'))
        
        data = JSON.parse(data)

        if(data.find(user => user.userName === userName)) {
            res.status(400).send('User already exists') 
            return
        }

        delete req.body.confirmPassword

        req.body.id = v4()

        await fs.writeFile(path.resolve(__dirname, '../', 'db', 'users.json'), JSON.stringify([...data, req.body]))

        let carts = await fs.readFile(path.resolve(__dirname, '../', 'db', 'carts.json'))
        
        carts = JSON.parse(carts)

        await fs.writeFile(path.resolve(__dirname, '../', 'db', 'carts.json'), JSON.stringify([...carts, {userId: req.body.id, products:[]}]))
        
        res.status(200).send("ok")

    } catch (err) {
        handleError(err)
    }
}