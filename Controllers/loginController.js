const fs = require('fs').promises
const path = require('path');

const handleError = (err) => {
    console.log(err);
}

exports.postLogin = async (req, res, next) => {
    try {
        const { userName, password } = req.body

        console.log(req.body);
        res.send("ok")
        return

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

        await fs.writeFile(path.resolve(__dirname, '../', 'db', 'users.json'), JSON.stringify([...data, req.body]))
        
        res.status(200).send("ok")



    } catch (err) {
        handleError(err)
    }
}