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