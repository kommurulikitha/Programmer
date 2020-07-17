var input=prompt("Enter your number");
    function isevenorodd(num){
        if (num%2==0){
            return `The number entered is ${num} and Number is even`;
        }else{
            return `The number entered is ${num} and Number is odd`;
        }
    }
result=isevenorodd(input);
console.log(result);