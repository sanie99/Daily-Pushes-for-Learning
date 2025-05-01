const btn = document.querySelector(".dropdown");
const list = document.querySelector(".info");

btn.addEventListener("click", () => {
  if (list.style.display === "none") {
    list.style.display = "flex";
    list.style.height = "2rem";
  } else {
    list.style.display = "none";
  }
});
