// width function
function getWidth(){
  return window.innerWidth
}

function BiggerThen991() {
  return getWidth() >= 992
}

//register service worker

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then (reg => {console.info ('Service Worker registration successfull:', reg);})
    .catch(err => {console.error('Service Worker registration failed:',      err);});
  };

//ui

//side bar
var SidebarInstances = M.Sidenav.init(document.querySelectorAll('.sidenav'), {"edge": "right"});
document.querySelectorAll(".closeSidenavs").forEach((elem) => {
  elem.onclick = () => {
    if (!BiggerThen991()) {
      for ( let _ = 0; _ <= SidebarInstances.length ; _++ ) {
        SidebarInstances[_].close();
      }
    }
  }
})
//collapsable
var CollapsableInstances = M.Collapsible.init(document.querySelectorAll('.collapsible'), {});
//sort buttons
document.querySelectorAll(".sort-btns > *").forEach(sortButton => {
  sortButton.onclick = () => {
    const disabledSortButton = document.querySelector(".sort-btns > .disabled");
    sortButton.classList.toggle("disabled");
    disabledSortButton.classList.toggle("disabled");
  };
});