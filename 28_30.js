// //28
// const myStr = "This is the start. " + "This is the end."; //

//29
// let myStr = "This is the first sentence. "
// myStr += "This is the second sentence."

//30
// Only change code below this line
// const myName = "Alex";
// const myStr = "My name is " + myName + "and I am well!";

const quarterOf = (month) => {
  if (month <= 3) {
    return 1;
  }
  if (month <= 6) {
    return 2;
  }
  if (month <= 9) {
    return 3;
  }
  if (month <= 12) {
    return 4;
  }
};
console.log(quarterOf(10));
