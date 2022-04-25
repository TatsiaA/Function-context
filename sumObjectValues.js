function sumObjectValues(obj) {
  const values = Object.values(obj)
  .filter(el => typeof el === "number")
  .reduce(function(sum, a) {
    sum += a;
    return(sum);
    }, 0);
  return values;
}


let object = {
  a: 2,
  name: 'John',
  age: 23
};
sumObjectValues(object) // 25
