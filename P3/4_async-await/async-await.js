const
  util = require('util'),
  fs = require('fs');

const getBlog = function (file) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000)
  }).then(() => {
    return util.promisify(fs.readFile)(file)
  })
}

let file1 = __dirname + '/1.txt',
    file2 = __dirname + '/2.txt',
    file3 = __dirname + '/3.txt';

async function main () {
  let [data1, data2] = await Promise.all([
    getBlog(file1),
    getBlog(file2)
  ])
  console.info(data1.toString());
  console.info(data2.toString());

  let data3 = await getBlog('456');
  // let data3 = await getBlog(file3);
  console.info(data3.toString());

  return data1.toString() + data2.toString() + data3.toString();

  // getBlog(file1).then(data1 => {
  //   console.info(data1.toString());
  //   return getBlog(file2);
  // }).then(data2 => {
  //   console.info(data2.toString());
  //   return getBlog(file3);
  // }).then(data3 => {
  //   console.info(data3.toString());
  // })
}

async function start () {
  try {
    let str = await main()
    console.log(str)
  } catch (err) {
    console.log('异常')
  }

}


start()