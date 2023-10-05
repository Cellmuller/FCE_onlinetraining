// slider
$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3000,
        cssEase: 'linear',
        slidesToShow: 8,
        swipe: false,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                },
            },
        ],
    });
});

// Animation
//header
const listItems = document.querySelectorAll('header ul li');
listItems.forEach((item) => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const anchor = e.target.closest('a');
        const href = anchor.getAttribute('href');
        const target = document.querySelector(href);
        gsap.to(window, { duration: 1, scrollTo: target });
    });
});

//fv
// window.addEventListener("load", () => {
//   gsap.set(".fv-text span", { autoAlpha: 0 });
//   gsap.set(".fv-text .title", { x: "-10%", autoAlpha: 0 });
//   const tl = gsap.timeline();
//   tl.to(".fv-text span", {
//     duration: 0.5,
//     delay: 0,
//     autoAlpha: 1,
//     ease: "power1.out",
//   });
//   tl.to(".fv-text .title", {
//     duration: 0.5,
//     autoAlpha: 1,
//     x: "0%",
//     ease: "power1.inOut",
//   });
// });

//about
// gsap.registerPlugin(ScrollTrigger);
//
// gsap.from("#about p", {
//   scrollTrigger: {
//     trigger: "#about p",
//     start: "top bottom",
//   },
//   opacity: 0,
//   y: -50,
//   duration: 1,
// });
//
// gsap.from("#about a", {
//   scrollTrigger: {
//     trigger: "#about a",
//     start: "top bottom",
//   },
//   opacity: 0,
//   y: 50,
//   duration: 1,
// });

//trouble
// gsap.registerPlugin(ScrollTrigger);
// gsap.from(".trouble-area .flex > div:first-child .circle", {
//   scrollTrigger: {
//     trigger: ".trouble-area .flex > div:first-child .circle",
//     start: "top bottom",
//   },
//   opacity: 0,
//   scale: 0.8,
//   duration: 1,
// });
//
// gsap.from(".trouble-area .flex > div:last-child .circle", {
//   scrollTrigger: {
//     trigger: ".trouble-area .flex > div:last-child .circle",
//     start: "top bottom",
//   },
//   opacity: 0,
//   scale: 0.8,
//   duration: 1,
//   delay: 0.5,
// });
// gsap.from(".trouble-area .bool", {
//   scrollTrigger: {
//     trigger: ".trouble-area .bool",
//     start: "top bottom",
//   },
//   opacity: 0,
//   duration: 1,
//   delay: 0.5,
// });
// gsap.from(".trouble-area .structure-arrow-img-2", {
//   scrollTrigger: {
//     trigger: ".trouble-area .structure-arrow-img-2",
//     start: "top bottom",
//   },
//   opacity: 0,
//   duration: 1,
// });
//
// //structure
// gsap.registerPlugin(ScrollTrigger);
// gsap.from(".structure-area .contents-wrapper div:first-child .head", {
//   scrollTrigger: {
//     trigger: ".structure-area .contents-wrapper div:first-child .head",
//     start: "top bottom",
//   },
//   opacity: 0,
//   y: -10,
//   duration: 0.5,
// });
// gsap.from(".structure-area .contents-wrapper div:nth-child(2) .head", {
//   scrollTrigger: {
//     trigger: ".structure-area .contents-wrapper div:nth-child(2) .head",
//     start: "top bottom",
//   },
//   opacity: 0,
//   y: -10,
//   duration: 0.5,
//   delay: 0.5,
// });
//
// //reason
// gsap.registerPlugin(ScrollTrigger);
// gsap.from(".reason-area > p", {
//   scrollTrigger: {
//     trigger: ".reason-area > p",
//     start: "top bottom",
//   },
//   opacity: 0,
//   scale: 0.8,
//   duration: 1,
// });
// const boxes = document.querySelectorAll(".reason-area .contents-wrapper > div");
// boxes.forEach((box, index) => {
//   gsap.from(box, {
//     scrollTrigger: {
//       trigger: box,
//       start: "top bottom",
//     },
//     opacity: 0,
//     y: 50,
//     duration: 1,
//     delay: index * 0.5,
//   });
// });
//
// //example
// const exampleBoxes = document.querySelectorAll(
//   ".example-area .contents-wrapper > div"
// );
// exampleBoxes.forEach((box, index) => {
//   gsap.from(box, {
//     scrollTrigger: {
//       trigger: box,
//       start: "top bottom",
//     },
//     opacity: 0,
//     y: 30,
//     duration: 1,
//     delay: index * 0.2,
//   });
// });
//
// //case
// gsap.registerPlugin(ScrollTrigger);
// const caseTextDivs = document.querySelectorAll(
//   ".case-area .contents-wrapper .flex > div:nth-child(2)"
// );
// caseTextDivs.forEach((div, index) => {
//   gsap.from(div, {
//     scrollTrigger: {
//       trigger: div,
//       start: "top bottom",
//     },
//     opacity: 0,
//     scale: 0.8,
//     duration: 1,
//     delay: index * 0.3,
//   });
// });
