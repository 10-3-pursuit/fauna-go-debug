const  readFileSync, writeFileSync  = require("fs");

function readJSONFile(path, fileName) {
  const collection = readFileSync(`${path}/${fileName}`, "utf8");
  return collection ? JSON.parse(collection) : [];
}

function writeJSONFile(path, fileName, data) {
  data = JSON.stringify(data);
  return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" });
}

module.exports = {
  readJSONFile,
};
