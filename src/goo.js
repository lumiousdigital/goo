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

            const params = {
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

            if (animationName in animations && animationType in animations[animationName]) {
                animations[animationName][animationType]($this, params);
            }
        }
    });
});
