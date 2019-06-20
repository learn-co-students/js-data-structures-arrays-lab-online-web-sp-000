// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name);
}

function appendDriver(name) {
  let newList = [...drivers, name];
  return newList;
}

function prependDriver(name) {
  let newList = [name, ...drivers];
  return newList;
}

function removeLastDriver(name) {
  let newList = [...drivers.slice(0, 2)];
  return newList;
}

function removeFirstDriver(name) {
  let newList = [...drivers.slice(1, 3)];
  return newList;
}
