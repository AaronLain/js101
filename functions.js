const nuggetizer = (animal) => {
    const output = `processed ${animal}`;
    return output;
};

console.log(nuggetizer('chicken'));
console.log(nuggetizer('pig'));
console.log(nuggetizer('cow'));
console.log(nuggetizer('fish'));

const dogBreed = (dog) => {
    return `My favorite dog breed is ${dog}`;
}

console.log(dogBreed('lab'));


const fortyTwo = (number) => {
    const addedNumber = number + 42;
    return `Your new number is ${addedNumber}`;
}

console.log(fortyTwo(15));

const oldAge = (year) => {
    const superOld = 2099 - year;
    return `You will be ${superOld} in 2099`;
}

console.log(oldAge(1965));