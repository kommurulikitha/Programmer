//Question 1

for (var i=1;i<=100;i++){
    if (i%3==0 && i%5==0){
        console.log("The value of" +" "+ i +" "+ "is FizzBuzz");
    }
    else if (i%3==0){
        console.log("The value of" +" "+ i +" "+ "is Fizz");
    }
    else if (i%5==0){
        console.log("The value of" +" "+ i +" "+ "is Buzz");
    }
}