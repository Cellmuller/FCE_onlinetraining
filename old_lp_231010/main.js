window.onload = function () {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.fv-content .flex > div:first-child', {
        duration: 1,
        x: '-25%',
        opacity: 0,
        ease: 'power1.out',
    });

    gsap.from('.fv-content .desc', {
        duration: 1,
        opacity: 0,
        ease: 'power1.out',
    });

    // gsap.from(".structure-area .container .contents .desc", {
    //   scrollTrigger: {
    //     trigger: ".structure-area .container .contents .desc",
    //     start: "top 75%",
    //   },
    //   duration: 2,
    //   opacity: 0,
    //   ease: "power1.out",
    // });

    gsap.from(
        '.structure-area .container .contents .desc .flex > div:nth-child(2)',
        {
            scrollTrigger: {
                trigger:
                    '.structure-area .container .contents .desc .flex > div:nth-child(2)',
                start: 'top 75%',
            },
            duration: 1,
            opacity: 0,
            x: '10%',
            ease: 'power1.out',
        }
    );

    gsap.from('.reason-area .container .contents > .flex > div', {
        scrollTrigger: {
            trigger: '.reason-area .container .contents > .flex > div',
            start: 'top 75%',
        },
        duration: 1,
        opacity: 0,
        y: '10%',
        ease: 'power1.out',
        stagger: 0.5,
    });

    gsap.from('.achievement-area .container .contents .flex > div', {
        scrollTrigger: {
            trigger: '.achievement-area .container .contents .flex > div',
            start: 'top 75%',
        },
        duration: 1,
        opacity: 0,
        x: '10%',
        ease: 'power1.out',
        stagger: 0.15,
    });

    gsap.utils.toArray('.scene .flex').forEach(function (elem) {
        gsap.from(elem.querySelectorAll('.title, ul'), {
            scrollTrigger: {
                trigger: elem,
                start: 'top 75%',
            },
            duration: 1,
            opacity: 0,
            y: '20%',
            ease: 'power1.out',
            stagger: 0.5,
        });
    });

    gsap.utils
        .toArray('.industry > .flex > div:nth-child(2) ')
        .forEach(function (elem) {
            gsap.from(elem.querySelectorAll('.flex'), {
                scrollTrigger: {
                    trigger: elem,
                    start: 'top 75%',
                },
                duration: 1,
                opacity: 0,
                y: '20%',
                ease: 'power1.out',
                stagger: 0.3,
            });
        });
};
