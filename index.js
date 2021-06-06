const jsonfile = require('jsonfile')
const moment = require('moment')
const simpleGit = require('simple-git')
const git = simpleGit()
const FILEPATH = './data.json'


const DATE = moment().subtract(1,'d').format()
const data = {
    date:DATE
}


jsonfile.writeFile(FILEPATH,data,()=>{
    // callback
    git.add(['.']).commit(DATE,{'--date':DATE}).push()
})


