const timeLine = gsap.timeline({defaults: {easy: "power1.out"}});

timeLine.to(".text", {y: "0%", duration: 1, stagger: 0.25});
timeLine.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5});
timeLine.to(".intro-animation", {y: "-100%", duration: 0, delay: -1});
timeLine.fromTo(".header-logo", {opacity: 0}, {opacity: 1, duration: 0.5});
timeLine.fromTo(".header-menu", {opacity: 0}, {opacity: 1, duration: 0.5});
timeLine.fromTo("#title-screen", {opacity: 0}, {opacity: 1, duration: 0.5});