// goo.js
import SplitType from 'split-type';

const Goo = (function() {
    // Ensure GSAP and ScrollTrigger are correctly registered
    gsap.registerPlugin(ScrollTrigger);

    const animations = {}; // Placeholder for animations

    const breakpoints = {
        mobile: 767,
        tablet: 991
    };

    function registerAnimation(name, animation) {
        animations[name] = animation;
    }

    function initAnimations() {
        $("[goo]").each(function() {
            const $this = $(this),
                windowWidth = $(window).width(),
                disableOn = $this.attr('goo-disable'),
                debug = $this.attr('goo-debug') === 'true',
                animationName = $this.attr('goo'),
                animationType = $this.attr('goo-type');

            if (!((disableOn === "mobile" && windowWidth <= breakpoints.mobile) ||
                (disableOn === "tablet" && windowWidth <= breakpoints.tablet))) {

                if (animationType === 'words' || animationType === 'letters') {
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
    }

    // Public API
    return {
        registerAnimation,
        initAnimations
    };
})();

document.addEventListener('DOMContentLoaded', Goo.initAnimations);
window.Goo = Goo;