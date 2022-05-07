function sumObjectValues() {

  function add(sum, a) {
    sum += a;
    return(sum);
    }

  let values = [];
  for (let arg of arguments) {
    values = values.concat(Object.values(arg)).filter(el => typeof el === "number");
  }
  return [].reduce.call(values, add);
}

let object = {
  a: 2,
  name: 'John',
  age: 23
};


let object1 = {
  a: 25,
  name: 'Jane',
  age: 25
};

console.log(sumObjectValues(object, object1));
