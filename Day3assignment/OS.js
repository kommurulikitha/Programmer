let input=prompt("Enter OS name and version:");
let str=input.trim();
let name=str.slice(0,str.indexOf(' '));
let version=str.substring(str.indexOf(' ')+1);
console.log(`The OS name is ${name} and version is ${version}`);

