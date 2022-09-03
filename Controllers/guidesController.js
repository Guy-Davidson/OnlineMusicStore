const PAGE_SIZE = 3;
const { read, readBase64 } = require('../db/persist')

const handleError = (err) => {
  console.log(err);
};

exports.postGuides = async (req, res, next) => {
  try {
    const { page } = req.body;

    let guidesData = await read('guides')

    const maxPage = Math.ceil(Object.keys(guidesData).length / PAGE_SIZE);
    guidesData = guidesData.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
    let data = {
      guidesData: guidesData,
      maxPage: maxPage,
    };

    res.send(data);
  } catch (err) {
    handleError(err);
  }
};

exports.getGuideThumbnail = async (req, res, next) => {
  try {
    let fileData = await readBase64('guides', req.params.fileName)
    data = { file: fileData };

    res.send(data);
  } catch (err) {
    console.log("error");
    handleError(err);
  }
};
