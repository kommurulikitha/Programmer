//Question 2
const student={
    name: "Helsinki",
    age: 24,
    projects: {
        diceGame: "Two player dice game using Javascript"
    }
};

const {name, age, projects:{diceGame}}=student;
console.log("Using destructor:");
console.log(name,age,diceGame);
console.log(name);
console.log(age);
console.log(diceGame);

