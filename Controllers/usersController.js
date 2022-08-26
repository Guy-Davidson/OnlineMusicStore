const fs = require('fs').promises
const path = require('path');

const handleError = (err) => {
    console.log(err);
}

exports.getUser = async (req, res, next) => {
    try {
        const { id } = req.query   
        
        let data = await fs.readFile(path.resolve(__dirname, '../', 'db', 'users.json'))
        
        data = JSON.parse(data)

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