const { readAudio } = require('../db/persist')

const handleError = (err) => {
  console.log(err);
};

exports.getStringAudio = async (req, res, next) => {
  try {
    let audio = await readAudio(req.params.fileName)

    res.send(audio);
  } catch (err) {
    handleError(err);
  }
};
