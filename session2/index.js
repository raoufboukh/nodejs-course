// blocking code read file synchronously (before the content after him) and non-blocking code read file asynchronously (after the content before and after him)

const fs = require('node:fs');

// console.log('first');
// read file
// const file = fs.readFileSync('./txt.txt', 'utf-8'); // blocking code

// console.log(file);


// fs.readFile('./txt.txt', 'utf-8', (err, data) => {
//     console.log(data);
// }); // non-blocking code

// write to file
// fs.writeFile('./users.json',
//     JSON.stringify([{id:1,name:"raouf"}]),'utf8',(err) =>{
//     err ? console.log(err) : console.log("done");
// });

// console.log('second');

// delete file

// fs.unlink('./users.json',(err) => err && console.log(err));

// console.log(Buffer.from("a").toJSON());

// Streams [readable - writable]

const rStr = fs.createReadStream('./txt.txt', 'utf8');
const wStr = fs.createWriteStream("./wStr.txt", 'utf8');

rStr.on('data', (chunk) => {
    console.log("=== Chunk ===", chunk);
    wStr.write(chunk);
});

console.log("raouf");