// Write your solution here!
const drivers = [ 'Milo', 'Otis', 'Garfield' ];

function destructivelyAppendDriver (newDriver) {
  drivers.push(newDriver);
};

function destructivelyPrependDriver (newDriver) {
  drivers.unshift(newDriver);
};

function destructivelyRemoveLastDriver () {
  drivers.pop();
};

function destructivelyRemoveFirstDriver () {
  drivers.shift();
};

function appendDriver (name) {
  return [...drivers, name];
};

function prependDriver (name) {
  return [name, ...drivers];
};

function removeLastDriver () {
  return drivers.slice(0, drivers.length-1);
};

function removeFirstDriver () {
  return drivers.slice(1);
};
