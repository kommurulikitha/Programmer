//Question 8
//Writing arrow function
//This is given Question
// function ask(question,yes,no){
//     if (confirm(question)) yes()
//     else no();
// }
// ask(
//     "Do you agree?",
//     function() {alert("You agreed."); },
//     function() {alert("You cancelled the execution."); }
// );
// ask();

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
