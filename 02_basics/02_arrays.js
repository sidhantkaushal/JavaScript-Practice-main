const marvel_heros=["thor","Ironman","spiderman"]
const dc=["superman","batman","flash"]

// Push method adds the element/Array as it is to the method applied array.
// marvel_heros.push(dc);

console.log(marvel_heros);

// console.log(marvel_heros[3][1]);

const indie=["shakti","hero-bhakti","bheem"];

// Concat method adds the element of an array to the required one and then 
// it returns a new array altogether.

const allHeros=marvel_heros.concat(indie);

console.log(allHeros);

// *******************Spread Operator

const allNewHeroSpread=[...marvel_heros,...dc,...indie]
console.log(allNewHeroSpread)

// ************Flat function

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array= another_array.flat(Infinity)

console.log(real_another_array)

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"hitesh"})); 
// interesting as it cannot convert object to array so it gives a empty array .

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));


//DONE