// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

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
    return [...drivers, name];
//    const newDrivers = [...drivers, name];
//    return newDrivers
}

function prependDriver(name) {
    return [name, ...drivers];
    // const newDrivers = [name, ...drivers]
    // return newDrivers
}

function removeLastDriver() {
    return drivers.slice(1);
    // const newDrivers = drivers.slice(0, -1)
    // return newDrivers;
}

function removeFirstDriver() {
    return drivers.slice(0, drivers.length - 1);
    // const newDrivers = drivers.slice(1,3)
    // return newDrivers;
}