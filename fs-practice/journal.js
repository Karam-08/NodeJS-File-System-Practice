const {readFile, writeFile} = require('fs')
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Give an input for the journal: ', (input) =>{
    writeFile('./journal.txt', input, {flag:'a'}, (err)=>{
        if(err){console.log(err);return}
        else{console.log("Your input has been stored into the journal.")}
    })
})

// TESTING
// rl.question('What is your name? ', (name) =>{
//     console.log(`Hello, ${name}!`);
//     rl.close();
// });