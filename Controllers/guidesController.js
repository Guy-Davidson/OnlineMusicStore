const fs = require("fs").promises;
const path = require("path");
const PAGE_SIZE = 3;

const handleError = (err) => {
  console.log(err);
};

exports.postGuides = async (req, res, next) => {
  try {
    const { page } = req.body;

    let guidesData = await fs.readFile(
      path.resolve(__dirname, "../", "db", "guides.json")
    );

    guidesData = JSON.parse(guidesData);
    const maxPage = Math.ceil(Object.keys(guidesData).length / PAGE_SIZE);
    guidesData = guidesData.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
    data = {
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
    let fileData = await fs.readFile(
      path.resolve(__dirname, "../", "db", "guides", req.params.fileName),
      "base64"
    );
    data = { file: fileData };

    res.send(data);
  } catch (err) {
    console.log("error");
    handleError(err);
  }
};
