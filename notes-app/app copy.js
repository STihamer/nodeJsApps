/* const add = require("./utils.js");

const sum = add(4, 3);
console.log(sum);
 */

const validator = require("validator");
const chalk = require("chalk");
const notes = require("./notes.js");
const getNotes = notes();
console.log(getNotes);
console.log(validator.isEmail("tihi@mm.com"));
console.log(validator.isURL("https://mead.io"));
const name = "Sindre";
console.log(chalk.red("Hello %d"), 10);
console.log(chalk.magenta.bold.bgRed("Szopas"));

console.log(process.argv[2])