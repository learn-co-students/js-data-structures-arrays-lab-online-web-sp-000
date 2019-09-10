// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];
let nDriver;
function destructivelyAppendDriver(name){
  drivers.push(name);
}
function destructivelyPrependDriver(name){
  drivers.unshift(name);
}
function destructivelyRemoveLastDriver(){
  drivers.pop(name);
}
function destructivelyRemoveFirstDriver(){
  drivers.shift(name);
}
function appendDriver(name){
  const nDriver = [...drivers, name];
  return nDriver;
}
function prependDriver(name){
  const nDriver = [name, ...drivers];
  return nDriver;
}
function removeLastDriver(){
  const nDriver = drivers.slice(0, 2);
  return nDriver;
}
function removeFirstDriver(){
  const nDriver = drivers.slice(1);
  return nDriver;
}
