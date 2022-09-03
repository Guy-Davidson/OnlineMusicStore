const PAGE_SIZE = 10;
const { read, readFile } = require('../db/persist')

const handleError = (err) => {
  console.log(err);
};

exports.getChords = async (req, res, next) => {
  try {
    const page = req.params.pageNum;

    let chordsData = await read('chords')

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
    let fileData = await readFile('chords', req.params.fileName)
    data = { file: fileData };

    res.send(data);
  } catch (err) {
    console.log("error");
    handleError(err);
  }
};
