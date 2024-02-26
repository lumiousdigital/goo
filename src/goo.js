// goo.js
import { animations } from './animations'; // Adjust the path as necessary
import SplitType from 'split-type';

$(document).ready(function() {
    gsap.registerPlugin(ScrollTrigger);

    const breakpoints = {
        mobile: 767,
        tablet: 991
    };

    $("[goo]").each(function() {
        let $this = $(this),
            windowWidth = $(window).width(),
            disableOn = $this.attr('goo-disable'),
            debug = $this.attr('goo-debug') === 'true',
            animationName = $this.attr('goo'),
            animationType = $this.attr('goo-type');

        if (!((disableOn === "mobile" && windowWidth <= breakpoints.mobile) ||
            (disableOn === "tablet" && windowWidth <= breakpoints.tablet))) {
            
            if (['words', 'letters'].includes(animationType)) {
                new SplitType($this[0], {
                    types: ['words', 'chars'],
                    tagName: 'span'
                });
            }

            // Adjusted to directly use the 'goo-duration' attribute value as seconds
            const duration = parseFloat($this.attr('goo-duration')) || 1; // Use the value directly as seconds, with a default fallback
            const stagger = parseFloat($this.attr('goo-stagger')) || 0.5; // Default fallback to 0.5 if not specified
            const params = {
                duration: duration,
                ease: $this.data('goo-easing') || "power1.out",
                stagger: stagger,
                scrollTrigger: {
                    trigger: $this,
                    start: $this.attr('goo-start') || "top 90%",
                    end: $this.attr('goo-end') || "bottom top",
                    toggleActions: $this.attr('goo-actions') || "play none none reverse",
                    markers: debug
                }
            };

            if (animationName in animations && animationType in animations[animationName]) {
                animations[animationName][animationType]($this, params);
            }
        }
    });
});
