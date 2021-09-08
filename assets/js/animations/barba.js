//import {addScrollTrigger} from './SlideOnVeiwportEnter.js';

barba.init({
    transitions: [
      {
        leave: (data) =>
          gsap.to(data.current.container, {
            opacity: 0,
            y: 100,
            duration: 0.4
          }),
        afterLeave: (data) =>
          gsap.to(data.current.container, {
            //hide an element so it is'nt even rendered in the veiwport
            display: "none",
            duration: 0
          }),
        enter: (data) =>
          gsap.from(data.next.container, {
            opacity: 0,
            y: 100,
            duration: 0.4
          }),
        //after: addScrollTrigger,//this function is from ./page first load animation see line 1
          
      }
    ]
  });  