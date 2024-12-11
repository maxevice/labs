///task 1
const pipe = (...fns) => x => {
    for (const fn of fns){
        if (typeof fn != "function"){
            return 'Not function detected';
        };
    };
    fns.reduce((v, f) => f(v), x);
};

///task 2
const compose = (...fns) => {
    const handlers = [];
    const composed = (x) => {
      if (fns.length === 0) return x;
      const last = fns.length - 1;
      let res = x;
      try {
        for (let i = last; i >= 0; i--) {
          res = fns[i](res);
        }
        return res;
      } catch (error) {
            return undefined;
      }
    };
    return composed;
  };
  
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const calculate = compose(inc, twice, cube);
console.log(calculate(5));
