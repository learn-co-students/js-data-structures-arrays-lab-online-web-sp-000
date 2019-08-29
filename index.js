// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push('Ralph');
}

function destructivelyPrependDriver(name) {
  drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const updateDrivers = [...drivers, name];

  return updateDrivers;
  return drivers;
}

function prependDriver(name) {
  const updateDriver = [name, ...drivers];

  return updateDriver;
  return drivers;
}

function removeLastDriver() {
  const remLast = drivers.slice(0, drivers.length - 1);

  return remLast;
}

function removeFirstDriver() {
  const remFirst = drivers.slice(1);

  return remFirst;
}
