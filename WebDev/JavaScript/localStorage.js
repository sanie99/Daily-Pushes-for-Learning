console.log("item stored in local storage");
localStorage.setItem("username", "Sanjeevani");
console.log("---------");

console.log("storing object");
const user = {
  name: "Sanjeevani",
  age: 19,
};
localStorage.setItem("user", JSON.stringify(user)); //to convert into string as only string value is allowed
console.log("---------");

console.log("item retrieved from local storage");
const name = localStorage.getItem("username");
console.log(name);
console.log("---------");

console.log("retrieving object");
const userData = JSON.parse(localStorage.getItem("user")); //to convert back
console.log(userData);

console.log("---------");
console.log("item being removed from local storage");
localStorage.removeItem("username");

//clearing all data from local storage
localStorage.clear();
