// MEMORY
// CONST | LET | VAR

// var is the old one - because its not hipster
// const space in memory, cant change
// let - basically for variables (updated use of var)

// const once assigned, cant be changed
// both var and let CAN be changed

const CANVAS_HEIGHT = 500; // globally scoped

function scopeExample() {
  const NEW_VARIABLE = 300; // function scoped
}

if (true) {
  const insideBlock = 450; // block scoped
}

{
  const x = 3;
}

/* 

global scoped
function scoped
block scoped

*/

// Const and Let are Block Scoped

let banana = "yellow fruit";
console.log("banana:", banana);

if (true) {
  let banana = "no, really. its a yellow fruit";
  console.log("banana:", banana);
}

console.log("banana:", banana);

console.clear();

let notStupid = true;
console.log("notStupid:", notStupid);
// let notStupid = 123;
console.log("notStupid:", notStupid);
notStupid = "some random amount of chars";
console.log("stupid:", notStupid);

// const you can only declare
// let you can declare and re-assign
// var you can do whatever suits you best

console.clear();

const dog = "animal";
console.log(dog);
// var dog
// dog = "animal"

// const and let are NOT hoisted (put their declarations at the top of the file beforehand - done by the interpretor, not by us, developers)
// var is hoisted. so the declaration and assignment of values, are done at different spots in time

var cat;
cat = "un gatito";
let bird;
bird = "piu piu";

const something = undefined;

const anArray = [1, 2, 3];

anArray.push(4);
console.log("anArray:", anArray);

// variables by value vs variables by reference
// [] === [] // 5 true - 3 false
//  {} === {} // 5 true - 3 false
//  true === true // everyone on the true train - everyone is right
// 0 === 0
// "hello" === "hello" //
//
console.clear();
const obj = {};

const obj2 = obj;

console.log(obj === obj2);

obj.name = "Anna";

console.log(obj === obj2);
console.log("obj2:", obj2);

const person = {
  name: "Daniel",
  age: 28,
  from: "Netherlands",
  speaks: ["Dutch", "English", "Russian", "French", "German"],
};

const danielLanguages = person.speaks;

danielLanguages.push("Spanish");
console.log("danielLanguages:", danielLanguages);
