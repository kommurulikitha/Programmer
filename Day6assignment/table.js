//Question 2
let input=parseInt(prompt("Enter the table number to be displayed"));
let txt=""
        for (let i=1;i<=20;i++){
            txt +="<br>"+ input +' x ' + i + ' = ' + (input*i);
        }
        document.getElementById("table").innerHTML = txt;
