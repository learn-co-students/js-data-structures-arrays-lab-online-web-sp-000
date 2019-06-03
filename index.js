// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver() {
  drivers.shift(name);
}

function appendDriver(name){
  const newdrivers = [...drivers, name];
  return newdrivers;
}

function prependDriver(name){
  const newdrivers = [name, ...drivers];
  return newdrivers;
}

function removeLastDriver(){
  return drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver(){
  return drivers.slice(1);
}
