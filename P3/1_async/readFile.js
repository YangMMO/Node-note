const fs = require('fs');
const path = require('path');

fs.readFile(path.resolve(__dirname, './blog.txt'), (err, data) => {
  console.info(1, data.toString());
});
console.info(2, 'read blog end') ;

fs.readFile(path.resolve(__dirname, './list.txt'), (err, data) => {
  console.info(3, data.toString());
});
console.info(4, 'read list end') ;