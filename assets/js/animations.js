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

const sidebarAnimation = new animation({
  opacity: 0,
  x: -100,
  duration: 0.4,
})

const pageItemsAnimation = new animation({
    opacity: 0,
    y: 100,
    duration: 0.4,
    //stagger: 0.2
})

barba.init({
  transitions: [{
    leave: (data) => pageItemsAnimation.leave(data.current.container),
    enter: (data) => pageItemsAnimation.enter(data.next.container),
  }]
});