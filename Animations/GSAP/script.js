var tl = gsap.timeline();

tl.from(".container1", {
  y: "100vh",
  duration: 2,
  delay: 0.5,
});

tl.to(".container1", {
  x: "100vw",
  duration: 1,
  display: "none",
});

tl.to(".main", {
  x: "0vh",
  duration: 2,
  delay: 0,
  display: "block",
});
