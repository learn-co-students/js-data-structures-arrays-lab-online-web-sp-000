// Write your solution here!
const app = "I don't do much."

let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name)
}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}

function appendDriver(name){
  var driver = [...drivers, name];
  return driver;
}

function prependDriver(name){
  var driver = [name, ...drivers];
  return driver;
}

function removeLastDriver(){
  var driver = drivers.slice(0, drivers.length - 1);
  return driver;
}

function removeFirstDriver(){
  var driver = drivers.slice(1);
  return driver;
}
