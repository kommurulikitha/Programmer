//question 3
let heading=document.getElementById('name');
//document.write(heading.innerHTML);
let name=prompt("Enter your name");
heading.innerHTML="Welcome " + name;

const present_time = document.getElementById('time');

function clock(){
    let time = new Date().toLocaleTimeString();
    present_time.innerText = time;
}
clock();
function darkmode(){
    const darkmode = document.body
    darkmode.classList.toggle('black');
}
setTimeout(darkmode,1000);