const { read, write } = require('../db/persist')

const handleError = (err) => {
    console.log(err);
}

exports.getUserLogouts = async (req, res, next) => {
    try {
        const { userId } = req.query   

        let data = await read('logouts')

        const userLogouts = data.find(userLogout => userLogout.userId === userId)

        res.send(userLogouts.dates)
        
    } catch (error) {
        handleError(err)
    }
}

exports.postLogout = async (req, res, next) => {
    try {
        const { userId } = req.body     
        
        let logouts = await read('logouts')

        logouts = logouts.map(logout => {
            if(logout.userId === userId) {
                return {userId: logout.userId, dates:[...logout.dates, new Date()]}
            } else {
                return logout
            }
        })

        await write('logouts', JSON.stringify(logouts))
            
        res.send("ok")

    } catch (err) {
        handleError(err)
    }
}