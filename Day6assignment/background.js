// Question 1
array=['brown','yellow','red','blue','green','pink'];
const attr=document.body;
let i=0;
function changeColor(){
    attr.style.backgroundColor=array[i];
    i++;
}
setInterval(changeColor,5000);