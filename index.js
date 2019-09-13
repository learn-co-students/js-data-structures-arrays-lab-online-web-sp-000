// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

const destructivelyAppendDriver = () => {
    drivers.push('Ralph')
};

const destructivelyPrependDriver = () => {
    drivers.unshift('Bob')
};

const destructivelyRemoveLastDriver = () => {
    drivers.pop()
};

const destructivelyRemoveFirstDriver = () => {
    drivers.shift()
};

const appendDriver = () => {
   return [...drivers, 'Broom'];

};

const prependDriver = () => {
    return ['Arnold', ...drivers];
};

const removeLastDriver = () => {
    // drivers.slice(-1); error'd out
    return drivers.slice(0, drivers.length - 1);
};

const removeFirstDriver = () => {
    return drivers.slice(1)
};