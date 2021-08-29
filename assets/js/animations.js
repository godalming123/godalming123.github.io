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
          duration: 300;
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