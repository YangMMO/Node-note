const fs = require('fs')
const path = require('path')
const util = require('util')
const readFile = util.promisify(fs.readFile)

const t1 = path.resolve(__dirname, './1.txt')
const t2 = path.resolve(__dirname, './2.txt')
const t3 = path.resolve(__dirname, './3.txt')

Promise.all([
  readFile(t1),
  readFile(t2),
  readFile(t3)
]).then(([data1, data2, data3]) => {
  console.log(data1.toString())
  console.log(data2.toString())
  console.log(data3.toString())
}).catch(err => {
  console.log(err)
})

// 2

// readFile(t1).then(data => {
//   console.log(data.toString())
//   return readFile(t2)
// }).then(data => {
//   console.log(data.toString())
//   return readFile(t3)
// }).then(data => {
//   console.log(data.toString())
// }).catch(err => {
//   console.log(err)
// })

// 1

// fs.readFile(t1, (err1, data1) => {
//   console.log(data1.toString())
//   fs.readFile(t2, (err2, data2) => {
//     console.log(data2.toString())
//     fs.readFile(t3, (err3, data3) => {
//       console.log(data3.toString())
//     })
//   })
// })