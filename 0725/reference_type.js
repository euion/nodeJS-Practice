//함수 Function
const add = function (x, y) {
  return x + y;
};

const add2 = (x, y) => {
  return x, y;
};

function add3(x, y) {
  return x + y;
}

//객체 Object
const person = {
  name: "Kim",
  age: 22,
};

// 배열 Array
const arr = [1, 2, 3];

module.exports = {
  add,
  person,
  arr,
};
