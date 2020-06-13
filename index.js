const jsonfile = require("jsonfile");
const moment = require("moment");
const simpleGit = require("simple-git");
const git = simpleGit();
const FILEPATH = "./data.json";

// const DATE = moment().subtract(1,'y').format()
let DATE = moment().format();
const COMMITDATE = moment("14.6.2020", "DD.MM.YYYY").format();

const data = {
  date: DATE,
};

for (let index = 0; index < 30; index++) {
  jsonfile.writeFile(FILEPATH, data, () => {
    // callback
    DATE = moment().format();
    git.add(["."]).commit(DATE, { "--date": COMMITDATE }).push();
  });
}
