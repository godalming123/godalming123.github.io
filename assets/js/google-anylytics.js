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
      () => M.toast({html: "We have disabled google anylytics as do not track option is enabled in your browser if this is incorrect please file a bug <a href='https://github.com/godalming123/godalming123.github.io/issues/new'>here</a>"}),
      1300
    )
    
  }