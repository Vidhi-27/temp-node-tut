//name of the module : fs
//can be done : asynchronously - non-blocking
//            : synchtonously - blocking

const {readFileSync,writeFileSync} = require('fs');
console.log('start');

const first = readFileSync("./content/first.txt",'utf8');
const second = readFileSync("./content/second.txt","utf8")
// console.log(first,second);

//path, what to write
//if there is file then node will overwrite the file else create a new file
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first} , ${second}`,
    {flag : 'a'} //if we just want to append into the already existing file
);

console.log('done with this task');
console.log('starting the next one');













