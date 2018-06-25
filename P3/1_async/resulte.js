const fs = require('fs');
const path = require('path');

console.info(1)
fs.readFile(path.resolve(__dirname, './blog.txt'), (err, data) => {
  console.info(2);
  fs.readFile(path.resolve(__dirname, './list.txt'), (err, data) => {
    console.info(3)
  });
  console.info(4)
});
console.info(5)