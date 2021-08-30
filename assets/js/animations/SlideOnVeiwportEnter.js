//register plugins
gsap.registerPlugin(ScrollTrigger);

function addScrollTrigger(_ = "") {//optional var _ which deafualt to a blonk string is becuase on line 76 a variable is passed into fuction
    return gsap.utils.toArray("section > main > *").forEach(element => {
        gsap.from ((element), {
            scrollTrigger: {
                trigger: element,
                start: "top 95%",
                end: "top 5%",
                //toggleActions: "none none none pause"
            },
            opacity: 0,
            y: 100,
        });
    });
}

addScrollTrigger()//initialize