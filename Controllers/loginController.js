const { read, write } = require('../db/persist')

const handleError = (err) => {
    console.log(err);
}

exports.getUserLogins = async (req, res, next) => {
    try {
        const { userId } = req.query   

        let data = await read('logins')

        const userLogins = data.find(userLogin => userLogin.userId === userId)

        res.send(userLogins.dates)
        
    } catch (error) {
        handleError(err)
    }
}

exports.postLogin = async (req, res, next) => {
    try {
        const { userName, password } = req.body        

        if(!Object.values(req.body).every(v => v || typeof v === 'boolean')) {
            res.status(400).send('Invalid Fields')
            return
        }

        let data = await read('users')

        const user = data.find(user => user.userName === userName)

        if(!user) {
            res.status(400).send('User not found') 
            return
        }

        if(user.password !== password) {
            res.status(400).send('Incorrect Password') 
            return
        }

        let logins = await read('logins')

        logins = logins.map(login => {
            if(login.userId === user.id) {
                return {userId: login.userId, dates:[...login.dates, new Date()]}
            } else {
                return login
            }
        })

        await write('logins', JSON.stringify(logins))
            
        res.send(user.id)

    } catch (err) {
        handleError(err)
    }
}