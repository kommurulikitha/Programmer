//Question 4
//Displaying calc funcs

let choice=Number(prompt("Choose your operator 1.Addition \n 2.Subtraction \n 3.Multiplication \n 4.Division \n 5.Square root \n 6.Percentage"));
if (choice<1 ||choice>6 ||choice==null){
    console.log("Invalid input");
}
else{
    switch(choice){
        case 1:
            let num1= parseInt(prompt("Enter your first number"));
            let num2= parseInt(prompt("Enter your second number"));
            if (num1==NaN ||num2==NaN){
                console.log("invalid");
            }
                result=num1+num2;
                console.log(`Addition of ${num1} and ${num2} is ${result}`);
            break;
        case 2:
            let num3= parseInt(prompt("Enter your first number"));
            let num4= parseInt(prompt("Enter your second number"));
            if (num3==NaN ||num4==NaN){
                console.log("invalid");
            }
                result=num3-num4;
                console.log(`Subtraction of ${num3} and ${num4} is ${result}`);
            break;
        case 3:
            let num5= parseInt(prompt("Enter your first number"));
            let num6= parseInt(prompt("Enter your second number"));
            if (num5==NaN ||num6==NaN){
                console.log("invalid");
            }
                result=num5*num6;
                console.log(`Multiplication of ${num5} and ${num6} is ${result}`);
            break;
        case 4:
            let num7= parseInt(prompt("Enter your first number"));
            let num8= parseInt(prompt("Enter your second number"));
            if (num7==NaN ||num8==NaN){
                console.log("invalid");
            }
                result=num7/num8;
                console.log(`Division of ${num7} and ${num8} is ${result}`);
            break;
        case 5:
            let num9= parseInt(prompt("Enter your number"));
            if (num9==NaN){
                console.log("invalid");
            }
                result=num9**(1/2);
                console.log(`Square root of ${num9} is ${result}`);
            break;
        case 6:
            let num10= parseInt(prompt("Enter your marks"));
            if (num10==NaN){
                console.log("invalid");
            }
                result=(num10/100)*100;
                console.log(`Percentage of ${num10} is ${result}%`);
            break;
    }
}