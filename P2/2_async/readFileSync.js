const fs = require('fs');
const path = require('path');

const blog = fs.readFileSync(path.resolve(__dirname, './blog.txt'));
console.info(1, blog.toString());
console.info(2, 'read blog end') ;

const list = fs.readFileSync(path.resolve(__dirname, './list.txt'));
console.info(3, list.toString());
console.info(4, 'read list end') ;