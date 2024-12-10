let name = "Maxym";
const year = 2007;
const greeting = (name) => console.log(`Hello, ${name}`);

const range = () => {
    numbers = [];
    for (let step = 15; step<=30; step++){
        numbers.push(step);
    };
    return numbers;
};

const rangeOdd = () => {
    numbers = []
    for(let step = 15; step<=30; step++){
        if (step%2 != 0){
            numbers.push(step);
            };   
        };
        return numbers;
};

const average = (a, b) => (a+b)/2;

const square = (a) => a*a;

const cube = (a) => a*a*a;

const calculate = () => {
    numbers = [];
    for(let step = 0; step<=9; step++){
        numbers.push(average(square(step), cube(step)))
    };
    return(numbers);
};

const fn = () => {
    const obj1 = { name: 'Maxym' };
    let obj2 = { name: 'Maxym' };
  
    obj1.name = 'Max';
    obj2.name = 'Max';

    obj2 = { name: 'Maxym Maxym' };
};

const createUser = (name, city) => ({name, city})

phone_book = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'Windy31', phone: '+38045465454433' }, 
    { name: 'Mystic', phone: '+380449859344433' },]

const findPhoneByName = (name) => {
    for (const people of phone_book){
        if (name === people.name){
            return people.phone;
            };
        };
};

phone_book2 = {'Marcus Aurelius': '+380445554433',
    'Windy31' : '+38045465454433',
    "Mystic": '+380449859344433',
}

const findPhoneByName2 = (name) => {return phone_book2[name]}
