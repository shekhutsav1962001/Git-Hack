const jsonfile = require("jsonfile");
const moment = require("moment");
const simpleGit = require("simple-git");
const git = simpleGit();
const FILEPATH = "./data.json";

// const DATE = moment().subtract(1,'y').format()
const DATE = moment().format();
const COMMITDATE = moment("4.11.2020", "DD.MM.YYYY").format();

const data = {
  date: DATE,
};

jsonfile.writeFile(FILEPATH, data, () => {
  // callback
  git.add(["."]).commit(DATE, { "--date": COMMITDATE }).push();
});
