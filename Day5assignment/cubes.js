let input=parseInt(prompt("Enter a positive number for creating an array of size:"));
let array=[];
for (let i=0; i<input; i++){
    array[i]=parseInt(prompt("Enter your number"));
}
console.log(`The given array is:`);
console.log(array);
let even=array.filter(ele=>ele%2!=0);
console.log(`The array with even numbers is:`);
console.log(even);
let evencubes=even.map(ele => ele**3);
console.log(`The cubes of even numbers in array:`);
console.log(evencubes);