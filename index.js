const jsonfile = require('jsonfile')
const moment = require('moment')
const simpleGit = require('simple-git')
const git = simpleGit()
const FILEPATH = './data.json'


const DATE = moment().format()
const data = {
    date:DATE
}


jsonfile.writeFileSync(FILEPATH,data)

git.add([FILEPATH]).commit(DATE,{'--date':DATE}).push()
