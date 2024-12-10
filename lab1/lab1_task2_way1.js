const types = [true, 'hello',undefined, 5, 12, -200, false, false, 'word', [1,2,3], {n: 5}, 99, false, 'string', ['a','b'], undefined]
const counter = {number: 0, string: 0, boolean: 0, object: 0, undefined: 0}

for (const elements of types){
    for(keys in counter){
        if (typeof elements === keys){
            counter[keys] += 1
        }
    }
}
