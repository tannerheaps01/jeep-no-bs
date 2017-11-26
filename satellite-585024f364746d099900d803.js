window.runOtoO = function(){
  console.log("--- O2O Code Running");
  if(typeof s !== "undefined" && !s.pageName.includes("stop")){
    var rVal = (typeof sdpbuild !== "undefined") ? sdpbuild.buildTimeStamp: '',
      modelVal = s.eVar5, //1v1
      pageTypeVal = s.prop25, //av1
      pageNameVal = s.pageName, //av2
      trafficSourceVal = s.eVar26;// av3
  
      loadScript = function (dVal, pathVal) {
        var sVal = dVal.createElement('script'),
            aVal = "async",
            bVal = "defer";
        sVal.setAttribute(aVal, aVal);
        sVal.setAttribute(bVal, bVal);
        sVal.type = 'text/javascript';
        sVal.src = pathVal;
        dVal.getElementsByTagName('head')[0].appendChild(sVal);
        window.loadedOtoO = true;
      };
      loadScript(document, document.location.protocol + "//a01.korrelate.net/a/e/d2a.ads?r="+rVal+"&et=a&ago=447&ao=513&px=373&pt=s&lvl="+modelVal+"&av1="+pageTypeVal+"&av2="+pageNameVal+"&av3="+trafficSourceVal+"&c_uid=");
  }
}
window.runOtoO();
