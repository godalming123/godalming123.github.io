
//register service worker

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then (reg => {console.info ('Service Worker registration successfull:', reg);})
    .catch(err => {console.error('Service Worker registration failed:',      err);});
  };

//ui

//side bar
var SidebarInstances = M.Sidenav.init(document.querySelectorAll('.sidenav'), {"edge": "right"});
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