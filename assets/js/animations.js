barba.init({
    transitions: [{
      name: 'opacity-transition',
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
          duration: 0.5
        });
      }
    }]
  });

//content
function pageContentLoadAnimation() {

}

function pageContentLeaveAnimation() {

}

//sidebar
function pageSidebarLoadAnimation() {

}

function pageSidebarLeaveAnimation() {

}