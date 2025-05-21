var tl = gsap.timeline();

tl.from(".container1", {
  y: "100vh",
  duration: 1.5,
  delay: 0.5,
});

tl.from(".container2", {
  y: "-100vh",
  duration: 1.5,
});

tl.to(".container1", {
  x: "200vh",
  duration: 2,
  zIndex: 99,
});

tl.to(".img-container", {
  x: 0,
  duration: 2,
  display: "block",
});
