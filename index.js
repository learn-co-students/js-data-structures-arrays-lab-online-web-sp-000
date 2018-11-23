// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield" ];

function destructivelyAppendDriver(name){
  drivers.push(name);
  return drivers;
  }
  
function destructivelyPrependDriver(name){
  drivers.unshift(name);
  return drivers;
}

function destructivelyRemoveLastDriver(){
  drivers.pop(name);
  return drivers;
}

function destructivelyRemoveFirstDriver(){
  drivers.shift(name);
  return drivers;
}

 function appendDriver(name){
   return [...drivers, name]
 }
 
 function prependDriver(name){
   return [name, ...drivers]
 }

function removeLastDriver() {
  var newDrivers = drivers.slice(0, drivers.length -1)
  return newDrivers;
}
 function removeFirstDriver() {
  var newDrivers = drivers.slice(1)
  return newDrivers;
}