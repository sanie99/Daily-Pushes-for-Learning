const burger = document.querySelector(".burger");
const navigation = document.querySelector(".navigation");
const up = document.querySelector(".up");
const down = document.querySelector(".down");

burger.addEventListener("click", () => {
  navigation.classList.toggle("active");
  up.classList.toggle("rotate");
  down.classList.toggle("rotate");
});
