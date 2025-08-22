// Reading files:

// Async
const {readFile, writeFile} = require('fs')

readFile('./notes.txt', 'utf8', (err, firstData) =>{
    if(err){console.log(err);return}
    else{console.log(firstData, "Asynchronous File read successfully")}
})

writeFile('./asyncOutput.txt', 'Written with fs.writeFile (asynchronous).', (err) =>{
    if(err){console.log(err);return}
})

writeFile('./notes.txt', ' New text.', {flag:'a'}, (err)=>{
    if(err){console.log(err);return}
})

writeFile('./asyncOutput.txt', 'Attempt to overwrite.', {flag:'wx'}, (err)=>{
    if(err){console.log(err);return}
})

readFile('./asyncOutput.txt', 'utf8', (err, firstData) =>{
    if(err){console.log(err);return}
    else{console.log(firstData, "Just checking.")}
})

// Sync
const {readFileSync, writeFileSync} = require('fs')
const path = require('path')

const notes = readFileSync(path.join(__dirname, './notes.txt'), 'utf8')
console.log(notes)

writeFileSync(path.join(__dirname, './syncOutput.txt'), 'Written with fs.fileWriteSync(synchronous).', {flag:'w'})
