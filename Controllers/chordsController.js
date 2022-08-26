const fs = require("fs").promises;
const path = require("path");

const handleError = (err) => {
  console.log(err);
};

exports.getChords = async (req, res, next) => {
  try {
    let data = await fs.readFile(
      path.resolve(__dirname, "../", "db", "chords.json")
    );
    data = JSON.parse(data);

    res.send(data);
  } catch (err) {
    handleError(err);
  }
};

exports.getSingleChords = async (req, res, next) => {
  try {
    let fileData = await fs.readFile(
      path.resolve(__dirname, "../", "db", "chords", req.params.fileName)
    );
    data = { file: fileData };

    res.send(data);
  } catch (err) {
    console.log("error");
    handleError(err);
  }
};
