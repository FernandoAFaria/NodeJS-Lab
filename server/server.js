let path = require('path')
let fs = require('fs');


let chirpDataPath = path.join(__dirname, '../chirps.json')

// let chirps = [
//     {name: 'John Snow', chirp: 'Winter is coming'},
//     {name: 'Homer Simpson', chrip: 'DOH'},
//     {name: 'Eric Cartman', chrip: 'Fuck you kyle!'},
//     {name: 'Rick Grimes', chrip: 'CARLLLL'},
//     {name: 'Chloe', chrip: 'Woof'}
// ];


fs.readFile(chirpDataPath, {
    encoding: 'UTF-8'
}, (err, data) => console.log(data)
)