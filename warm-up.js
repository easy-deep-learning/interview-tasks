// 1 get the string Alice=Bob=Charlie=Diana=Ethan
const names = [
  'Alice',
  'Bob',
  'Charlie',
  'Diana',
  'Ethan',
];


// 2 get the string EthaaanDiaaanaaaChaaarlieBobAlice
const namesPromises = [
  Promise.resolve('Alice'),
  Promise.resolve('Bob'),
  Promise.resolve('Charlie'),
  Promise.resolve('Diana'),
  Promise.resolve('Ethan'),
];

// 3 What will be the output of the following code?
// Don't run the code, just explain the output.

console.log('first console.log');
setTimeout(() => {
  console.log('setTimeout 0');
}, 0);

Promise.resolve('Ethan').then((name) => {
  console.log('Promise resolved:', name);
}).then(() => {
  console.log('Promise then');
  return Promise.reject('Diana');
}).catch((error) => {
  setTimeout(() => {
    console.error('Promise rejected:', error);
  }, 0);
})
console.log('last console.log');