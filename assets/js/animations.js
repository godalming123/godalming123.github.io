barba.init({
  transitions: [{
    name: 'opacity-transition',
    leave: (data) => pageContentLeaveAnimation(data),
    enter: (data) => pageContentLoadAnimation(data),
  }]
});

//content
function pageContentLoadAnimation(data, enter: "right") {//enter allows you to make content enter from right or left
  return gsap.from(data.next.container, {
    opacity: 0,
    duration: 0.1
  });
}

function pageContentLeaveAnimation(data, leave: "left") {//leave allows you to make content leave from left or right
  return gsap.to(data.current.container, {
    opacity: 0,
    duration: 0.1
  });
}

//sidebar
function pageSidebarLoadAnimation() {

}

function pageSidebarLeaveAnimation() {

}