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

const expense = {
    dateCreated: '01/17/2020',
    location: 'Baja Burrito',
    cost: 12.57,
    isGood: true
};

console.log(expense.cost);

const employee = {
    firstName: 'Ben',
    lastName: 'Swolo',
    height: 1.8,
    isCool: false,
    lightsaberColor: 'red'
};

console.log(employee.isCool);
console.log(employee.firstName);
console.log(employee.lastName);

const statusMaker = (employee) => {
    if (employee.firstName[0] == 'M') {
        employee.status = 'vip';
        return employee;
    } else {
        employee.status = 'peasant';
        return employee;
    }
};

statusMaker(employee);
console.log(employee.status);

