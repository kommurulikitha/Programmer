//log the complete todos to console.
//promises/async or await/fetch.


//Fetch API
  
console.log('Fetch API');
// Making a get request
console.log(`Printing through fetch`);
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json())
.then(data=>console.log(data))

let obj = {
    "userId": 7345,
    "id": 34534,
    "title": "fdsfgs sdjkf",
    "completed":'no'
}
// Make a post Request
fetch('https://jsonplaceholder.typicode.com/todos',{
    method:'POST',
    title: JSON.stringify(obj)
}).then(response=>response.json())
.then(data=>console.log(data))


// todos api

async function fetchTodos(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    console.log(`Printing through async,await`);
    console.log(data);
}

fetchTodos();


let obj1 = {
    "userId": 7345,
    "id": 34534,
    "title": "fdsfgs sdjkf",
    "completed": 'no'
}

console.log(obj1);
let str = JSON.stringify(obj1);
console.log(str)

let strobj = JSON.parse(str);
console.log(strobj)