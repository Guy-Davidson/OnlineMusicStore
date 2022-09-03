const fs = require('fs').promises
const path = require('path');

exports.read = async (collection) => {
    if(!collection) return 
    let data = await fs.readFile(path.resolve(__dirname, `${collection}.json`))
    data = JSON.parse(data)
    return data
}

exports.write = async (collection, data) => {
    if(!collection || !data) return 
    await fs.writeFile(path.resolve(__dirname, `${collection}.json`), data)
}

exports.readAudio = async (fileName) => {
    if(!fileName) return 
    let fileData = await fs.readFile(path.resolve(__dirname,"tuner",fileName + ".wav"),"base64");
    data = { file: "data:audio/wav;base64, " + fileData };
    return data
}

exports.readFile = async (collection, fileName) => {
    if(!fileName) return 
    return await fs.readFile(path.resolve(__dirname, collection, fileName));
}

exports.readBase64 = async (collection, fileName) => {
    if(!fileName) return 
    return await fs.readFile(path.resolve(__dirname, collection, fileName), "base64");
}