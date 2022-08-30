const fs = require('fs').promises
const path = require('path');

const handleError = (err) => {
    console.log(err);
}

exports.postLogout = async (req, res, next) => {
    try {
        const { userId } = req.body     
        
        let logouts = await fs.readFile(path.resolve(__dirname, '../', 'db', 'logouts.json'))
        
        logouts = JSON.parse(logouts)

        logouts = logouts.map(logout => {
            if(logout.userId === userId) {
                return {userId: logout.userId, dates:[...logout.dates, new Date()]}
            } else {
                return logout
            }
        })

        await fs.writeFile(path.resolve(__dirname, '../', 'db', 'logouts.json'), JSON.stringify(logouts))
            
        res.send("ok")

    } catch (err) {
        handleError(err)
    }
}