const types = [true, 'hello',undefined, 5, 12, -200, false, false, 'word', [1,2,3], {n: 5}, 99, false, 'string', ['a','b'], undefined];
const counter = {}

for (const elements of types){
    counter[typeof elements] = counter[typeof elements] || 0;
    counter[typeof elements] += 1;
};
