$(document).ready(function() {
    // Ensure GSAP and ScrollTrigger are correctly registered
    gsap.registerPlugin(ScrollTrigger);

    // Define breakpoints for disabling animations at the beginning
    const breakpoints = {
        mobile: 767,
        tablet: 991
    };

    // Adjust SplitType initialization to target 'words' and 'letters' specifically
    // Moved inside the $("[goo]").each() loop to ensure it respects the goo-disable attribute
    // Initialization of SplitType will be shown in the loop below

    const animations = {
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
        // Additional animations can be defined here
    };

    $("[goo]").each(function() {
        let $this = $(this),
            windowWidth = $(window).width(),
            disableOn = $this.attr('goo-disable'),
            debug = $this.attr('goo-debug') === 'true',
            animationName = $this.attr('goo'),
            animationType = $this.attr('goo-type');

        // Only proceed with SplitType and animations if not disabled
        if (!((disableOn === "mobile" && windowWidth <= breakpoints.mobile) ||
              (disableOn === "tablet" && windowWidth <= breakpoints.tablet))) {
            
            // Conditional SplitType initialization for 'words' and 'letters'
            if (animationType === 'words' || animationType === 'letters') {
                new SplitType($this[0], {
                    types: animationType === 'words' ? 'words' : 'chars',
                    tagName: 'span'
                });
            }

            let params = {
                duration: $this.data('goo-duration') / 1000 || 1,
                ease: $this.data('goo-easing') || "power1.out",
                scrollTrigger: {
                    trigger: $this,
                    start: $this.attr('goo-start') || "top bottom",
                    end: $this.attr('goo-end') || "bottom top",
                    toggleActions: $this.attr('goo-actions') || "play pause resume reset",
                    markers: debug
                }
            };

            // Initialize the specified animation
            if (animationName in animations && animationType in animations[animationName]) {
                animations[animationName][animationType]($this, params);
            }
        }
    });
});
