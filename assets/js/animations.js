barba.init({
  transitions: [{
    name: 'opacity-transition',
    leave: (data) => pageContentLeaveAnimation(),
    enter: (data) => pageContentLoadAnimation(),
  }]
});

//content
function pageContentLoadAnimation() {
  return gsap.from(data.next.container, {
    opacity: 0,
    duration: 0.1
  });
}

function pageContentLeaveAnimation() {
  return gsap.to(data.current.container, {
    opacity: 0
    duration: 0.1
  });
}

//sidebar
function pageSidebarLoadAnimation() {

}

function pageSidebarLeaveAnimation() {

}