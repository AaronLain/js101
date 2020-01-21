console.log('ARRAYS');

const valuePrinter = (arr, val) => {
    return arr[val];
};

console.log(valuePrinter([1,2,3,4,5], 2));
console.log(valuePrinter(['cat', 'dog', 'bear', 'turtle', 'fish'], 3));
console.log(valuePrinter([true, {name: "Ben"}, 12, 'virus'], 1));

