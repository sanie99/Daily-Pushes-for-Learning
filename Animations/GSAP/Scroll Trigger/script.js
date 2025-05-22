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
  x: 0,
  duration: 2,
  delay: 0,
  display: "block",
});

tl.from(".intro h2", {
  opacity: 1,
  y: -10,
  scale: 3,
  scrollTrigger: {
    trigger: ".intro h2",
    scroller: "body",
    start: "top 10%",
    end: "top -50%",
    scrub: 2,
  },
});

tl.to(".intro p", {
  scale: 0,
  scrollTrigger: {
    trigger: ".intro",
    scroller: "body",
    start: "top 0%",
    end: "top -50%",
    scrub: 2,
    pin: true,
  },
});

tl.to(".page3 h2", {
  x: "-3000",
  scrollTrigger: {
    trigger: ".page3",
    scroll: "body",
    start: "top 10%",
    end: "top -5%",
    scrub: 2,
    pin: true,
  },
});

tl.to(".footer h2", {
  y: 10,
  scrollTrigger: {
    trigger: "footer",
    scroller: "body",
    start: "top 0%",
    end: "top 5%",
    scrub: 2,
  },
});
