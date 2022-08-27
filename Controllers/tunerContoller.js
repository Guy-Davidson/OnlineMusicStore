const fs = require("fs").promises;
const path = require("path");

const handleError = (err) => {
  console.log(err);
};

exports.getStringAudio = async (req, res, next) => {
  try {
    let fileData = await fs.readFile(
      path.resolve(
        __dirname,
        "../",
        "db",
        "tuner",
        req.params.fileName + ".wav"
      ),
      "base64"
    );
    data = { file: "data:audio/wav;base64, " + fileData };

    res.send(data);
  } catch (err) {
    handleError(err);
  }
};
