const eventEmitter = require('events');

class MyEmitter extends eventEmitter {};

const myEmitter = new MyEmitter()

const clg1 = () => {
  console.log(1)
}

myEmitter.on('console', clg1)

myEmitter.on('console', () => {
  console.log(2)
})

const boolean = myEmitter.emit('console')

console.log(boolean)
console.log(myEmitter.listeners('console'))
console.log(myEmitter.listeners('console')[0])

myEmitter.removeListener('console', clg1);

myEmitter.emit('console')

console.log(myEmitter.listeners('console'))