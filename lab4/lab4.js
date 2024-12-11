///task 1
const sum1 = (...args) => {
    let sum = 0;
    for (let step = 0; step< args.length; step++){
        sum += args[step];
    };
    return sum;
};

const sum2 = (...args) => {
    let sum = 0;
    for (const arg of args){
        sum += arg;
    };
    return sum;
};

const sum3 = (...args) => {
    let sum = 0;
    while (args.length > 0){
        value += args.pop();
    };
    return sum;
}

const sum4 = (...args) => {
    let sum = 0;
    do {
        value += args.pop()
    } while (args.length > 0);
    return sum;
}

const sum5 = (...args) => {
    return args.reduce((accumulator, currentValue) => accumulator + currentValue);
}

///task 2
const max = (matrix) => {
    let max = matrix[0][0];
    for (row of matrix){
        for (number of row){
            if (number > max){
                max = number;
            };
        };
    };
    return max;
};

///task 3
const ages = (people) => {
    dovidka = {};
    for (const person in people){
        dovidka[person] = people[person].died - people[person].born;
    };
    return dovidka;
}

