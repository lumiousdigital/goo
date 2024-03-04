export const animations = {
    'fade-up': {
        standard: (element, params) => {
            $(element).css('transition-property', 'none'); // Disable transitions
            gsap.from(element, {
                opacity: 0,
                y: 50,
                duration: params.duration,
                ease: params.ease || "power1.out",
                scrollTrigger: params.scrollTrigger,
                onComplete: () => $(element).css('transition-property', ''), // Re-enable transitions
            });
        },
        scroll: (element, params) => {
            $(element).css('transition-property', 'none'); // Disable transitions
            gsap.fromTo(element,
                { opacity: 0, y: 50 },
                {
                    opacity: 1, 
                    y: 0,
                    duration: params.duration,
                    ease: params.ease || "power1.out",
                    scrollTrigger: {
                        ...params.scrollTrigger,
                        scrub: true
                    },
                    onComplete: () => $(element).css('transition-property', ''), // Re-enable transitions
                }
            );
        },
        stagger: (element, params) => {
            $(element).children().each(function() {
                $(this).css('transition-property', 'none'); // Disable transitions for each child
            });
            gsap.from(element.children(), {
                opacity: 0,
                y: 50,
                duration: params.duration,
                ease: params.ease || "power1.out",
                stagger: params.stagger,
                scrollTrigger: params.scrollTrigger,
                onComplete: () => {
                    $(element).children().each(function() {
                        $(this).css('transition-property', ''); // Re-enable transitions for each child
                    });
                },
            });
        },
        // words and letters remain unchanged as per instructions
        words: (element, params) => gsap.from(element.find(".word"), {
            opacity: 0,
            yPercent: 120,
            duration: params.duration,
            ease: params.ease || "back.out(2)",
            stagger: params.stagger,
            scrollTrigger: params.scrollTrigger,
        }),
        letters: (element, params) => gsap.from(element.find(".char"), {
            yPercent: 120,
            duration: params.duration,
            ease: params.ease || "power1.out",
            stagger: params.stagger,
            scrollTrigger: params.scrollTrigger,
        })
    },
    
    'fade-down': {
        standard: (element, params) => {
            $(element).css('transition-property', 'none'); // Disable transitions
            gsap.from(element, {
                opacity: 0,
                y: -50,
                duration: params.duration,
                ease: params.ease || "power1.out",
                scrollTrigger: params.scrollTrigger,
                onComplete: () => $(element).css('transition-property', '') // Re-enable transitions
            });
        },
        scroll: (element, params) => {
            $(element).css('transition-property', 'none'); // Disable transitions
            gsap.fromTo(element, 
                { opacity: 0, y: -50 }, 
                { 
                    opacity: 1, y: 0,
                    duration: params.duration,
                    ease: params.ease || "power1.out",
                    scrollTrigger: {
                        ...params.scrollTrigger,
                        scrub: true
                    },
                    onComplete: () => $(element).css('transition-property', '') // Re-enable transitions
                }
            );
        },
        stagger: (element, params) => {
            $(element).children().css('transition-property', 'none'); // Disable transitions for children
            gsap.from(element.children(), {
                opacity: 0,
                y: -50,
                duration: params.duration,
                ease: params.ease || "power1.out",
                stagger: params.stagger,
                scrollTrigger: params.scrollTrigger,
                onComplete: () => $(element).children().css('transition-property', '') // Re-enable transitions for children
            });
        },
        // 'words' and 'letters' remain untouched as per instructions
        words: (element, params) => gsap.from(element.find(".word"), {
            yPercent: -120,
            duration: params.duration,
            ease: params.ease || "power1.out",
            stagger: params.stagger,
            scrollTrigger: params.scrollTrigger,
        }),
        letters: (element, params) => gsap.from(element.find(".char"), {
            yPercent: -120,
            duration: params.duration,
            ease: params.ease || "power1.out",
            stagger: params.stagger,
            scrollTrigger: params.scrollTrigger,
        })
    },
    
    'fade-in': {
        standard: (element, params) => {
            $(element).css('transition-property', 'none'); // Disable transitions
            gsap.from(element, {
                opacity: 0,
                duration: params.duration,
                ease: params.ease || "power1.out",
                scrollTrigger: params.scrollTrigger,
                onComplete: () => $(element).css('transition-property', '') // Re-enable transitions
            });
        },
        scroll: (element, params) => {
            $(element).css('transition-property', 'none'); // Disable transitions
            gsap.fromTo(element, 
                { opacity: 0 }, 
                { 
                    opacity: 1,
                    duration: params.duration,
                    ease: params.ease || "power1.out",
                    scrollTrigger: {
                        ...params.scrollTrigger,
                        scrub: true
                    },
                    onComplete: () => $(element).css('transition-property', '') // Re-enable transitions
                }
            );
        },
        stagger: (element, params) => {
            $(element).children().css('transition-property', 'none'); // Disable transitions for children
            gsap.from(element.children(), {
                opacity: 0,
                duration: params.duration,
                ease: params.ease || "power1.out",
                stagger: params.stagger,
                scrollTrigger: params.scrollTrigger,
                onComplete: () => $(element).children().css('transition-property', '') // Re-enable transitions for children
            });
        },
        // 'words' and 'letters' remain untouched as per instructions
        words: (element, params) => gsap.from(element.find(".word"), {
            opacity: 0,
            duration: params.duration,
            ease: params.ease || "power1.out",
            stagger: params.stagger,
            scrollTrigger: params.scrollTrigger,
        }),
        letters: (element, params) => gsap.from(element.find(".char"), {
            opacity: 0,
            duration: params.duration,
            ease: params.ease || "power1.out",
            stagger: params.stagger,
            scrollTrigger: params.scrollTrigger,
        })
    },
    
    'fade-right': {
        standard: (element, params) => {
            $(element).css('transition-property', 'none'); // Disable transitions
            gsap.from(element, {
                opacity: 0,
                x: 50,
                duration: params.duration,
                ease: params.ease || "power1.out",
                scrollTrigger: params.scrollTrigger,
                onComplete: () => $(element).css('transition-property', '') // Re-enable transitions
            });
        },
        scroll: (element, params) => {
            $(element).css('transition-property', 'none'); // Disable transitions
            gsap.fromTo(element,
                { opacity: 0, x: 50 }, 
                { 
                    opacity: 1, x: 0,
                    duration: params.duration,
                    ease: params.ease || "power1.out",
                    scrollTrigger: {
                        ...params.scrollTrigger,
                        scrub: true
                    },
                    onComplete: () => $(element).css('transition-property', '') // Re-enable transitions
                }
            );
        },
        stagger: (element, params) => {
            $(element).children().css('transition-property', 'none'); // Disable transitions for children
            gsap.from(element.children(), {
                opacity: 0,
                x: 50,
                duration: params.duration,
                ease: params.ease || "power1.out",
                stagger: params.stagger,
                scrollTrigger: params.scrollTrigger,
                onComplete: () => $(element).children().css('transition-property', '') // Re-enable transitions for children
            });
        },
        // 'words' and 'letters' remain untouched as per instructions
        words: (element, params) => gsap.from(element.find(".word"), {
            opacity: 0,
            x: 20,
            duration: params.duration,
            ease: params.ease || "power2.out",
            stagger: params.stagger,
            scrollTrigger: params.scrollTrigger,
        }),
        letters: (element, params) => gsap.from(element.find(".char"), {
            opacity: 0,
            x: 20,
            duration: params.duration,
            ease: params.ease || "power2.out",
            stagger: params.stagger,
            scrollTrigger: params.scrollTrigger,
        })
    },
    
    'fade-left': {
        standard: (element, params) => {
            $(element).css('transition-property', 'none'); // Disable transitions
            gsap.from(element, {
                opacity: 0,
                x: -50,
                duration: params.duration,
                ease: params.ease || "power1.out",
                scrollTrigger: params.scrollTrigger,
                onComplete: () => $(element).css('transition-property', '') // Re-enable transitions
            });
        },
        scroll: (element, params) => {
            $(element).css('transition-property', 'none'); // Disable transitions
            gsap.fromTo(element,
                { opacity: 0, x: -50 }, 
                { 
                    opacity: 1, x: 0,
                    duration: params.duration,
                    ease: params.ease || "power1.out",
                    scrollTrigger: {
                        ...params.scrollTrigger,
                        scrub: true
                    },
                    onComplete: () => $(element).css('transition-property', '') // Re-enable transitions
                }
            );
        },
        stagger: (element, params) => {
            $(element).children().css('transition-property', 'none'); // Disable transitions for children
            gsap.from(element.children(), {
                opacity: 0,
                x: -50,
                duration: params.duration,
                ease: params.ease || "power1.out",
                stagger: params.stagger,
                scrollTrigger: params.scrollTrigger,
                onComplete: () => $(element).children().css('transition-property', '') // Re-enable transitions for children
            });
        },
        // 'words' and 'letters' remain untouched as per instructions
        words: (element, params) => gsap.from(element.find(".word"), {
            opacity: 0,
            x: -20,
            duration: params.duration,
            ease: params.ease || "power2.out",
            stagger: params.stagger,
            scrollTrigger: params.scrollTrigger,
        }),
        letters: (element, params) => gsap.from(element.find(".char"), {
            opacity: 0,
            x: -20,
            duration: params.duration,
            ease: params.ease || "power2.out",
            stagger: params.stagger,
            scrollTrigger: params.scrollTrigger,
        })
    },
    
    'scale-up': {
        standard: (element, params) => {
            $(element).css('transition-property', 'none'); // Disable transitions
            gsap.from(element, {
                opacity: 0,
                y: 50,
                scale: 0.6,
                duration: params.duration,
                ease: params.ease || "power1.out",
                scrollTrigger: params.scrollTrigger,
                onComplete: () => $(element).css('transition-property', '') // Re-enable transitions
            });
        },
        scroll: (element, params) => {
            $(element).css('transition-property', 'none'); // Disable transitions
            gsap.fromTo(element,
                { opacity: 0, y: 50, scale: 0.8 }, 
                { 
                    opacity: 1, y: 0, scale: 1,
                    duration: params.duration,
                    ease: params.ease || "power1.out",
                    scrollTrigger: {
                        ...params.scrollTrigger,
                        scrub: true
                    },
                    onComplete: () => $(element).css('transition-property', '') // Re-enable transitions
                }
            );
        },
        stagger: (element, params) => {
            $(element).children().css('transition-property', 'none'); // Disable transitions for children
            gsap.from(element.children(), {
                opacity: 0,
                y: 50,
                scale: 0.9,
                duration: params.duration,
                ease: params.ease || "power1.out",
                stagger: params.stagger,
                scrollTrigger: params.scrollTrigger,
                onComplete: () => $(element).children().css('transition-property', '') // Re-enable transitions for children
            });
        },
        // 'words' and 'letters' remain untouched as per instructions
        words: (element, params) => gsap.from(element.find(".word"), {
            opacity: 0,
            scale: 0.8,
            duration: params.duration,
            ease: params.ease || "power2.out",
            stagger: params.stagger,
            scrollTrigger: params.scrollTrigger,
        }),
        letters: (element, params) => gsap.from(element.find(".char"), {
            opacity: 0,
            scale: 0.6,
            duration: params.duration,
            ease: params.ease || "power2.out",
            stagger: params.stagger,
            scrollTrigger: params.scrollTrigger,
        })
    },
    
    'scale-in': {
        standard: (element, params) => {
            $(element).css('transition-property', 'none'); // Disable transitions
            gsap.from(element, {
                opacity: 0,
                scale: 0.6,
                duration: params.duration,
                ease: params.ease || "power1.out",
                scrollTrigger: params.scrollTrigger,
                onComplete: () => $(element).css('transition-property', '') // Re-enable transitions
            });
        },
        scroll: (element, params) => {
            $(element).css('transition-property', 'none'); // Disable transitions
            gsap.fromTo(element,
                { opacity: 0, scale: 0.8 }, 
                { 
                    opacity: 1, scale: 1,
                    duration: params.duration,
                    ease: params.ease || "power1.out",
                    scrollTrigger: {
                        ...params.scrollTrigger,
                        scrub: true
                    },
                    onComplete: () => $(element).css('transition-property', '') // Re-enable transitions
                }
            );
        },
        stagger: (element, params) => {
            $(element).children().css('transition-property', 'none'); // Disable transitions for children
            gsap.from(element.children(), {
                opacity: 0,
                scale: 0.9,
                duration: params.duration,
                ease: params.ease || "power1.out",
                stagger: params.stagger,
                scrollTrigger: params.scrollTrigger,
                onComplete: () => $(element).children().css('transition-property', '') // Re-enable transitions for children
            });
        },
        // 'words' and 'letters' remain untouched as per instructions
        words: (element, params) => gsap.from(element.find(".word"), {
            opacity: 0,
            scale: 0.8,
            duration: params.duration,
            ease: params.ease || "power2.out",
            stagger: params.stagger,
            scrollTrigger: params.scrollTrigger,
        }),
        letters: (element, params) => gsap.from(element.find(".char"), {
            opacity: 0,
            scale: 0.6,
            duration: params.duration,
            ease: params.ease || "power2.out",
            stagger: params.stagger,
            scrollTrigger: params.scrollTrigger,
        })
    },
    
    'skew': {
        scroll: (element, params) => {
            let proxy = { skew: 0 },
                skewSetter = gsap.quickSetter(element, "skewY", "deg"), // target the element
                clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees

            ScrollTrigger.create({
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                onUpdate: (self) => {
                    let skew = clamp(self.getVelocity() / -300);
                    if (Math.abs(skew) > Math.abs(proxy.skew)) { // More severe skew
                        proxy.skew = skew;
                        gsap.to(proxy, {
                            skew: 0,
                            duration: 0.8,
                            ease: "power3",
                            overwrite: true,
                            onUpdate: () => skewSetter(proxy.skew)
                        });
                    }
                }
            });

            // Set transform origin for skew effect
            gsap.set(element, {transformOrigin: "right center", force3D: true});
        }
    }
    // 'scale-up' and 'scale-in' would need custom implementation based on specific requirements.
};
