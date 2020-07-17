alert("Conditional statements");
var marks=prompt("Enter your marks");
console.log("Printing with conditional statements");
    if (marks>=90 && marks<=100){
        console.log(`Marks are ${marks} and grade is A+`);
    }else if (marks>=85 && marks<=89){
        console.log(`Marks are ${marks} and grade is A`);
    }else if (marks>=80 && marks<=84){
        console.log(`Marks are ${marks} and grade is A-`);
    }else if (marks>=75 && marks<=79){
        console.log(`Marks are ${marks} and grade is B+`);
    }else if (marks>=70 && marks<=74){
        console.log(`Marks are ${marks} and grade is B`);
    }else if (marks>=65 && marks<=69){
        console.log(`Marks are ${marks} and grade is C+`);
    }else if (marks>=60 && marks<=64){
        console.log(`Marks are ${marks} and grade is C`);
    }else if (marks>=55 && marks<=59){
        console.log(`Marks are ${marks} and grade is D+`);
    }else if (marks>=50 && marks<=54){
        console.log(`Marks are ${marks} and grade is D`);
    }else if (marks>=40 && marks<=49){
        console.log(`Marks are ${marks} and grade is E`);
    }else if (marks<40){
        console.log(`marks are ${marks} and grade is F`);
    }else{
        console.log("Invalid input");
    }
alert("Using Switch");
console.log("Printing with switch cases");
function getGrade(marks) {
    switch(true) {
        case (marks>=90 && marks<=100):
            console.log(`Marks are ${marks} and grade is A+`);
            break;
        case marks>=85 && marks<=89:
            console.log(`Marks are ${marks} and grade is A`);
            break;
        case (marks>=80 && marks<=84):
            console.log(`Marks are ${marks} and grade is A-`);
            break;
        case (marks>=75 && marks<=79):
            console.log(`Marks are ${marks} and grade is B+`);
            break;
        case (marks>=70 && marks<=74):
            console.log(`Marks are ${marks} and grade is B`);
            break;
        case (marks>=65 && marks<=69):
            console.log(`Marks are ${marks} and grade is C+`);
            break;
        case (marks>=60 && marks<=64):
            console.log(`Marks are ${marks} and grade is C`);
            break;
        case (marks>=55 && marks<=59):
            console.log(`Marks are ${marks} and grade is D+`);
            break;
        case (marks>=50 && marks<=54):
            console.log(`Marks are ${marks} and grade is D`);
            break;
        case (marks>=40 && marks<=49):
            console.log(`Marks are ${marks} and grade is E`);
            break;
        case (marks<40):
            console.log(`marks are ${marks} and grade is F`);
            break;
        default:
            console.log("Invalid input");
    }
}
getGrade(marks);
alert("Using Ternary operator")
console.log("Printing with Ternary operator")
let result = (marks>=90 && marks<=100)? `Marks are ${marks} and grade is A+`:
             (marks>=85 && marks<=89)? `Marks are ${marks} and grade is A`:
             (marks>=80 && marks<=84)? `Marks are ${marks} and grade is A-`:
             (marks>=75 && marks<=79)? `Marks are ${marks} and grade is B+`:
             (marks>=70 && marks<=74)? `Marks are ${marks} and grade is B`:
             (marks>=65 && marks<=69)? `Marks are ${marks} and grade is C+`:
             (marks>=60 && marks<=64)? `Marks are ${marks} and grade is C`:
             (marks>=55 && marks<=59)? `Marks are ${marks} and grade is D+`:
             (marks>=50 && marks<=54)? `Marks are ${marks} and grade is D`:
             (marks>=40 && marks<=49)? `Marks are ${marks} and grade is E`:
             (marks<40)? `Marks are ${marks} and grade is F`:"Invalid input"
console.log(result);