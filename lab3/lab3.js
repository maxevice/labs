///1 task
const random = (min, max) => {
    if(max === undefined){
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max+1 - min) + min);
};


///2 task
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const generateKey = (length, characters) => {
    key = '';
    for (let i = 0; i<= length; i++){
        key += characters[Math.floor(Math.random() * characters.length)]

    };
    return key;
};

///3 task
const ipToInt = (ip = '127.0.0.1') => {
    return ip.split('.').reduce((accumulator, currentValue) => (accumulator << 8) + parseInt(currentValue));
};

///4 task
const args = (iface) => {
    const result = [];
    for (const name in iface) {
      const fun = iface[name];
      result.push([name, fun.length]);
    };
    return result;
  };

