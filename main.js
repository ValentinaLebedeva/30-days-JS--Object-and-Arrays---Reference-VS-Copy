// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2)

age = 200;
console.log(age, age2)

// Let's say we have an array
const players = ["Wes", "Sarah", "Rayn", "Poppy"];

// and we want to make a copy of it.
const team = players;
console.log(team, players)
// You might think we can just do something like this:
team[3] = "Lux";
// however what happens when we update that array?
console.log(team, players) // team is a reference for the array

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

const team2 = players.slice(); //return the entire array

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);
console.log(team3)

// or use the new ES6 Spread
const team4 = [...players];

const team5 = Array.from(players);
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80,
    social: {
        twitter: "1",
        facebook: "2"
    }
};

// and think we make a copy:
const captain = person; // again reference

// how do we take a copy instead?
// Things to note - this is only 1 level deep - both for Arrays and Objects. 
//lodash has a cloneDeep method, but you should think twice before using it.
const cap2 = Object.assign({}, person, { number: 99 });

//  ...spread
const cap3 = { ...person };
cap3.age = 12;
cap3.number = 100;
cap3.social.good = "hi"
console.log(person)
console.log(cap3)


