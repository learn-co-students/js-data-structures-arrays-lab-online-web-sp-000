// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  let driverAppended = [...drivers, name];
  return driverAppended;
}

function prependDriver(name){
  let driverPrepended = [name, ...drivers];
  return driverPrepended;
}

function removeLastDriver(){
  let removeLast = drivers.slice(0,drivers.length - 1);
  return removeLast;
}

function removeFirstDriver(){
  let removeFirst = drivers.slice(1);
  return removeFirst;
}