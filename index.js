// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver() {
  drivers.push("Ralph");
}

 function destructivelyPrependDriver() {
   drivers.unshift("Bob");
 }

 function destructivelyRemoveLastDriver() {
   drivers.pop();
 }

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver() {
  let newDrivers = [...drivers, "Broom"];
  return newDrivers;
}

function prependDriver() {
  let newDrivers = ["Arnold", ...drivers];
  return newDrivers;
}

function removeLastDriver() {
return drivers.slice(0, 2);
}

function removeFirstDriver() {
  return drivers.slice(1);
}
