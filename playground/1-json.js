const fs = require("fs");

/* const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
};

const bookJSON = JSON.stringify(book);
console.log(bookJSON);
console.log(book);

const parsedData = JSON.parse(bookJSON);

console.log(parsedData.author);

fs.writeFileSync("1-json.json", bookJSON);
 */

/* const dataBuffer = fs.readFileSync("1-json.json");
const dataJSOn = dataBuffer.toString();
const data = JSON.parse(dataJSOn);
console.log(data.title); */

const data = fs.readFileSync("1-json.json");
const dataStr = data.toString();
const dataObj = JSON.parse(dataStr);

console.log(dataObj);

dataObj.planet = "Mars";
dataObj.name = "Agi";

const correctedObj = JSON.stringify(dataObj);

fs.writeFileSync("1-json.json", correctedObj);
