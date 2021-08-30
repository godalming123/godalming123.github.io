//page first load animations

function pageFirstLoad() {
  const sidebarAnimation = {
    opacity: 0,
    x: -100,
    duration: 0.4,
  }

  const pageItemsFirstLoadAnimation = {
    opacity: 0,
    x: 100,
    duration: 0.4,
  }

  gsap.from("header", sidebarAnimation)
  gsap.from(".wrapper > section", pageItemsFirstLoadAnimation)
}

pageFirstLoad()