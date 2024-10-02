const path = require('path');

console.log(path.sep)
const filePath = path.join('/content/','subfolder',"test.txt")
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'content',"subfolder","test.txt")
console.log(absolute)

//chatgpt
// If script.js looks like this:

// js
// Copy code
// const path = require('path');
// const absolute = path.resolve('content', 'subfolder', 'test.txt');
// console.log(absolute);
// If you run this script from the /myProject folder, it will correctly find test.txt. But if you run the script from a different folder, like /myProject/content, it won't find test.txt because it's using the current folder you are in to resolve the path.

// Example Using __dirname:
// js
// Copy code
// const path = require('path');
// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
// console.log(absolute);
// Now, no matter where you run the script from, __dirname ensures it always starts looking from the folder where script.js is located. This way, the path to test.txt will always be correct.

