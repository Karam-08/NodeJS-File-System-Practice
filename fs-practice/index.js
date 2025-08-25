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

writeFile('./notes.txt', ' New text.' + '\n', {flag:'a'}, (err)=>{
    // {flag: a} adds text to the end
    if(err){console.log(err);return}
})

writeFile('./asyncOutput.txt', 'Attempt to overwrite.', {flag:'wx'}, (err)=>{
    // {flag: wx} doesn't write the file if it exists. So it should error here.
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
// {flag: w} Writes a new file if it doesn't exist, and if it exists, the contents are overwritten.

// Journal 
const prompt = require('prompt-sync')();

const choice = prompt("Do you want to (1) add a note to the journal, (2) read the journal, or (3), overwrite the journal: ")

if(choice === "1"){
    const note = prompt('Add a note to the journal: ');
    writeFile('./journal.txt', note + '\n', {flag:'a'}, (err) =>{
        if(err){console.log(err);return}
        else{console.log("Your note has been added.")}
    })
}else if(choice === "2"){
    readFile('./journal.txt', 'utf8', (err, Data) =>{
        if(err){console.log(err);return}
        else{console.log(Data)}
    })
}else if(choice === "3"){
    const note = prompt('Give a note first to overwrite the journal: ')
    writeFile('./journal.txt', note + '\n', {flag:'w'}, (err) =>{
        if(err){console.log(err);return}
        else{console.log("Your journal has been overwritten.")}
    })
}else{
    console.log("Invalid choice. Please enter 1 to add a note, 2 to read the journal, or 3 to overwrite the journal.")
}


// It seems that Sync takes priority over Async. 
// The readFileSync goes first, then readFile.

// Sync blocks the program and nothing else can run until it's finished. It also runs one at a time.
// Async doesn't block the program and the program keeps on running.