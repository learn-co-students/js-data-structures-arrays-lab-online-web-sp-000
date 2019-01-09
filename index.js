// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver() {
  drivers.push('Ralph')
}

function destructivelyPrependDriver() {
  drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  let newDrivers = [...drivers.slice(0), name]
  return newDrivers
}

function prependDriver(name) {
  let newDrivers = [name, ...drivers.slice(0)]
  return newDrivers
}

function removeLastDriver() {
  let newDrivers = drivers.slice(0, 2)
  return newDrivers
}

function removeFirstDriver() {
  let newDrivers = drivers.slice(1)
  return newDrivers
}
