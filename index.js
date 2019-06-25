// Write your solution here!
const drivers =  ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(driver) {
  drivers.push(driver)
}
function destructivelyPrependDriver(driver) {
  drivers.unshift(driver)
}

function destructivelyRemoveLastDriver(driver) {
  drivers.pop(driver)
}

function destructivelyRemoveFirstDriver(driver) {
  drivers.shift()
}

function appendDriver(driver) {
  return [...drivers.slice(), driver]
}

function prependDriver(driver) {
  return [driver, ...drivers.slice()]
}

function prependDriver(driver) {
  return [driver, ...drivers.slice()]
}

function removeLastDriver() {
  return [...drivers.slice(0, -1)]
}

function removeFirstDriver() {
  return [...drivers.slice(1)]
}
