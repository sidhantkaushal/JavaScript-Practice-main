//Concatenation : Use Backticks to do String interpolation
// Placeholder are used to inject variables : ${}.
// Example given below.
const myname="Sidhant";
const repoCount=15;

console.log(`My name is ${myname} nad my repocount is ${repoCount} .`);


// Declaration using new keyword;

const str=new String("  new-Str  ");

console.log(str.length);
console.log(str.charAt(2));
console.log(str.indexOf('w'));

//Substring
const subStr=str.substring(0,4);
console.log(`${subStr} is the substring.`);

//Slice :
const subSlice = str.slice(1,5);
console.log(`${subSlice} is the sliced string.`);

//trim :
// Remove white spaces from front and end of a string.
const subTrim = str.trim();
console.log(`${subTrim} is the trimmed string`);
// Trim has a lot other methods .
// Check docs for that .

//replace :
// Replace one value with another .
const subReplace = str.replace('-','$');
console.log(`${subReplace} is the replaced string`);

//split :
// makes an array from the string based on a seprator.
const subsplit = str.split('-');
console.log(subsplit);

//join :
const subjoin = subsplit.join('');
console.log(`${subjoin} is the joined string`);






