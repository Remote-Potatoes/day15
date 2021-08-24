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

const personThatIsDaniel = {
  name: "Daniel",
  age: 28,
  from: "Netherlands",
  speaks: ["Dutch", "English", "Russian", "French", "German"],
};

const danielLanguages = personThatIsDaniel.speaks;

danielLanguages.push("Spanish");
console.log("danielLanguages:", danielLanguages);

console.clear();

// Functions
// functions -> declared with the `function` keyword and its independent and not aligned with anything
// methods -> are always linked to an object you can see that something is a method, because it is preceded by a `.`

const arrow = () => {};

function nonArrow() {}

const implicitReturnWithArrow = () => `Voila`;
const explicitReturnWithArrow = () => {
  return `Voila`;
};

const isCorrect = (name) => `Hello ${name}`;

console.log(implicitReturnWithArrow());
console.log(isCorrect(`Anna`));
console.clear();
class Person {
  constructor(name) {
    this.specialName = name;
  }

  sayName() {
    console.log("Breathe in..., create suspense, Aaaaaaand");
    setTimeout(() => {
      console.log(this);
      console.log(this.specialName);
    }, 1000);
  }
}

const person = new Person("Pablo");

// person.sayName();

const functionThatCreatesFood = (name, mainIngredient, time) => ({
  name,
  mainIngredient,
  time,
});

const returnsArray = () => [1, 2, 3];

console.log(functionThatCreatesFood("spagghetti", "spinach", 99));
console.log(returnsArray());

const juan = "juan";

const object = {
  juan,
};

const realPerson = {
  name: "Chiao-I",
  from: "Taiwan",
  livesIn: "Germany",
  languagesSpoken: {
    english: "Conversational",
    german: "Yeah, a bit",
    taiwanese: "Almost native level, ehe he, jk, native, BITCH!",
    mandarin: "Native level",
    cantonese: "can understand as much as german",
    japanese:
      "just a bit, you know. similar languages, all around, to german and cantonese, clearly",
  },
};

// const name = realPerson.name;
// const from = realPerson.from;
// const livesIn = realPerson.livesIn;
// DESTRUCTURING IS LOVE 🫀
const { from, name, livesIn, languagesSpoken } = realPerson;
console.log("name:", name);

// const { english } = realPerson.languagesSpoken;
// console.log("english:", english);

const realPerson2 = {
  name: "Marie",
  from: "France",
  livesIn: "France",
  languagesSpoken: {
    french: "Native, duh",
    english: "Native, duh",
    spanish:
      "Off, they're those annoying neighbours always making noise, you need a way to shut them up",
  },
};

const { name: nameFromRealPerson2 } = realPerson2;
console.log("nameFromRealPerson2:", nameFromRealPerson2);

console.clear();
// destructuring in arrays

const nationalities = [
  "dutch",
  "portuguese",
  "english",
  "spanish",
  "french",
  "taiwanese",
  "australian",
  "hungarian",
  "ecuatorian",
];

// const firstNatinality = nationalities[0]
// const secondNationality = nationalities[1]

const [decartesSaidStuff, daVinciPainted, cowabanga, , raphaelWasJustThere] =
  nationalities;

//   REST and SPREAD Parameters

console.clear();

const { german, english, ...rest } = languagesSpoken;
console.log("rest:", rest);
console.log("english:", english);

const chessBoard = [
  "king",
  "queen",
  "rook",
  "rook",
  "knight",
  "knight",
  "horse",
  "horse",
  "pawn",
  "pawn",
  "pawn",
  "pawn",
  "pawn",
  "pawn",
  "pawn",
  "pawn",
];

const [theOneWhoMustSurvive, theBigBoss, ...theRestOfThePieces] = chessBoard;
console.log("theRestOfThePieces:", theRestOfThePieces);
console.log("theBigBoss:", theBigBoss);
console.log("theOneWhoMustSurvive:", theOneWhoMustSurvive);

console.clear();

const clone1 = {
  name: "Juan",
  age: 13,
};

const clone2 = {
  whichOne: "number 2, obviously",
  where: "Oh Misty Eye of the Mountains, Below",
  name: "Pablo2",
};

// SPREAD OPERATOR IN OBJECTS

const clone = {
  ...clone1,
  ...clone2,
};
console.log("clone:", clone);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const theBigBahama = [...arr1, ...arr2, ...arr1, ...arr2];
console.log("theBigBahama:", theBigBahama);

function allWordsToReferMeBy(name, specialGreeting, ...everyOtherOne) {
  console.log("everyOtherOne:", everyOtherOne);
  return `
	Dear ${specialGreeting} ${name},
	Or, as you may prefer, ${everyOtherOne.join(" or ")}
	`;
}

console.log(
  allWordsToReferMeBy(
    "Andre",
    "Teacher",
    "Yo, wheres my car?",
    "Anna",
    "dont call me stacy",
    "thats not my name"
  )
);

function func(first) {
  console.log("first:", first);
}

func(...[1, 2, 3, 4, 5, 6]);
console.log(Math.max(...[1, 2, 3, 4, 5, 6, 7, 8, 9, 11]));
