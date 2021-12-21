//How to compare two JSON have the same properties without order?
//var obj1 = { name: "Person 1", age:5 };
//var obj2 = { age:5, name: "Person 1" };

var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

let countObj1 = 0;
let countObj2 = 0;
console.log("------------------------------------------------------");
console.log("comparing all keys and their values of obj1 to obj2");
for (key in obj1) {
  if (key in obj2 && obj2[key] == obj1[key]) {
    console.log(`${key} is present in both objects and with same value ${obj1[key]}`);
    countObj1 += 1;
  }
}
console.log(`total number of keys in obj1 is ${countObj1}`);

console.log("------------------------------------------------------");
console.log("comparing all keys and their values of obj2 to obj1");
for (key in obj2) {
  if (key in obj1 && obj2[key] == obj1[key]) {
    console.log(`${key} is present in both objects and with same value ${obj2[key]}`);
    countObj2 += 1;
  }
}
console.log(`total number of keys in obj2 is ${countObj2}`);

console.log("------------------------------------------------------");
if (countObj1 == countObj2) {
  console.log(`both objects have obj1 and obj2 are having same properties`);
}
wdwd
