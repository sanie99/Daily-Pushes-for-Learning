gsap.from(".nav ul,.home-screen .home-heading ,h4, .home-shop", {
  y: 40,
  opacity: 0,
  duration: 1,
});

gsap.from(".we-do span, .we-do h2 ,.card-section, .gifts", {
  y: 30,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".we-do",
    scroll: "body",
    marker: true,
    start: "top 40%",
    end: "top 10%",
    scrub: 2,
  },
});

gsap.from(" .gift-ideas , .gift-img", {
  y: 30,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    marker: true,
    trigger: ".first-section",
    scroll: "body",
    start: "top 50%",
    end: "top 50%",
    scrub: 2,
  },
});

gsap.from(".second-section", {
  y: 30,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".gift-ideas",
    scroll: "body",
    start: "top 10%",
    end: "top 50%",
    scrub: 2,
  },
});

gsap.from(".team-talk", {
  y: 30,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".talk",
    scroll: "body",
    marker: true,
    start: "top 50%",
  },
});

// gsap.from(".footer", {
//   y: 30,
//   duration: 1,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: ".team-talk",
//     scroll: "body",
//     start: "top 60%",
//   },
// });
