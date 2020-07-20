//Question 7
//Displaying prime numbers 


let input=prompt("Enter your number");
let array=[];
function prime(num){
    if (num>1){
        for (var i=2;i<num;i++){
            if (num%i==0){
                   array.push(i);
                }
            }
        }console.log(array.join(','));
    }
prime(input);