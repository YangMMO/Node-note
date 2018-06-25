// function execEachTick() {
//   setImmediate(execEachTick);
//   console.log('exec each tick');
// }
 
// setImmediate(execEachTick);

function fn() {
  process.nextTick(fn);
}

process.nextTick(fn)