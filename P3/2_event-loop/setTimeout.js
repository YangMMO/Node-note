function waste(time) {
  let start = Date.now();
  while(Date.now() - start > time) {
    
  };
  console.log(start)
}
 
setTimeout(() => {
  console.log('exec after 1000ms');
  waste(5000);
}, 1000);
 
setTimeout(() => {
  console.log('exec after 2000ms');
}, 2000);