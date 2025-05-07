const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", () => {
  const userInput = document.getElementById("datetime").value;
  const targetDate = new Date(userInput);
  console.log(targetDate.toLocaleDateString("en-GB"));
  const present = new Date();
  const presentDate = present.toLocaleDateString("en-GB");
  console.log(presentDate);
  let dateDiff = targetDate - presentDate;
  console.log(dateDiff);
  let diff = Math.floor(dateDiff / (1000 * 60 * 60));
  console.log(diff);
});
