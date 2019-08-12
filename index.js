// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(driver) {
  return drivers.push(driver);
}

function appendDriver(driver) {
  return [...drivers, driver];
}

function destructivelyPrependDriver(driver) {
  return drivers.unshift(driver);
}

function prependDriver(driver) {
  return [driver, ...drivers];
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
  return drivers;
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
  return drivers;
}

function removeLastDriver() {
  return drivers.slice(0, -1);
}

function removeFirstDriver() {
  return drivers.slice(1);
}
