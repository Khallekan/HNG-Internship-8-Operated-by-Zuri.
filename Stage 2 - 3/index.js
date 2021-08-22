// Typing animation
const words = ['Oke Olalekan.', 'a Frontend Developer.'];

let cursor = gsap.to('.cursor', {
  duration: 1,
  opacity: 0,
  ease: 'power2.inOut',
  repeat: -1,
});

let masterTl = gsap.timeline({ repeat: -1 });

words.map((word) => {
  let tl = gsap.timeline({
    repeat: 1,
    yoyo: true,
    repeatDelay: 1.5,
  });
  tl.to('.text', { duration: 1, text: word });

  return masterTl.add(tl);
});

// Scroll animation

const sections = Array.from(document.querySelectorAll('.section'));

let scrollTl = gsap.timeline();

sections.map((section) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top bottom',
      toggleActions: 'restart none none none',
    },
  });
  tl.from(section, { y: 200, opacity: 0, duration: 1 });
});
