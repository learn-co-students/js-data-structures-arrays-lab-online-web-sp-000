const drivers =  ["Milo", "Otis", "Garfield"];

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
  // drivers2 = drivers.slice();
  // drivers2.push(name);
  // return drivers2;
  return [...drivers, name];
}

function prependDriver(name) {
  // drivers2 = drivers.slice();
  // drivers2.unshift(name);
  // return drivers2;
  return [name, ...drivers];
}

function removeLastDriver() {
  // drivers2 = drivers.slice();
  // drivers2.pop();
  // return drivers2;
  return drivers.slice(0, -1);
}

function removeFirstDriver() {
  // drivers2 = drivers.slice();
  // drivers2.shift();
  // return drivers2;
  return drivers.slice(1);
}