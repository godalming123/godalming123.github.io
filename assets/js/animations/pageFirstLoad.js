//page first load animations
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
}

pageFirstLoad()