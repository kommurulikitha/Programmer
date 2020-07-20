//Question 6

function usingor(){
    while(true){
        let number=prompt("Enter your number");
        if (number==null || number==undefined || number>100 || number=="" ){
            console.log(`Your number is ${number}`);
            break;
        }
        else{
            console.log("Invalid input");
            continue;
        }
    }
}
usingor();