// npm -> gloabal command,comes with Node
// np --version

// local dependency -> use it only in this particular project
// npm i <packageName>
// i is for install , packageName can be Bootstrap/exppress/lodash

//global dependency -> use it in any project
// npm install -g <packageName>
// sudo install -g <packageName>(mac)

//package.json -> its like a manifest file (stores important info about project/package)
//3 ways to create package.json:
//a) manual approch (create package.json in the root,then create properties etc)
//b) npm init (step by step ask u question anser it or , press enter to skip it)
//c) npm init -y (everything is setup as default)

//automatically in node module, dependencies are stored(packages that have been loaded ,
// which show case packagesused in current project is using)
//for bootstrap : popper.js and jquery
//lodash is utiltiy library

//are we going to push everything into git - including node_modules
//.gitignore -> which are going to be ignored by source control

const _ = require('lo');
const items = [1,[2,[3,[4]]]];
const newitems = _.flattenDeep(items);
console.log(newitems)

