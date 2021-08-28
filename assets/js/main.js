barba.init({
  transitions: [{
    name: 'opacity-transition',
    async leave(data) {
      return gsap.to(data.current.container, {
        opacity: 0
      });
    },
    async enter(data) {
      return gsap.from(data.next.container, {
        opacity: 0
      });
    }
  }]
});

//Setup Google Analytics
const doNotTrackOption = (
    window.doNotTrack ||
    window.navigator.doNotTrack ||
    window.navigator.msDoNotTrack
  )

  const doNotTrack =
    !doNotTrackOption ? false ://if statement is true return false but if true return the value fo the next statement below
    (doNotTrackOption.charAt(0)  === '1' || doNotTrackOption === 'yes') ? true : false;

  if (doNotTrack == false) {//if do not track is desabled
    //add anylytics script
    var script = document.createElement('script');
    script.async = "";
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-5LX6PMSFGK";
    document.getElementsByTagName('head')[0].appendChild(script);
    //apply anylitics
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-5LX6PMSFGK');
  }
  else {//if do not track is enabled
    //give website a chance to load the css so the message animates in
    setTimeout(
      () => {
        //add the active-do-not-track-message id to message
        document.getElementsByClassName("do-not-track-message")[0].setAttribute("id", "active-do-not-track-message");
      },
      1300
    )
    
  }