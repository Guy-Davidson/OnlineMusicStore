const fs = require('fs').promises
const path = require('path');

const handleError = (err) => {
    console.log(err);
}

exports.postLogin = async (req, res, next) => {
    try {
        const { userName, password } = req.body

        if(!Object.values(req.body).every(v => v || typeof v === 'boolean')) {
            res.status(400).send('Invalid Fields')
            return
        }

        let data = await fs.readFile(path.resolve(__dirname, '../', 'db', 'users.json'))
        
        data = JSON.parse(data)

        const user = data.find(user => user.userName === userName)

        if(!user) {
            res.status(400).send('User not found') 
            return
        }

        if(user.password !== password) {
            res.status(400).send('Incorrect Password') 
            return
        }
        
        res.status(200).send("ok")

    } catch (err) {
        handleError(err)
    }
}