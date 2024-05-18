// HIGHER ORDER FUNCTIONS ON ARRAY OF OBJECTS

var people = [
    { name: "Anupam", color: "White" },
    { name: "Anushka", color: "Green" },
    { name: "Sanjay", color: "Green" },
    { name: "Nayonika", color: "Orange" }
]

// for(var i = 0; i < people.length; i++) {
//     if (people[i].color === "Green") {
//         greenLover.push(people[i].name)
//     }
// }

// Filter -- only some objects are taken into account
var isGreen = (person) => person.color === "Green"

var greenLover = people.filter(isGreen)
console.log("Hello", greenLover)

// Find -- filter but only first occurence
console.log("First Occurrence", people.find(isGreen))

// Map -- a part of all objects is mutated
var x = people.map((person) => person.color + " is the favorite color of " + person.name)
console.log(x)


console.log();


