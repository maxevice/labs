///task 1
const seq = (f) => {
  return (g) => {
    if (typeof g === 'number') {
      return f(g);
    } else {
      return seq((x) => f(g(x)));
    }
  };
};

///task2
const array = () => {
  const data = [];
  const get = (i) => data[i];
  get.push = (x) => data.push(x);
  get.pop = () => data.pop();
  return get;
};

