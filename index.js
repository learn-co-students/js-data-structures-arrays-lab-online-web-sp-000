// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  return drivers.concat(name);
}

function prependDriver(name) {
  let new_drivers = [name, ...drivers];
  return new_drivers;
}

function removeLastDriver() {
  return drivers.slice(0,-1);
}

function removeFirstDriver() {
  let new_drivers = drivers.slice(1);
  return new_drivers;
}
