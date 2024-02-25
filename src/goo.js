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
                    types: animationType === 'words' ? 'words' : 'chars',
                    tagName: 'span'
                });
            }

            // Adjusted to directly use the 'goo-duration' attribute value as seconds
            const duration = parseFloat($this.attr('goo-duration')) || 1; // Use the value directly as seconds, with a default fallback

            const params = {
                duration: duration,
                ease: $this.data('goo-easing') || "power1.out",
                scrollTrigger: {
                    trigger: $this,
                    start: $this.attr('goo-start') || "top bottom",
                    end: $this.attr('goo-end') || "bottom top",
                    toggleActions: $this.attr('goo-actions') || "play pause resume reset",
                    markers: debug
                }
            };

            console.log(`Applying animation '${animationName}' with type '${animationType}' and duration ${duration} seconds.`); // Debugging log

            if (animationName in animations && animationType in animations[animationName]) {
                animations[animationName][animationType]($this, params);
            }
        }
    });
});
