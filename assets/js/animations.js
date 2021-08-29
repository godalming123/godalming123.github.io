barba.init({
    transitions: [{
      name: 'opacity-transition',
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0
        });
      },
      enter(data) {
        return gsap.to(data.next.container, {
          opacity: 1
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