let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function appendDriver(name) {
  let newDrivers = [...drivers, name];
  return newDrivers;
}

function prependDriver(name) {
  let newDrivers = [name, ...drivers];
  return newDrivers;
}

function removeLastDriver() {
  return drivers.slice(0, drivers.length - 1)
};

function removeFirstDriver() {
  return drivers.slice(1, drivers.length)
};
