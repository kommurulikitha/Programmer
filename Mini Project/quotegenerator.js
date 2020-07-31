fetch("https://type.fit/api/quotes")

.then(function(response) {
return response.json();
})
.then(data=>{ 
    console.log(data);
    var random_number=Math.floor(Math.random()*data.length);
    console.log(random_number);
    document.getElementById('text').innerHTML=data[random_number]['text'];
})

const attr=document.body;
const asd=document.getElementById('title');
function changeColor(){
    attr.style.color='yellow';
    attr.style.backgroundColor='#00b894';
    asd.style.color='blue';
}
changeColor();
