export const animations = {
    'fade-up': {
            standard: (element, params) => gsap.from(element, {
                opacity: 0,
                y: 50,
                ...params
            }),
            scroll: (element, params) => gsap.fromTo(element, { autoAlpha: 0, y: 50 }, {
                autoAlpha: 1,
                y: 0,
                ...params,
                scrollTrigger: {
                    ...params.scrollTrigger,
                    scrub: true // Enable scrub for scroll animations
                }
            }),
            stagger: (element, params) => gsap.from(element.children(), {
                opacity: 0,
                y: 50,
                stagger: 0.2, // Example stagger value
                ...params
            }),
            words: (element, params) => gsap.from(element.find(".word"), {
                opacity: 0,
                y: 50,
                stagger: 0.2,
                ...params
            }),
            letters: (element, params) => gsap.from(element.find(".char"), {
                opacity: 0,
                y: 50,
                stagger: 0.05,
                ...params
            }),
        },
    // Add other animations here...
};
