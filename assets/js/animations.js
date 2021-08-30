//page load/change animatoion
class animation {
    //takes one property animationProps
    //this is just a mapping of gsap props eg:
    //{opacity: 0, x: 100}
    //this has to functions leave and enter they both take a variable animation item and return
    //gsap.to/from(anamationItem, this.animationProps) where animations props is the propertys you specify for animation
    constructor(animationProps) {
        this.animationProps = animationProps;
    }

    enter(animationItem) {
        return gsap.from(animationItem, this.animationProps);
    }

    leave(animationItem) {
        return gsap.to  (animationItem, this.animationProps);
    }
}

//change page animation
const pageItemsAnimation = new animation({
    opacity: 0,
    y: 100,
    duration: 0.4,
    //stagger: 0.2
})

const hide = new animation({//hide an element so it is'nt even rendered in the veiwport
    display: "none",
    duration: 0.001,
})

//page first loads animations
const sidebarAnimation = new animation({
  opacity: 0,
  x: -100,
  duration: 0.4,
})

const pageItemsFirstLoadAnimation = new animation({
    opacity: 0,
    x: 100,
    duration: 0.4,
})

function pageFirstLoad() {
    sidebarAnimation.enter("header");
    pageItemsFirstLoadAnimation.enter(".wrapper > section")
    console.info("first load")
}

barba.init({
  transitions: [
    {
      leave: (data) => pageItemsAnimation.leave(data.current.container),
      afterLeave: (data) => hide.leave(data.current.container),
      enter: (data) => pageItemsAnimation.enter(data.next.container),
    },
]
});

pageFirstLoad()

//items load animation
gsap.registerPlugin(ScrollTrigger)

gsap.from ("section > main > *", {
    scrollTrigger: {
        trigger: "section > main > *",
        toggleActions: "restart none none none",
    },
    opacity: 0,
    y: 100,
})