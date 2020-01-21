console.log('OBJECTS');

const wordLength = (word) => {
    return word.length;
}

console.log("number of letters", wordLength('cat'));
console.log("number of letters", wordLength('monkeybutt'));

const ageCheck = (age) => {
    if (age >= 21) {
        console.log('PARTAYY!!!!');
    } else {
        console.log('no drinks for you!');
    }
}

ageCheck(12);
ageCheck(22);


