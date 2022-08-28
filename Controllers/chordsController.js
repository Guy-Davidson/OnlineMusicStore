const fs = require("fs").promises;
const path = require("path");
const PAGE_SIZE = 10;

const handleError = (err) => {
  console.log(err);
};

exports.getChords = async (req, res, next) => {
  try {
    const page = req.params.pageNum;

    let chordsData = await fs.readFile(
      path.resolve(__dirname, "../", "db", "chords.json")
    );
    chordsData = JSON.parse(chordsData);
    const maxPage = Math.ceil(Object.keys(chordsData).length / PAGE_SIZE);
    chordsData = chordsData.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
    let data = {
      chordsData: chordsData,
      maxPage: maxPage,
    };

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
