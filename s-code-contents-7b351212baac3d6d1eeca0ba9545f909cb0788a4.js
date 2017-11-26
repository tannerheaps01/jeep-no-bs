
/*Marketing Reports & Analytics 
Copyright 1996-2020 Adobe, Inc. All Rights Reserved */


var sHost = window.location.host;
var s_account = "";
/*_satellite.settings.isStaging : Boolean - Built into DTM to determined if the domain is staging or live.*/
if(_satellite.settings.isStaging){
  /*Staging Account Values*/
  s_account="fcaentrp.globalreportsuite.test.dev"; 
} else {
  /*Live Account Values*/
  s_account="fcaentrp.globalreportsuite,fcanafta.jeep.usa.tier1tier2";  
}

if(typeof window.s_intl_account != "undefined"){s_account += ","+window.s_intl_account;};

var s = s_gi(s_account);

//commneted out couple of lines below as per the email instructions
//s.visitorNamespace="fcaglobal";
s.trackingServer="metrics.fcacert.com";
s.trackingServerSecure="smetrics.fcacert.com";
s.visitor = Visitor.getInstance("3ECF483F53AB366E0A490D44@AdobeOrg");


/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
s.charSet="UTF-8"
/* Conversion Config */
s.currencyCode="USD"
/* Link Tracking Config */
s.trackDownloadLinks=false
s.trackExternalLinks=true
s.trackInlineStats=true
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx"
s.linkInternalFilters="javascript:,ats.adobe.com,#,localhost,jeep.com,tel:"
s.linkLeaveQueryString=false
s.linkTrackVars="None"
s.linkTrackEvents="None"
//s._channelPattern="Display|display>Paid Search|paidsearch>E Direct|edirect>Social|social"; // as provided by the Chryseler Marketing Team 

s._tpDST = {
2012:'3/11,11/4',
2013:'3/10,11/3',
2014:'3/9,11/2',
2015:'3/8,11/1',
2016:'3/13,11/6',
2017:'3/12,11/5',
2018:'3/11,11/4',
2019:'3/10,11/3'}

s.usePlugins=true
s.doPlugins = function(s) {
    /* Cookie Controllers - Serialization */
    var hitexp = new Date();
    var currenttime = new Date();
    hitexp.setTime(currenttime.getTime() + 1800000);
    document.cookie = "s_lasthit=" + currenttime + "; expires=" + hitexp.toUTCString() + " UTC; path=/";
    document.cookie = "s_sessionhit=s_hit_enabled; expires=0; path=/";
    /*******************/

    s.evar1 = s.getQueryParam('intcid'); /*eVar 1 contains internal campaign tracking code*/
    s.server = window.location.hostname;

    /*External campaign measurement code*/
    s._channelDomain = 'Social|blog.chrysler.com,blog.dodge.com,blog.fiatusa.com,blog.jeep.com,blog.ramtrucks.com,chime.in,delicious.com,digg.com,editions.com,facebook.com,fark.com,feedly.com,flickr.com,flixter.com,foursquare.com,friendfeed.com,friendster.com,gather.com,hootsuite.com,indenti.ca,instagr.am,instagram.com,last.fm,linkedin.com,livejournal.com,lmvu.com,meetup.com,metafilter.com,mixx.com,myspace.com,netlog.com,newsvine.com,ning.com,pinterest.com,plaxo.com,plurk.com,plus.google.com,popurls.com,quora.com,ramzone.com,reddit.com,redlinedodge.com,stumbleupon.com,/t.co,tumblr.com,twitter.com,vimeo.com,wikipedia.org,xanga.com,yelp.com,youtube.com';
    s.channelManager('bid,sid,pid,adid,cid,buytype,tr,channel,kwnm,kwid', ':', 'cmgvo', '', 's_dl', '', '1'); /* Channel Manager plugin configuration*/
    s_bid = s.getQueryParam('bid');
    s_sid = s.getQueryParam('sid');
    s_pid = s.getQueryParam('pid');
    s_adid = s.getQueryParam('adid');
    s_cid = s.getQueryParam('cid');
    s_buytype = s.getQueryParam('buytype');
    s_tr = s.getQueryParam('tr');
    s_channel = s.getQueryParam('channel');
    s_kwnm = s.getQueryParam('kwnm');
    s_kwid = s.getQueryParam('kwid');
    s_hrf = s.getQueryParam('hrf');
    if (s._campaignID) {
        s.eVar30 = s.campaign = s_bid + ':' + s_sid + ':' + s_pid + ':' + s_adid + ':' + s_cid + ':' + s_buytype + ':' + s_tr + ':' + s_channel + ':' + s_kwnm + ':' + s_kwid + ':' + s_hrf;
    };
    if (s_channel == 'display') {
        s._channel = 'Display';
        s.eVar30 = s.campaign = s_sid + ':' + s_pid + ':' + s_adid + ':' + s_cid;
    };
    if (s_channel == 'e_direct' || s_channel == 'edirect' || s_channel == 'email') {
        s._channel = 'Email';
        s.eVar30 = s.campaign = s_sid + ':' + s_adid; 
        
    };
    if (s_channel == 'paidsearch' || s_channel == 'PS') {
        s._channel = 'Paid Search';
        s.eVar30 = s.campaign = s_sid + ':' + s_kwid;
    };
    if (s._channel == 'Social') {
        s.eVar30 = s.campaign = 'soc-rd:' + s._referringDomain;
    };
    if (s_channel == 'social') {
        s._channel = 'Social';
    };
    if (s_channel == 'pre-roll') {
        s._channel = 'Pre-roll';
    };
    /* ***** if referring domain is social and channel QSP is display */
    if ((s._channel == "Social") && (s_channel == "display")) {
        s._channel = 'Display';
    };
    if (s._channel == "Natural Search") {
        s.campaign = s.eVar36 = s.eVar30 = "ns:" + s._campaign + ":" + s.pageName; /*SEO Page Attribution eg: Google :Home*/
    };
    if (s._channel == "Typed/Bookmarked") {
        s._channel = 'Direct';
        s.eVar30 = s.campaign = 'Direct';
    };
    if (s._channel == "Other Natural Referrers") {
        s.eVar30 = s.campaign = 'rd:' + s._referringDomain;
    };

    s.eVar35 = null;
    s.eVar0 = null;
    s.eVar26 = s.eVar40 = s._channel; /* considering that channel first & last are to be allocated same values.*/
    s.eVar39 = s.crossVisitParticipation(s.campaign, 's_ev39', '30', '10', '>', ''); /* Stacking  10 campaign codes for 30 days. Please define the success event to stop stacking. */
    s.eVar41 = s.crossVisitParticipation(s.eVar40, 's_ev41', '30', '10', '>', ''); /* Stacking  10 campaign codes for 30 days. Please define the success event to stop stacking. */

    s_ax_src = s.getQueryParam('ax_src');
    s_ax_src_a_1 = s.getQueryParam('ax_src_a_1');
    s_ax_src_a_2 = s.getQueryParam('ax_src_a_2');
    s_ax_src_a_3 = s.getQueryParam('ax_src_a_3');
    s_ax_src_a_4 = s.getQueryParam('ax_src_a_4');
    s_ax_src_a_5 = s.getQueryParam('ax_src_a_5');
    s_ax_src_a_6 = s.getQueryParam('ax_src_a_6');
    s_ax_src_a_7 = s.getQueryParam('ax_src_a_7');
    s_ax_src_a_8 = s.getQueryParam('ax_src_a_8');
    s_ax_src_a_9 = s.getQueryParam('ax_src_a_9');
    s_ax_src_a_10 = s.getQueryParam('ax_src_a_10');
    s_ax_src_a_11 = s.getQueryParam('ax_src_a_11');
    s_ax_src_a_12 = s.getQueryParam('ax_src_a_12');
    s_ax_src_a_13 = s.getQueryParam('ax_src_a_13');
    s_ax_src_a_14 = s.getQueryParam('ax_src_a_14');
    s_ax_src_a_15 = s.getQueryParam('ax_src_a_15');
    s_ax_src_a_16 = s.getQueryParam('ax_src_a_16');

    if (s_ax_src) {
        s.eVar57 = s_ax_src + ':' + s_ax_src_a_1 + ':' + s_ax_src_a_2 + ':' + s_ax_src_a_3 + ':' + s_ax_src_a_4 + ':' + s_ax_src_a_5 + ':' + s_ax_src_a_6 + ':' + s_ax_src_a_7 + ':' + s_ax_src_a_8 + ':' + s_ax_src_a_9 + ':' + s_ax_src_a_10 + ':' + s_ax_src_a_11 + ':' + s_ax_src_a_12 + ':' + s_ax_src_a_13 + ':' + s_ax_src_a_14 + ':' + s_ax_src_a_15 + ':' + s_ax_src_a_16;
    };

    if (s.prop1 && s.eVar5)
        s.prop45 = s.prop1 + ":" + s.pageName; /* if prop1 & eVar5 are set prop45 to have page name & model name*/
    s.prop28 = location.protocol + "//" + location.host + "" + location.pathname;
    s.prop29 = location.href;

    if (s.pageName == "stopsni" || s.pageName == "stopfad" || s.pageName == "stopincentives") { s.abort = 1; }
    
    if (!s.abort) {
        s.prop26 = s.getPreviousValue(s.pageName, 'gpv', ''); /* Get page name of previous page*/
        var ppv = s.getPercentPageViewed(s.pageName);
        s.prop30 = ppv[1] + '|' + ppv[2];
    }

    s.prop57 = s.eVar37 = s.pageName;
    s.eVar38 = s.prop11;

    s.events = s.apl(s.events, "event13", ",")

    if (s.getVisitStart("s_visit") == 1 && s.prop58.indexOf('aem') == -1) {
        s.eVar58 = location.href;
    }

    s.getActionDepthTest = true;

    s.eVar64 = s.c_r('s_vi');
    if (!s.eVar64)
        s.eVar64 = s.c_r('AMCV_3ECF483F53AB366E0A490D44@AdobeOrg');

    /*Removing eVar64 only for SDP.*/
    if (s.prop58.indexOf('aem') > -1) {
        s.eVar64 = '';
    }
    /*Get Time Parting Configuration Starts Here*/

    var tpA = s.getTimeParting('h', '-4');
    var tpA1 = tpA.split('|');
    s.prop74 = tpA1[0]; /*Time of Day */
    s.prop72 = tpA1[1]; /*Day of Week*/
    /* Get Time Parting Configuration Ends Here */
    s.prop19 = s.getDaysSinceLastVisit('s_lv'); /* Days since last visit*/

    s.prop24 = navigator.userAgent;
    s.eVar25 = s.prop25;

    if (s.campaign){s.prop33 = s.pageName + '|' + s.campaign; /*checks if s.campaign has been set and assigns pagename & tracking code*/}
        
  	/*Code for subsequent O2O Calls - This code's condition means that it will not
    run on initial page load and not during a link track. The original O2O code is now wrapped 
    in a named function instead of one that auto runs.*/
    var lLength = _satellite.Logger.messages.length;
    var lMessage = _satellite.Logger.messages[lLength-1][1];
    if((!window.isPageLoad && !s.abort)){
       if(!s.events.includes("event70") && lMessage.includes("Direct")){
         console.log("*** Conditions Passed for subsequent running O2O *** ",lMessage);
         /*O2O - This allows for the O2O code to run */
         typeof window.runOtoO != "undefined" && typeof window.loadedOtoO != "undefined" && window.loadedOtoO == true && runOtoO();
       }
    } else{typeof window.isPageLoad != "undefined" && window.isPageLoad==1?window.isPageLoad=0:"";}

};

s.loadModule('Media');
s.Media.autoTrack=false;
s.Media.playerName='My Media Player';
s.Media.segmentByMilestones=true;
s.Media.trackMilestones='25,50,75,100';
s.Media.trackUsingContextData=true;
s.Media.trackWhilePlaying = true;
s.Media.contextDataMapping = {
'a.contentType':'eVar46', 
'a.media.name':'eVar45,prop44',
'a.media.view':'event58',
'a.media.timePlayed':'event59',
'a.media.pageName': 'prop57,eVar37',
'a.media.milestones':{
25:'event61',
50:'event62',
75:'event63',
100:'event60'
}
}
s.Media.trackVars='events,eVar52,eVar51,eVar53,prop52,prop51,eVar66';
s.Media.trackEvents='event51,event52,event53,event54,event55,event56,event57'



/********************************************************************
 *
 * Plug-ins section
 *
 *******************************************************************/


/*
 * Plugin Utility: Append to List v1.2
 */
s.apl=new Function("l","v","d","u",""
+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=l.split(d),al=a.length;fo"
+"r(i=0;i<al;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowe"
+"rCase()));}}if(!m)l=l?l+d+v:v;return l;");



/*
 * Plugin channelManager v3.01 - Tracking External Traffic
 */
s.channelManager=new Function("a","b","c","d","e","f","g",""
+"var s=this,h=new Date,i=0,j,k,l,m,n,o,p,q,r,t,u,v,w,x,y,z,A,B,C,D,E"
+",F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V;U=s.getQueryParam?1:0;V=s.repl?1"
+":0;h.setTime(h.getTime()+1800000);if(e){i=1;if(s.c_r(e))i=0;if(!s.c"
+"_w(e,1,h))s.c_w(e,1,0);if(!s.c_r(e))i=0;if(f&&s.c_r('s_tbm'+f))i=0;"
+"}j=s.referrer?s.referrer:document.referrer;j=decodeURIComponent(j.t"
+"oLowerCase());if(!j)k=1;else {l=j.indexOf('?')>-1?j.indexOf('?'):j."
+"length;m=j.substring(0,l);n=j.split('/');n=n[2].split('?');o=n[0].t"
+"oLowerCase();p=s.linkInternalFilters.toLowerCase();p=p.split(',');f"
+"or(q=0;q<p.length;q++){r=o.indexOf(p[q])==-1?'':j;if(r)break;}}if(!"
+"r&&!k){t=j;u=o;w='Other Natural Referrers';v=w+' '+o;x=s.seList+'>'"
+"+s._extraSearchEngines;if(d==1){m=V?s.repl(m,'oogle','%'):s.replace"
+"(m,'oogle','%');m=V?s.repl(m,'ahoo','^'):s.replace(m,'ahoo','^');j="
+"V?s.repl(j,'as_q','*'):s.replace(j,'as_q','*');}y=x.split('>');for("
+"z=0;z<y.length;z++){A=y[z];A=A.split('|');B=A[0].split(',');for(C=0"
+";C<B.length;C++){D=m.indexOf(B[C]);if(D>-1){if(A[2])E=v=A[2];else E"
+"=o;if(d==1){E=V?s.repl(E,'#',' - '):s.replace(E,'#',' - ');j=V?s.re"
+"pl(j,'*','as_q'):s.replace(j,'*','as_q');E=V?s.repl(E,'^','ahoo'):s"
+".replace(E,'^','ahoo');E=V?s.repl(E,'%','oogle'):s.replace(E,'%','o"
+"ogle');}F=A[1].split(',');for(G=0;G<F.length;G++){if(j.indexOf(F[G]"
+"+'=')>-1||j.indexOf('https://www.google.')==0||j.indexOf('http://r."
+"search.yahoo.com')==0)H=1;I=U?s.getQueryParam(F[G],'',j).toLowerCas"
+"e():s.Util.getQueryParam(F[G],j).toLowerCase();if(H||I)break;}}if(H"
+"||I)break;}if(H||I)break;}}if(!r||g!='1'){J=a.split(',');for(var q "
+"in J){if(J.hasOwnProperty(q)){if(U?s.getQueryParam(J[q]):s.Util.get"
+"QueryParam(J[q])){T=T?T+b+(U?s.getQueryParam(J[q]):s.Util.getQueryP"
+"aram(J[q])):(U?s.getQueryParam(J[q]):s.Util.getQueryParam(J[q]));}}"
+"}if(T){v=T;if(E)w='Paid Search';else w='Unknown Paid Channel';}if(!"
+"T&&E&&H){w='Natural Search';v=w+' '+E;}}if(i&&k&&!T)t=u=v=w='Typed/"
+"Bookmarked';J=s._channelDomain;if(J&&o&&!r){K=J.split('>');for(L=0;"
+"L<K.length;L++){M=K[L]?K[L].split('|'):'';N=M[1]?M[1].split(','):''"
+";O=N.length;for(P=0;P<O;P++){Q=N[P].toLowerCase();R=('/'+o).indexOf"
+"(Q);if(R>-1){w=M[0];break;}}if(R>-1)break;}}J=s._channelParameter;i"
+"f(J){K=J.split('>');for(L=0;L<K.length;L++){M=K[L]?K[L].split('|'):"
+"'';N=M[1]?M[1].split(','):'';O=N.length;for(P=0;P<O;P++){R=U?s.getQ"
+"ueryParam(N[P]):s.Util.getQueryParam(N[P]);if(R){w=M[0];break;}}if("
+"R)break;}}J=s._channelPattern;if(J){K=J.split('>');for(L=0;L<K.leng"
+"th;L++){M=K[L]?K[L].split('|'):'';N=M[1]?M[1].split(','):'';O=N.len"
+"gth;for(P=0;P<O;P++){Q=N[P].toLowerCase();R=T?T.toLowerCase():'';S="
+"R.indexOf(Q);if(S==0){w=M[0];break;}}if(S==0)break;}}S=w?T+u+w+I:''"
+";c=c?c:'c_m';if(c!='0')S=s.getValOnce(S,c,0);if(S){s._campaignID=T?"
+"T:'n/a';s._referrer=t?t:'n/a';s._referringDomain=u?u:'n/a';s._campa"
+"ign=v?v:'n/a';s._channel=w?w:'n/a';s._partner=E?E:'n/a';s._keywords"
+"=H?I?I:'Keyword Unavailable':'n/a';if(f&&w!='Typed/Bookmarked'){h.s"
+"etTime(h.getTime()+f*86400000);s.c_w('s_tbm'+f,1,h);}}else s._campa"
+"ignID=s._referrer=s._referringDomain=s._campaign=s._channel=s._part"
+"ner=s._keywords='';");
/* Top 130 - Grouped */
s.seList="google.,googlesyndication.com,.googleadservices.com|q,as_q|"
+"Google>bing.com|q|Bing>yahoo.com,yahoo.co.jp|p,va|Yahoo!>ask.jp,ask"
+".co|q,ask|Ask>search.aol.,suche.aolsvc.de|q,query|AOL>altavista.co,"
+"altavista.de|q,r|AltaVista>.mywebsearch.com|searchfor|MyWebSearch>w"
+"ebcrawler.com|q|WebCrawler>wow.com|q|Wow>infospace.com|q|InfoSpace>"
+"blekko.com|q|Blekko>dogpile.com|q|DogPile>alhea.com|q|Alhea>goduckg"
+"o.com|q|GoDuckGo>info.com|qkw|Info.com>contenko.com|q|Contenko>baid"
+"u.com|word,wd|Baidu>daum.net,search.daum.net|q|Daum>icqit.com|q|icq"
+">myway.com|searchfor|MyWay.com>naver.com,search.naver.com|query|Nav"
+"er>netscape.com|query,search|Netscape Search>reference.com|q|Refere"
+"nce.com>seznam|w|Seznam.cz>abcsok.no|q|Startsiden>tiscali.it,www.ti"
+"scali.co.uk|key,query|Tiscali>virgilio.it|qs|Virgilio>yandex|text|Y"
+"andex.ru>optimum.net|q|Optimum Search>search.earthlink.net|q|Earthl"
+"ink>search.comcast.net|q|Comcast>libero.it|query|libero.it>excite.c"
+"o|search|Excite>mail.ru|q|Mail.ru>isearch.avg.com|q|AVG>msn.com|q|M"
+"SN>seznam.cz|q|seznam.cz>so.com|q|so.com>ixquick.com|query|ixquick."
+"com>sogou.com|query|sogou.com>360.cn|q|360.cn";

/*
 *  Plug-in: crossVisitParticipation v1.7 - stacks values from
 *  specified variable in cookie and returns value
 */
 
s.crossVisitParticipation=new Function("v","cn","ex","ct","dl","ev","dv",""
+"var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var"
+" ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l"
+"ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i"
+"f(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape("
+"v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array()"
+";if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length;q++){z=ar"
+"ry[q];z=s.repl(z,'[','');z=s.repl(z,']','');z=s.repl(z,\"'\",'');arry"
+"[q]=s.split(z,',')}}var e=new Date();e.setFullYear(e.getFullYear()+"
+"5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.len"
+"gth-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date("
+").getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new"
+" Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td."
+"getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arry[x][0"
+"]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{delim:',',"
+"front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join(h,{deli"
+"m:dl});if(ce)s.c_w(cn,'');return r;");

/*
 * Plugin: Days since last Visit 1.0.H - capture time from last visit
 */
s.getDaysSinceLastVisit=new Function(""
+"var s=this,e=new Date(),cval,ct=e.getTime(),c='s_lastvisit',day=24*"
+"60*60*1000;e.setTime(ct+3*365*day);cval=s.c_r(c);if(!cval){s.c_w(c,"
+"ct,e);return 'First page view or cookies not supported';}else{var d"
+"=ct-cval;if(d>30*60*1000){if(d>30*day){s.c_w(c,ct,e);return 'More t"
+"han 30 days';}if(d<30*day+1 && d>7*day){s.c_w(c,ct,e);return 'More "
+"than 7 days';}if(d<7*day+1 && d>day){s.c_w(c,ct,e);return 'Less tha"
+"n 7 days';}if(d<day+1){s.c_w(c,ct,e);return 'Less than 1 day';}}els"
+"e return '';}"
);


/*
 * Plugin: getActionDepth v1.0 - Returns the current
 * page number of the visit
 */
s.getActionDepth=new Function("c",""
+ "var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);"
+ "if(!s.c_r(c)){v=1}if(s.c_r(c)){v=s.c_r(c);v++}"
+ "if(!s.c_w(c,v,t)){s.c_w(c,v,0)}return v;");


/*
 * Plugin: getPercentPageViewed 2.0 (Minfied)
 */
s.handlePPVevents=function(){if(!s_c_il)return;for(var i=0,scill=s_c_il.length;i<scill;i++)if(typeof s_c_il[i]!="undefined"&&s_c_il[i]._c&&s_c_il[i]._c=="s_c"){var s=s_c_il[i];break}if(!s)return;if(!s.getPPVid)return;var dh=Math.max(Math.max(s.d.body.scrollHeight,s.d.documentElement.scrollHeight),Math.max(s.d.body.offsetHeight,s.d.documentElement.offsetHeight),Math.max(s.d.body.clientHeight,s.d.documentElement.clientHeight)),vph=window.innerHeight||(s.d.documentElement.clientHeight||s.d.body.clientHeight),
st=window.pageYOffset||(window.document.documentElement.scrollTop||window.document.body.scrollTop),vh=st+vph,pv=Math.min(Math.round(vh/dh*100),100),c="";if(!s.c_r("tp")||decodeURIComponent(s.c_r("s_ppv").split(",")[0])!=s.getPPVid||s.ppvChange=="1"&&(s.c_r("tp")&&dh!=s.c_r("tp"))){s.c_w("tp",dh);s.c_w("s_ppv","")}else c=s.c_r("s_ppv");var a=c&&c.indexOf(",")>-1?c.split(",",4):[],id=a.length>0?a[0]:escape(s.getPPVid),cv=a.length>1?parseInt(a[1]):0,p0=a.length>2?parseInt(a[2]):pv,cy=a.length>3?parseInt(a[3]):
0,cn=pv>0?id+","+(pv>cv?pv:cv)+","+p0+","+(vh>cy?vh:cy):"";s.c_w("s_ppv",cn)};
s.getPercentPageViewed=function(pid,change){var s=this,ist=!s.getPPVid?true:false;pid=pid?pid:s.pageName?s.pageName:document.location.href;s.ppvChange=change?change:"1";if(typeof s.linkType!="undefined"&&s.linkType!="0"&&s.linkType!=""&&s.linkType!="e")return"";var v=s.c_r("s_ppv"),a=v.indexOf(",")>-1?v.split(",",4):[];if(a&&a.length<4){for(var i=3;i>0;i--)a[i]=i<a.length?a[i-1]:"";a[0]=""}if(a)a[0]=unescape(a[0]);if(!s.getPPVid||s.getPPVid!=pid){s.getPPVid=pid;s.c_w("s_ppv",escape(s.getPPVid));s.handlePPVevents()}if(ist)if(window.addEventListener){window.addEventListener("load",
s.handlePPVevents,false);window.addEventListener("click",s.handlePPVevents,false);window.addEventListener("scroll",s.handlePPVevents,false);window.addEventListener("resize",s.handlePPVevents,false)}else if(window.attachEvent){window.attachEvent("onload",s.handlePPVevents);window.attachEvent("onclick",s.handlePPVevents);window.attachEvent("onscroll",s.handlePPVevents);window.attachEvent("onresize",s.handlePPVevents)}return pid!="-"?a:a[1]};


/* Plugin: getPreviousValue 1.1 (Minified) */
s.getPreviousValue=function(v,c,el){var s=this,t=new Date,i,j,r="",f=1;c=c?c:"s_gpv";t.setTime(t.getTime()+18E5);if(el){f=0;i=el.split(",");j=s.events?s.events.split(","):"";for(var x=0,il=i.length;x<il;x++){for(var y=0,jl=j.length;y<jl;y++)if(i[x]==j[y]){f=1;break}if(f==1)break}}if(f==1){if(s.c_r(c))r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,"no value",t)}return r};

/*
 *  getQueryParam v2.5 - H-code and AppMeasurement Compatible
 */ 
s.getQueryParam=function(p,d,u,h){var s=this,v="",i,j,t;d=d?d:"";u=u?u:s.pageURL?s.pageURL:s.wd?s.wd.location:window.location;while(p){i=p.indexOf(",");i=i<0?p.length:i;t=s.p_gpv(p.substring(0,i),u+"",h);if(t)t=t.indexOf("#")>-1?t.substring(0,t.indexOf("#")):t;if(t)v+=v?d+t:t;p=p.substring(i==p.length?i:i+1)}return v};
s.p_gpv=function(k,u,h){var s=this,v="",q;j=h==1?"#":"?";i=u.indexOf(j);if(k&&i>-1){q=u.substring(i+1);v=s.pt(q,"&","p_gvf",k)}return v};
s.p_gvf=function(t,k){if(t){var s=this,i=t.indexOf("="),p=i<0?t:t.substring(0,i),v=i<0?true:t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s.epa?s.epa(v):s.unescape(v)}return""};

/*
 * Plugin: getTimeParting 3.4
 */
s.getTimeParting=new Function("h","z",""
+"var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMont"
+"h()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['"
+"Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturda"
+"y'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tp"
+"DST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYea"
+"r());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de)"
+"{z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getT"
+"imezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d"
+".getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U=' AM';if(H>=12){U=' P"
+"M';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}");

/*
 * Plugin: getValOnce_v1.11
 */
s.getValOnce=new Function("v","c","e","t",""
+"var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000"
+"0:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e"
+"==0?0:a);}return v==k?'':v");


/*
 *  pt - utility function
 */ 
s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:""}return""};

/*
 * Plugin: getVisitStart v2.1 - return 1 on start of visit, else 0
 */
s.getVisitStart=new Function("c",""
+"var s=this,n,t=new Date;if(typeof s.callType=='function'&&s.callTyp"
+"e()=='+')return 0;if(!c)c='s_visit';t.setTime(t.getTime()+18e5);n=s"
+".c_r(c)?0:1;if(!s.c_w(c,1,t))s.c_w(c,1,0);if(!s.c_r(c))n=0;return n");

/*
 * Utility manageVars v1.41 - clear variable values (requires split 1.5)
 */
s.manageVars=new Function("c","l","f",""
+"var s=this,vl,la,vla;l=l?l:'';f=f?f:1 ;if(!s[c])return false;vl='pa"
+"geName,purchaseID,channel,server,pageType,campaign,state,zip,events"
+",products,transactionID';for(var n=1;n<251;n++){vl+=',prop'+n+',eVar"
+"'+n+',hier'+n;}if(l&&(f==1||f==2)){if(f==1){vl=l;}if(f==2){la=s.spl"
+"it(l,',');vla=s.split(vl,',');vl='';for(x in la){for(y in vla){if(l"
+"a[x]==vla[y]){vla[y]='';}}}for(y in vla){vl+=vla[y]?','+vla[y]:'';}"
+"}s.pt(vl,',',c,0);return true;}else if(l==''&&f==1){s.pt(vl,',',c,0"
+");return true;}else{return false;}");
s.clearVars=new Function("t","var s=this;s[t]='';");
s.lowercaseVars=new Function("t",""
+"var s=this;if(s[t]&&t!='events'){s[t]=s[t].toString();if(s[t].index"
+"Of('D=')!=0){s[t]=s[t].toLowerCase();}}");

/*
 * Plugin Utility: Replace v1.0
 */
s.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");


/*
 * s.join: 1.0 - Joins an array into a string
 */
s.join=new Function("v","p",""
+"var s=this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back:'"
+"';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0;x"
+"<v.length;x++){if(typeof(v[x])=='object')str+=s.join(v[x],p);else s"
+"tr+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");


/*
 * Utility Function: split v1.5 (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
MEDIA MODULE
*/
function AppMeasurement_Module_Media(q){var b=this;b.s=q;q=window;q.s_c_in||(q.s_c_il=[],q.s_c_in=0);b._il=q.s_c_il;b._in=q.s_c_in;b._il[b._in]=b;q.s_c_in++;b._c="s_m";b.list=[];b.open=function(d,c,e,k){var f={},a=new Date,l="",g;c||(c=-1);if(d&&e){b.list||(b.list={});b.list[d]&&b.close(d);k&&k.id&&(l=k.id);if(l)for(g in b.list)!Object.prototype[g]&&b.list[g]&&b.list[g].R==l&&b.close(b.list[g].name);f.name=d;f.length=c;f.offset=0;f.e=0;f.playerName=b.playerName?b.playerName:e;f.R=l;f.C=0;f.a=0;f.timestamp=
Math.floor(a.getTime()/1E3);f.k=0;f.u=f.timestamp;f.c=-1;f.n="";f.g=-1;f.D=0;f.I={};f.G=0;f.m=0;f.f="";f.B=0;f.L=0;f.A=0;f.F=0;f.l=!1;f.v="";f.J="";f.K=0;f.r=!1;f.H="";f.complete=0;f.Q=0;f.p=0;f.q=0;b.list[d]=f}};b.openAd=function(d,c,e,k,f,a,l,g){var h={};b.open(d,c,e,g);if(h=b.list[d])h.l=!0,h.v=k,h.J=f,h.K=a,h.H=l};b.M=function(d){var c=b.list[d];b.list[d]=0;c&&c.monitor&&clearTimeout(c.monitor.interval)};b.close=function(d){b.i(d,0,-1)};b.play=function(d,c,e,k){var f=b.i(d,1,c,e,k);f&&!f.monitor&&
(f.monitor={},f.monitor.update=function(){1==f.k&&b.i(f.name,3,-1);f.monitor.interval=setTimeout(f.monitor.update,1E3)},f.monitor.update())};b.click=function(d,c){b.i(d,7,c)};b.complete=function(d,c){b.i(d,5,c)};b.stop=function(d,c){b.i(d,2,c)};b.track=function(d){b.i(d,4,-1)};b.P=function(d,c){var e="a.media.",k=d.linkTrackVars,f=d.linkTrackEvents,a="m_i",l,g=d.contextData,h;c.l&&(e+="ad.",c.v&&(g["a.media.name"]=c.v,g[e+"pod"]=c.J,g[e+"podPosition"]=c.K),c.G||(g[e+"CPM"]=c.H));c.r&&(g[e+"clicked"]=
!0,c.r=!1);g["a.contentType"]="video"+(c.l?"Ad":"");g["a.media.channel"]=b.channel;g[e+"name"]=c.name;g[e+"playerName"]=c.playerName;0<c.length&&(g[e+"length"]=c.length);g[e+"timePlayed"]=Math.floor(c.a);0<Math.floor(c.a)&&(g[e+"timePlayed"]=Math.floor(c.a));c.G||(g[e+"view"]=!0,a="m_s",b.Heartbeat&&b.Heartbeat.enabled&&(a=c.l?b.__primetime?"mspa_s":"msa_s":b.__primetime?"msp_s":"ms_s"),c.G=1);c.f&&(g[e+"segmentNum"]=c.m,g[e+"segment"]=c.f,0<c.B&&(g[e+"segmentLength"]=c.B),c.A&&0<c.a&&(g[e+"segmentView"]=
!0));!c.Q&&c.complete&&(g[e+"complete"]=!0,c.S=1);0<c.p&&(g[e+"milestone"]=c.p);0<c.q&&(g[e+"offsetMilestone"]=c.q);if(k)for(h in g)Object.prototype[h]||(k+=",contextData."+h);l=g["a.contentType"];d.pe=a;d.pev3=l;var q,s;if(b.contextDataMapping)for(h in d.events2||(d.events2=""),k&&(k+=",events"),b.contextDataMapping)if(!Object.prototype[h]){a=h.length>e.length&&h.substring(0,e.length)==e?h.substring(e.length):"";l=b.contextDataMapping[h];if("string"==typeof l)for(q=l.split(","),s=0;s<q.length;s++)l=
q[s],"a.contentType"==h?(k&&(k+=","+l),d[l]=g[h]):"view"==a||"segmentView"==a||"clicked"==a||"complete"==a||"timePlayed"==a||"CPM"==a?(f&&(f+=","+l),"timePlayed"==a||"CPM"==a?g[h]&&(d.events2+=(d.events2?",":"")+l+"="+g[h]):g[h]&&(d.events2+=(d.events2?",":"")+l)):"segment"==a&&g[h+"Num"]?(k&&(k+=","+l),d[l]=g[h+"Num"]+":"+g[h]):(k&&(k+=","+l),d[l]=g[h]);else if("milestones"==a||"offsetMilestones"==a)h=h.substring(0,h.length-1),g[h]&&b.contextDataMapping[h+"s"][g[h]]&&(f&&(f+=","+b.contextDataMapping[h+
"s"][g[h]]),d.events2+=(d.events2?",":"")+b.contextDataMapping[h+"s"][g[h]]);g[h]&&(g[h]=0);"segment"==a&&g[h+"Num"]&&(g[h+"Num"]=0)}d.linkTrackVars=k;d.linkTrackEvents=f};b.i=function(d,c,e,k,f){var a={},l=(new Date).getTime()/1E3,g,h,q=b.trackVars,s=b.trackEvents,t=b.trackSeconds,u=b.trackMilestones,v=b.trackOffsetMilestones,w=b.segmentByMilestones,x=b.segmentByOffsetMilestones,p,n,r=1,m={},y;b.channel||(b.channel=b.s.w.location.hostname);if(a=d&&b.list&&b.list[d]?b.list[d]:0)if(a.l&&(t=b.adTrackSeconds,
u=b.adTrackMilestones,v=b.adTrackOffsetMilestones,w=b.adSegmentByMilestones,x=b.adSegmentByOffsetMilestones),0>e&&(e=1==a.k&&0<a.u?l-a.u+a.c:a.c),0<a.length&&(e=e<a.length?e:a.length),0>e&&(e=0),a.offset=e,0<a.length&&(a.e=a.offset/a.length*100,a.e=100<a.e?100:a.e),0>a.c&&(a.c=e),y=a.D,m.name=d,m.ad=a.l,m.length=a.length,m.openTime=new Date,m.openTime.setTime(1E3*a.timestamp),m.offset=a.offset,m.percent=a.e,m.playerName=a.playerName,m.mediaEvent=0>a.g?"OPEN":1==c?"PLAY":2==c?"STOP":3==c?"MONITOR":
4==c?"TRACK":5==c?"COMPLETE":7==c?"CLICK":"CLOSE",2<c||c!=a.k&&(2!=c||1==a.k)){f||(k=a.m,f=a.f);if(c){1==c&&(a.c=e);if((3>=c||5<=c)&&0<=a.g&&(r=!1,q=s="None",a.g!=e)){h=a.g;h>e&&(h=a.c,h>e&&(h=e));p=u?u.split(","):0;if(0<a.length&&p&&e>=h)for(n=0;n<p.length;n++)(g=p[n]?parseFloat(""+p[n]):0)&&h/a.length*100<g&&a.e>=g&&(r=!0,n=p.length,m.mediaEvent="MILESTONE",a.p=m.milestone=g);if((p=v?v.split(","):0)&&e>=h)for(n=0;n<p.length;n++)(g=p[n]?parseFloat(""+p[n]):0)&&h<g&&e>=g&&(r=!0,n=p.length,m.mediaEvent=
"OFFSET_MILESTONE",a.q=m.offsetMilestone=g)}if(a.L||!f){if(w&&u&&0<a.length){if(p=u.split(","))for(p.push("100"),n=h=0;n<p.length;n++)if(g=p[n]?parseFloat(""+p[n]):0)a.e<g&&(k=n+1,f="M:"+h+"-"+g,n=p.length),h=g}else if(x&&v&&(p=v.split(",")))for(p.push(""+(0<a.length?a.length:"E")),n=h=0;n<p.length;n++)if((g=p[n]?parseFloat(""+p[n]):0)||"E"==p[n]){if(e<g||"E"==p[n])k=n+1,f="O:"+h+"-"+g,n=p.length;h=g}f&&(a.L=!0)}(f||a.f)&&f!=a.f&&(a.F=!0,a.f||(a.m=k,a.f=f),0<=a.g&&(r=!0));(2<=c||100<=a.e)&&a.c<e&&
(a.C+=e-a.c,a.a+=e-a.c);if(2>=c||3==c&&!a.k)a.n+=(1==c||3==c?"S":"E")+Math.floor(e),a.k=3==c?1:c;!r&&0<=a.g&&3>=c&&(t=t?t:0)&&a.a>=t&&(r=!0,m.mediaEvent="SECONDS");a.u=l;a.c=e}if(!c||3>=c&&100<=a.e)2!=a.k&&(a.n+="E"+Math.floor(e)),c=0,q=s="None",m.mediaEvent="CLOSE";7==c&&(r=m.clicked=a.r=!0);if(5==c||b.completeByCloseOffset&&(!c||100<=a.e)&&0<a.length&&e>=a.length-b.completeCloseOffsetThreshold)r=m.complete=a.complete=!0;l=m.mediaEvent;"MILESTONE"==l?l+="_"+m.milestone:"OFFSET_MILESTONE"==l&&(l+=
"_"+m.offsetMilestone);a.I[l]?m.eventFirstTime=!1:(m.eventFirstTime=!0,a.I[l]=1);m.event=m.mediaEvent;m.timePlayed=a.C;m.segmentNum=a.m;m.segment=a.f;m.segmentLength=a.B;b.monitor&&4!=c&&b.monitor(b.s,m);b.Heartbeat&&b.Heartbeat.enabled&&0<=a.g&&(r=!1);0==c&&b.M(d);r&&a.D==y&&(d={contextData:{}},d.linkTrackVars=q,d.linkTrackEvents=s,d.linkTrackVars||(d.linkTrackVars=""),d.linkTrackEvents||(d.linkTrackEvents=""),b.P(d,a),d.linkTrackVars||(d["!linkTrackVars"]=1),d.linkTrackEvents||(d["!linkTrackEvents"]=
1),b.s.track(d),a.F?(a.m=k,a.f=f,a.A=!0,a.F=!1):0<a.a&&(a.A=!1),a.n="",a.p=a.q=0,a.a-=Math.floor(a.a),a.g=e,a.D++)}return a};b.O=function(d,c,e,k,f){var a=0;if(d&&(!b.autoTrackMediaLengthRequired||c&&0<c)){if(b.list&&b.list[d])a=1;else if(1==e||3==e)b.open(d,c,"HTML5 Video",f),a=1;a&&b.i(d,e,k,-1,0)}};b.attach=function(d){var c,e,k;d&&d.tagName&&"VIDEO"==d.tagName.toUpperCase()&&(b.o||(b.o=function(c,a,d){var e,h;b.autoTrack&&(e=c.currentSrc,(h=c.duration)||(h=-1),0>d&&(d=c.currentTime),b.O(e,h,a,
d,c))}),c=function(){b.o(d,1,-1)},e=function(){b.o(d,1,-1)},b.j(d,"play",c),b.j(d,"pause",e),b.j(d,"seeking",e),b.j(d,"seeked",c),b.j(d,"ended",function(){b.o(d,0,-1)}),b.j(d,"timeupdate",c),k=function(){d.paused||d.ended||d.seeking||b.o(d,3,-1);setTimeout(k,1E3)},k())};b.j=function(b,c,e){b.attachEvent?b.attachEvent("on"+c,e):b.addEventListener&&b.addEventListener(c,e,!1)};void 0==b.completeByCloseOffset&&(b.completeByCloseOffset=1);void 0==b.completeCloseOffsetThreshold&&(b.completeCloseOffsetThreshold=
1);b.Heartbeat={};b.N=function(){var d,c;if(b.autoTrack&&(d=b.s.d.getElementsByTagName("VIDEO")))for(c=0;c<d.length;c++)b.attach(d[c])};b.j(q,"load",b.N)}

/*
 Start ActivityMap Module

 The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap
 allows you to view data overlays on your links and content to understand how
 users engage with your web site. If you do not intend to use ActivityMap, you
 can remove the following block of code from your AppMeasurement.js file.
 Additional documentation on how to configure ActivityMap is available at:
 https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html
*/
function AppMeasurement_Module_ActivityMap(f){function g(a,d){var b,c,n;if(a&&d&&(b=e.c[d]||(e.c[d]=d.split(","))))for(n=0;n<b.length&&(c=b[n++]);)if(-1<a.indexOf(c))return null;p=1;return a}function q(a,d,b,c,e){var g,h;if(a.dataset&&(h=a.dataset[d]))g=h;else if(a.getAttribute)if(h=a.getAttribute("data-"+b))g=h;else if(h=a.getAttribute(b))g=h;if(!g&&f.useForcedLinkTracking&&e&&(g="",d=a.onclick?""+a.onclick:"")){b=d.indexOf(c);var l,k;if(0<=b){for(b+=10;b<d.length&&0<="= \t\r\n".indexOf(d.charAt(b));)b++;
if(b<d.length){h=b;for(l=k=0;h<d.length&&(";"!=d.charAt(h)||l);)l?d.charAt(h)!=l||k?k="\\"==d.charAt(h)?!k:0:l=0:(l=d.charAt(h),'"'!=l&&"'"!=l&&(l=0)),h++;if(d=d.substring(b,h))a.e=new Function("s","var e;try{s.w."+c+"="+d+"}catch(e){}"),a.e(f)}}}return g||e&&f.w[c]}function r(a,d,b){var c;return(c=e[d](a,b))&&(p?(p=0,c):g(k(c),e[d+"Exclusions"]))}function s(a,d,b){var c;if(a&&!(1===(c=a.nodeType)&&(c=a.nodeName)&&(c=c.toUpperCase())&&t[c])&&(1===a.nodeType&&(c=a.nodeValue)&&(d[d.length]=c),b.a||
b.t||b.s||!a.getAttribute||((c=a.getAttribute("alt"))?b.a=c:(c=a.getAttribute("title"))?b.t=c:"IMG"==(""+a.nodeName).toUpperCase()&&(c=a.getAttribute("src")||a.src)&&(b.s=c)),(c=a.childNodes)&&c.length))for(a=0;a<c.length;a++)s(c[a],d,b)}function k(a){if(null==a||void 0==a)return a;try{return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$",
"mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}","mg")," ").substring(0,254)}catch(d){}}var e=this;e.s=f;var m=window;m.s_c_in||(m.s_c_il=[],m.s_c_in=0);e._il=m.s_c_il;e._in=m.s_c_in;e._il[e._in]=e;m.s_c_in++;e._c="s_m";e.c={};var p=0,t={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};e._g=function(){var a,d,b,c=f.contextData,e=f.linkObject;(a=f.pageName||f.pageURL)&&(d=r(e,"link",f.linkName))&&(b=r(e,"region"))&&(c["a.activitymap.page"]=a.substring(0,
255),c["a.activitymap.link"]=128<d.length?d.substring(0,128):d,c["a.activitymap.region"]=127<b.length?b.substring(0,127):b,c["a.activitymap.pageIDType"]=f.pageName?1:0)};e.link=function(a,d){var b;if(d)b=g(k(d),e.linkExclusions);else if((b=a)&&!(b=q(a,"sObjectId","s-object-id","s_objectID",1))){var c,f;(f=g(k(a.innerText||a.textContent),e.linkExclusions))||(s(a,c=[],b={a:void 0,t:void 0,s:void 0}),(f=g(k(c.join(""))))||(f=g(k(b.a?b.a:b.t?b.t:b.s?b.s:void 0)))||!(c=(c=a.tagName)&&c.toUpperCase?c.toUpperCase():
"")||("INPUT"==c||"SUBMIT"==c&&a.value?f=g(k(a.value)):"IMAGE"==c&&a.src&&(f=g(k(a.src)))));b=f}return b};e.region=function(a){for(var d,b=e.regionIDAttribute||"id";a&&(a=a.parentNode);){if(d=q(a,b,b,b))return d;if("BODY"==a.nodeName)return"BODY"}}}
/* End ActivityMap Module */
/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 1.8.0
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
function AppMeasurement(){var a=this;a.version="1.8.0";var h=window;h.s_c_in||(h.s_c_il=[],h.s_c_in=0);a._il=h.s_c_il;a._in=h.s_c_in;a._il[a._in]=a;h.s_c_in++;a._c="s_c";var n=h.AppMeasurement.Ob;n||(n=null);var p=h,l,r;try{for(l=p.parent,r=p.location;l&&l.location&&r&&""+l.location!=""+r&&p.location&&""+l.location!=""+p.location&&l.location.host==r.host;)p=l,l=p.parent}catch(s){}a.P=function(a){try{console.log(a)}catch(b){}};a.La=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||
0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.vb=function(){var c=h.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.cookieDomain&&
!/^[0-9.]+$/.test(c)&&(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.cookieDomain=0<d?c.substring(d):c}return a.cookieDomain};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.vb(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=
e&&"NONE"!=e&&((g=""!=b?parseInt(e?e:0):-60)?(d=new Date,d.setTime(d.getTime()+1E3*g)):1==d&&(d=new Date,g=d.getYear(),d.setYear(g+5+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=a.escape(c)+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toGMTString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.K=[];a.ia=function(c,b,d){if(a.Ea)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,k=["webkitvisibilitychange",
"visibilitychange"];g||(g=a.d.webkitVisibilityState);if(g&&"prerender"==g){if(!a.ja)for(a.ja=1,d=0;d<k.length;d++)a.d.addEventListener(k[d],function(){var c=a.d.visibilityState;c||(c=a.d.webkitVisibilityState);"visible"==c&&(a.ja=0,a.delayReady())});f=1;e=0}else d||a.p("_d")&&(f=1);f&&(a.K.push({m:c,a:b,t:e}),a.ja||setTimeout(a.delayReady,a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.p("_d")?b=1:a.xa();0<a.K.length;){d=a.K.shift();if(b&&!d.t&&d.t>c){a.K.unshift(d);
setTimeout(a.delayReady,parseInt(a.maxDelay/2));break}a.Ea=1;a[d.m].apply(a,d.a);a.Ea=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.ia("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,k="";e=f="";if(a.lightProfileID)d=a.O,(k=a.lightTrackVars)&&(k=","+k+","+a.na.join(",")+",");else{d=a.g;if(a.pe||
a.linkType)k=a.linkTrackVars,f=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(k=a[e].Mb,f=a[e].Lb));k&&(k=","+k+","+a.G.join(",")+",");f&&k&&(k+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!k||0<=k.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.r=function(c,b,d,f,e){var g="",k,m,h,t,l=0;"contextData"==c&&(c="c");if(b){for(k in b)if(!(Object.prototype[k]||e&&k.substring(0,e.length)!=e)&&b[k]&&(!d||0<=d.indexOf(","+(f?f+
".":"")+k+","))){h=!1;if(l)for(m=0;m<l.length;m++)k.substring(0,l[m].length)==l[m]&&(h=!0);if(!h&&(""==g&&(g+="&"+c+"."),m=b[k],e&&(k=k.substring(e.length)),0<k.length))if(h=k.indexOf("."),0<h)m=k.substring(0,h),h=(e?e:"")+m+".",l||(l=[]),l.push(h),g+=a.r(m,b,d,f,h);else if("boolean"==typeof m&&(m=m?"true":"false"),m){if("retrieveLightData"==f&&0>e.indexOf(".contextData."))switch(h=k.substring(0,4),t=k.substring(4),k){case "transactionID":k="xact";break;case "channel":k="ch";break;case "campaign":k=
"v0";break;default:a.La(t)&&("prop"==h?k="c"+t:"eVar"==h?k="v"+t:"list"==h?k="l"+t:"hier"==h&&(k="h"+t,m=m.substring(0,255)))}g+="&"+a.escape(k)+"="+a.escape(m)}}""!=g&&(g+="&."+c)}return g};a.usePostbacks=0;a.yb=function(){var c="",b,d,f,e,g,k,m,h,l="",p="",q=e="";if(a.lightProfileID)b=a.O,(l=a.lightTrackVars)&&(l=","+l+","+a.na.join(",")+",");else{b=a.g;if(a.pe||a.linkType)l=a.linkTrackVars,p=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(l=a[e].Mb,p=a[e].Lb));
l&&(l=","+l+","+a.G.join(",")+",");p&&(p=","+p+",",l&&(l+=",events,"));a.events2&&(q+=(""!=q?",":"")+a.events2)}if(a.visitor&&a.visitor.getCustomerIDs){e=n;if(g=a.visitor.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],"object"==typeof f&&(e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState)));e&&(c+=a.r("cid",e))}a.AudienceManagement&&a.AudienceManagement.isReady()&&(c+=a.r("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,
4);k=e.substring(4);!g&&"events"==e&&q&&(g=q,q="");if(g&&(!l||0<=l.indexOf(","+e+","))){switch(e){case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e="D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),
g=g.substring(0,255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e=
"cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":q&&(g+=(""!=g?",":"")+q);if(p)for(k=
g.split(","),g="",f=0;f<k.length;f++)m=k[f],h=m.indexOf("="),0<=h&&(m=m.substring(0,h)),h=m.indexOf(":"),0<=h&&(m=m.substring(0,h)),0<=p.indexOf(","+m+",")&&(g+=(g?",":"")+k[f]);break;case "events2":g="";break;case "contextData":c+=a.r("c",a[e],l,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;case "deleteLightProfiles":e=
"mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.r("mts",a[e],l,e));g="";break;default:a.La(k)&&("prop"==f?e="c"+k:"eVar"==f?e="v"+k:"list"==f?e="l"+k:"hier"==f&&(e="h"+k,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&(c+=a.e)}return c};a.D=function(a){var b=a.tagName;if("undefined"!=""+a.Rb||"undefined"!=""+a.Hb&&"HTML"!=(""+a.Hb).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||
"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.Ha=function(a){var b=h.location,d=a.href?a.href:"",f,e,g;f=d.indexOf(":");e=d.indexOf("?");g=d.indexOf("/");d&&(0>f||0<=e&&f>e||0<=g&&f>g)&&(e=a.protocol&&1<a.protocol.length?a.protocol:b.protocol?b.protocol:"",f=b.pathname.lastIndexOf("/"),d=(e?e+"//":"")+(a.host?a.host:b.host?b.host:"")+("/"!=d.substring(0,1)?b.pathname.substring(0,0>f?0:f)+"/":"")+d);return d};a.L=function(c){var b=a.D(c),d,f,e="",
g=0;return b&&(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):"IMAGE"==b&&c.src&&(e=c.src):e=a.Ha(c),e)?{id:e.substring(0,100),type:g}:0};a.Pb=function(c){for(var b=a.D(c),d=a.L(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=
a.D(c),d=a.L(c);d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.Gb=function(){var c,b,d=a.linkObject,f=a.linkType,e=a.linkURL,g,k;a.oa=1;d||(a.oa=0,d=a.clickObject);if(d){c=a.D(d);for(b=a.L(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.D(d),b=a.L(d);b&&"BODY"!=c||(d=0);if(d&&!a.linkObject){var m=d.onclick?""+d.onclick:"";if(0<=m.indexOf(".tl(")||0<=m.indexOf(".trackLink("))d=0}}else a.oa=1;!e&&d&&
(e=a.Ha(d));e&&!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var l=0,p=0,n;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(m=e.toLowerCase(),g=m.indexOf("?"),k=m.indexOf("#"),0<=g?0<=k&&k<g&&(g=k):g=k,0<=g&&(m=m.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),k=0;k<g.length;k++)(n=g[k])&&m.substring(m.length-(n.length+1))=="."+n&&(f="d");if(a.trackExternalLinks&&!f&&(m=e.toLowerCase(),a.Ka(m)&&(a.linkInternalFilters||(a.linkInternalFilters=
h.location.hostname),g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),l=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(k=0;k<g.length;k++)n=g[k],0<=m.indexOf(n)&&(p=1);p?l&&(f="e"):l||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),h.s_objectID&&(b.id=h.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+
(e?"&pidt="+e:"")+"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.zb=function(){var c=a.oa,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats||a.ActivityMap){var b={},d=0,e=a.cookieRead("s_sq"),g=e?e.split("&"):0,k,m,h,e=0;if(g)for(k=0;k<g.length;k++)m=g[k].split("="),f=a.unescape(m[0]).split(","),
m=a.unescape(m[1]),b[m]=f;f=a.account.split(",");k={};for(h in a.contextData)h&&!Object.prototype[h]&&"a.activitymap."==h.substring(0,14)&&(k[h]=a.contextData[h],a.contextData[h]="");a.e=a.r("c",k)+(a.e?a.e:"");if(c||a.e){c&&!a.e&&(e=1);for(m in b)if(!Object.prototype[m])for(h=0;h<f.length;h++)for(e&&(g=b[m].join(","),g==a.account&&(a.e+=("&"!=m.charAt(0)?"&":"")+m,b[m]=[],d=1)),k=0;k<b[m].length;k++)g=b[m][k],g==f[h]&&(e&&(a.e+="&u="+a.escape(g)+("&"!=m.charAt(0)?"&":"")+m+"&u=0"),b[m].splice(k,
1),d=1);c||(d=1);if(d){e="";k=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),k=1);for(m in b)!Object.prototype[m]&&0<k&&0<b[m].length&&(e+=(e?"&":"")+a.escape(b[m].join(","))+"="+a.escape(m),k--);a.cookieWrite("s_sq",e)}}}return c};a.Ab=function(){if(!a.Kb){var c=new Date,b=p.location,d,f,e=f=d="",g="",k="",h="1.2",l=a.cookieWrite("s_cc","true",0)?"Y":"N",n="",q="";if(c.setUTCDate&&(h="1.3",(0).toPrecision&&(h="1.5",c=[],c.forEach))){h="1.6";f=0;d={};try{f=new Iterator(d),f.next&&(h="1.7",
c.reduce&&(h="1.8",h.trim&&(h="1.8.1",Date.parse&&(h="1.8.2",Object.create&&(h="1.8.5")))))}catch(r){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;k=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),n=a.b.Qb(b)?"Y":"N"}catch(s){}try{a.b.addBehavior("#default#clientCaps"),q=a.b.connectionType}catch(u){}a.resolution=
d;a.colorDepth=f;a.javascriptVersion=h;a.javaEnabled=e;a.cookiesEnabled=l;a.browserWidth=g;a.browserHeight=k;a.connectionType=q;a.homepage=n;a.Kb=1}};a.Q={};a.loadModule=function(c,b){var d=a.Q[c];if(!d){d=h["AppMeasurement_Module_"+c]?new h["AppMeasurement_Module_"+c](a):{};a.Q[c]=a[c]=d;d.cb=function(){return d.hb};d.ib=function(b){if(d.hb=b)a[c+"_onLoad"]=b,a.ia(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",{get:d.cb,set:d.ib}):d._olc=1}catch(f){d._olc=
1}}b&&(a[c+"_onLoad"]=b,a.ia(c+"_onLoad",[a,d],1)||b(a,d))};a.p=function(c){var b,d;for(b in a.Q)if(!Object.prototype[b]&&(d=a.Q[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&d[c]()))return 1;return 0};a.Cb=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);if(b){b*=100;f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>b)return 0}return 1};
a.R=function(c,b){var d,f,e,g,k,h;for(d=0;2>d;d++)for(f=0<d?a.Aa:a.g,e=0;e<f.length;e++)if(g=f[e],(k=c[g])||c["!"+g]){if(!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(h in a[g])k[h]||(k[h]=a[g][h]);a[g]=k}};a.Ua=function(c,b){var d,f,e,g;for(d=0;2>d;d++)for(f=0<d?a.Aa:a.g,e=0;e<f.length;e++)g=f[e],c[g]=a[g],b||c[g]||(c["!"+g]=1)};a.ub=function(a){var b,d,f,e,g,k=0,h,l="",n="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(h=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,
"http://"==e.substring(0,7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?k=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")&&(k=",p,ei,"),k&&h)))){if((a=h.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=k.indexOf(","+e.substring(0,d)+",")?l+=(l?"&":"")+e:n+=(n?"&":"")+e;l&&n?h=l+"&"+n:n=""}d=253-(h.length-n.length)-b.length;a=b+(0<d?g.substring(0,d):"")+
"?"+h}return a};a.$a=function(c){var b=a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.ea=!1;a.I=!1;a.kb=function(){a.I=!0;a.j()};a.ca=!1;a.V=!1;a.gb=function(c){a.marketingCloudVisitorID=c;a.V=!0;a.j()};a.fa=!1;a.W=!1;a.lb=function(c){a.visitorOptedOut=c;a.W=!0;
a.j()};a.Z=!1;a.S=!1;a.Wa=function(c){a.analyticsVisitorID=c;a.S=!0;a.j()};a.ba=!1;a.U=!1;a.Ya=function(c){a.audienceManagerLocationHint=c;a.U=!0;a.j()};a.aa=!1;a.T=!1;a.Xa=function(c){a.audienceManagerBlob=c;a.T=!0;a.j()};a.Za=function(c){a.maxDelay||(a.maxDelay=250);return a.p("_d")?(c&&setTimeout(function(){c()},a.maxDelay),!1):!0};a.da=!1;a.H=!1;a.xa=function(){a.H=!0;a.j()};a.isReadyToTrack=function(){var c=!0,b=a.visitor,d,f,e;a.ea||a.I||(a.$a(a.kb)?a.I=!0:a.ea=!0);if(a.ea&&!a.I)return!1;b&&
b.isAllowed()&&(a.ca||a.marketingCloudVisitorID||!b.getMarketingCloudVisitorID||(a.ca=!0,a.marketingCloudVisitorID=b.getMarketingCloudVisitorID([a,a.gb]),a.marketingCloudVisitorID&&(a.V=!0)),a.fa||a.visitorOptedOut||!b.isOptedOut||(a.fa=!0,a.visitorOptedOut=b.isOptedOut([a,a.lb]),a.visitorOptedOut!=n&&(a.W=!0)),a.Z||a.analyticsVisitorID||!b.getAnalyticsVisitorID||(a.Z=!0,a.analyticsVisitorID=b.getAnalyticsVisitorID([a,a.Wa]),a.analyticsVisitorID&&(a.S=!0)),a.ba||a.audienceManagerLocationHint||!b.getAudienceManagerLocationHint||
(a.ba=!0,a.audienceManagerLocationHint=b.getAudienceManagerLocationHint([a,a.Ya]),a.audienceManagerLocationHint&&(a.U=!0)),a.aa||a.audienceManagerBlob||!b.getAudienceManagerBlob||(a.aa=!0,a.audienceManagerBlob=b.getAudienceManagerBlob([a,a.Xa]),a.audienceManagerBlob&&(a.T=!0)),c=a.ca&&!a.V&&!a.marketingCloudVisitorID,b=a.Z&&!a.S&&!a.analyticsVisitorID,d=a.ba&&!a.U&&!a.audienceManagerLocationHint,f=a.aa&&!a.T&&!a.audienceManagerBlob,e=a.fa&&!a.W,c=c||b||d||f||e?!1:!0);a.da||a.H||(a.Za(a.xa)?a.H=!0:
a.da=!0);a.da&&!a.H&&(c=!1);return c};a.o=n;a.u=0;a.callbackWhenReadyToTrack=function(c,b,d){var f;f={};f.pb=c;f.ob=b;f.mb=d;a.o==n&&(a.o=[]);a.o.push(f);0==a.u&&(a.u=setInterval(a.j,100))};a.j=function(){var c;if(a.isReadyToTrack()&&(a.jb(),a.o!=n))for(;0<a.o.length;)c=a.o.shift(),c.ob.apply(c.pb,c.mb)};a.jb=function(){a.u&&(clearInterval(a.u),a.u=0)};a.eb=function(c){var b,d,f=n,e=n;if(!a.isReadyToTrack()){b=[];if(c!=n)for(d in f={},c)f[d]=c[d];e={};a.Ua(e,!0);b.push(f);b.push(e);a.callbackWhenReadyToTrack(a,
a.track,b);return!0}return!1};a.wb=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.t=a.track=function(c,b){var d,f=new Date,e="s"+Math.floor(f.getTime()/108E5)%10+Math.floor(1E13*Math.random()),g=f.getYear(),g="t="+a.escape(f.getDate()+"/"+f.getMonth()+
"/"+(1900>g?g+1900:g)+" "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+" "+f.getDay()+" "+f.getTimezoneOffset());a.visitor&&a.visitor.getAuthState&&(a.authState=a.visitor.getAuthState());a.p("_s");a.eb(c)||(b&&a.R(b),c&&(d={},a.Ua(d,0),a.R(c)),a.Cb()&&!a.visitorOptedOut&&(a.analyticsVisitorID||a.marketingCloudVisitorID||(a.fid=a.wb()),a.Gb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||(a.visitor&&!a.supplementalDataID&&a.visitor.getSupplementalDataID&&(a.supplementalDataID=
a.visitor.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)),a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(f.getTime()/1E3)),f=h.location,a.pageURL||(a.pageURL=f.href?f.href:f),a.referrer||a.Va||(a.referrer=p.document.referrer),a.Va=1,a.referrer=a.ub(a.referrer),a.p("_g")),a.zb()&&!a.abort&&(a.Ab(),g+=a.yb(),a.Fb(e,g),a.p("_t"),a.referrer=""))),c&&a.R(d,1));a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=
h.s_objectID=a.pe=a.pev1=a.pev2=a.pev3=a.e=a.lightProfileID=0};a.za=[];a.registerPreTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.za.push([c,b]):a.debugTracking&&a.P("DEBUG: Non function type passed to registerPreTrackCallback")};a.bb=function(c){a.wa(a.za,c)};a.ya=[];a.registerPostTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.ya.push([c,b]):a.debugTracking&&a.P("DEBUG: Non function type passed to registerPostTrackCallback")};
a.ab=function(c){a.wa(a.ya,c)};a.wa=function(c,b){if("object"==typeof c)for(var d=0;d<c.length;d++){var f=c[d][0],e=c[d][1];e.unshift(b);if("function"==typeof f)try{f.apply(null,e)}catch(g){a.debugTracking&&a.P(g.message)}}};a.tl=a.trackLink=function(c,b,d,f,e){a.linkObject=c;a.linkType=b;a.linkName=d;e&&(a.l=c,a.A=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.g.length;c++)if(b=
a.g[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=void 0};a.tagContainerMarker="";a.Fb=function(c,b){var d,f=a.trackingServer;d="";var e=a.dc,g="sc.",h=a.visitorNamespace;f?a.trackingServerSecure&&a.ssl&&(f=a.trackingServerSecure):(h||(h=a.account,f=h.indexOf(","),0<=f&&(h=h.substring(0,
f)),h=h.replace(/[^A-Za-z0-9]/g,"")),d||(d="2o7.net"),e=e?(""+e).toLowerCase():"d1","2o7.net"==d&&("d1"==e?e="112":"d2"==e&&(e="122"),g=""),f=h+"."+e+"."+g+d);d=a.ssl?"https://":"http://";e=a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks;d+=f+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(e?"10":"1")+"/JS-"+a.version+(a.Jb?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")+"/"+c+"?AQB=1&ndh=1&pf=1&"+(e?"callback=s_c_il["+a._in+"].doPostbacks&et=1&":"")+b+"&AQE=1";a.bb(d);
a.sb(d);a.ka()};a.Ta=/{(%?)(.*?)(%?)}/;a.Nb=RegExp(a.Ta.source,"g");a.tb=function(c){if("object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];if("string"==typeof d.c&&"aa."==d.id.substr(0,3))for(var f=d.c.match(a.Nb),e=0;e<f.length;++e){var g=f[e],h=g.match(a.Ta),l="";"%"==h[1]&&"timezone_offset"==h[2]?l=(new Date).getTimezoneOffset():"%"==h[1]&&"timestampz"==h[2]&&(l=a.xb());d.c=d.c.replace(g,a.escape(l))}}};a.xb=function(){var c=new Date,b=new Date(6E4*Math.abs(c.getTimezoneOffset()));
return a.k(4,c.getFullYear())+"-"+a.k(2,c.getMonth()+1)+"-"+a.k(2,c.getDate())+"T"+a.k(2,c.getHours())+":"+a.k(2,c.getMinutes())+":"+a.k(2,c.getSeconds())+(0<c.getTimezoneOffset()?"-":"+")+a.k(2,b.getUTCHours())+":"+a.k(2,b.getUTCMinutes())};a.k=function(a,b){return(Array(a+1).join(0)+b).slice(-a)};a.ta={};a.doPostbacks=function(c){if("object"==typeof c)if(a.tb(c),"object"==typeof a.AudienceManagement&&"function"==typeof a.AudienceManagement.isReady&&a.AudienceManagement.isReady()&&"function"==typeof a.AudienceManagement.passData)a.AudienceManagement.passData(c);
else if("object"==typeof c&&"object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];"object"==typeof d&&"string"==typeof d.c&&"string"==typeof d.id&&"aa."==d.id.substr(0,3)&&(a.ta[d.id]=new Image,a.ta[d.id].alt="",a.ta[d.id].src=d.c)}};a.sb=function(c){a.i||a.Bb();a.i.push(c);a.ma=a.C();a.Ra()};a.Bb=function(){a.i=a.Db();a.i||(a.i=[])};a.Db=function(){var c,b;if(a.ra()){try{(b=h.localStorage.getItem(a.pa()))&&(c=h.JSON.parse(b))}catch(d){}return c}};a.ra=function(){var c=!0;a.trackOffline&&
a.offlineFilename&&h.localStorage&&h.JSON||(c=!1);return c};a.Ia=function(){var c=0;a.i&&(c=a.i.length);a.q&&c++;return c};a.ka=function(){if(a.q&&(a.B&&a.B.complete&&a.B.F&&a.B.va(),a.q))return;a.Ja=n;if(a.qa)a.ma>a.N&&a.Pa(a.i),a.ua(500);else{var c=a.nb();if(0<c)a.ua(c);else if(c=a.Fa())a.q=1,a.Eb(c),a.Ib(c)}};a.ua=function(c){a.Ja||(c||(c=0),a.Ja=setTimeout(a.ka,c))};a.nb=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.C()-a.Oa;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-
c};a.Fa=function(){if(0<a.i.length)return a.i.shift()};a.Eb=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+="\n\t"+a.unescape(c[d]);a.P(b)}};a.fb=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.Y=!1;var q;try{q=JSON.parse('{"x":"y"}')}catch(u){q=null}q&&"y"==q.x?(a.Y=!0,a.X=function(a){return JSON.parse(a)}):h.$&&h.$.parseJSON?(a.X=function(a){return h.$.parseJSON(a)},a.Y=!0):a.X=function(){return null};a.Ib=function(c){var b,
d,f;a.fb()&&2047<c.length&&("undefined"!=typeof XMLHttpRequest&&(b=new XMLHttpRequest,"withCredentials"in b?d=1:b=0),b||"undefined"==typeof XDomainRequest||(b=new XDomainRequest,d=2),b&&(a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks)&&(a.Y?b.Ba=!0:b=0));!b&&a.Sa&&(c=c.substring(0,2047));!b&&a.d.createElement&&(0!=a.usePostbacks||a.AudienceManagement&&a.AudienceManagement.isReady())&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?
f[0]:a.d.body)?(b.type="text/javascript",b.setAttribute("async","async"),d=3):b=0);b||(b=new Image,b.alt="",b.abort||"undefined"===typeof h.InstallTrigger||(b.abort=function(){b.src=n}));b.Da=function(){try{b.F&&(clearTimeout(b.F),b.F=0)}catch(a){}};b.onload=b.va=function(){a.ab(c);b.Da();a.rb();a.ga();a.q=0;a.ka();if(b.Ba){b.Ba=!1;try{a.doPostbacks(a.X(b.responseText))}catch(d){}}};b.onabort=b.onerror=b.Ga=function(){b.Da();(a.trackOffline||a.qa)&&a.q&&a.i.unshift(a.qb);a.q=0;a.ma>a.N&&a.Pa(a.i);
a.ga();a.ua(500)};b.onreadystatechange=function(){4==b.readyState&&(200==b.status?b.va():b.Ga())};a.Oa=a.C();if(1==d||2==d){var e=c.indexOf("?");f=c.substring(0,e);e=c.substring(e+1);e=e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");1==d?(b.open("POST",f,!0),b.send(e)):2==d&&(b.open("POST",f),b.send(e))}else if(b.src=c,3==d){if(a.Ma)try{f.removeChild(a.Ma)}catch(g){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Ma=a.B}b.F=setTimeout(function(){b.F&&(b.complete?b.va():(a.trackOffline&&
b.abort&&b.abort(),b.Ga()))},5E3);a.qb=c;a.B=h["s_i_"+a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.J||a.A)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=250),a.ha=setTimeout(a.ga,a.forcedLinkTrackingTimeout)};a.rb=function(){if(a.ra()&&!(a.Na>a.N))try{h.localStorage.removeItem(a.pa()),a.Na=a.C()}catch(c){}};a.Pa=function(c){if(a.ra()){a.Ra();try{h.localStorage.setItem(a.pa(),h.JSON.stringify(c)),a.N=a.C()}catch(b){}}};a.Ra=function(){if(a.trackOffline){if(!a.offlineLimit||
0>=a.offlineLimit)a.offlineLimit=10;for(;a.i.length>a.offlineLimit;)a.Fa()}};a.forceOffline=function(){a.qa=!0};a.forceOnline=function(){a.qa=!1};a.pa=function(){return a.offlineFilename+"-"+a.visitorNamespace+a.account};a.C=function(){return(new Date).getTime()};a.Ka=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.Jb=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==
d._c&&d.tagContainerName==c){a.R(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],f=d.ml[f],f)!Object.prototype[b]&&("function"!=typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,
cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d){var f;b||(b=a.pageURL?a.pageURL:h.location);d||(d="&");return c&&b&&(b=""+b,f=b.indexOf("?"),0<=f&&(b=d+b.substring(f+1)+d,f=b.indexOf(d+c+"="),0<=f&&(b=b.substring(f+d.length+c.length+1),f=b.indexOf(d),0<=f&&(b=b.substring(0,f)),0<b.length)))?a.unescape(b):""}};a.G="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
a.g=a.G.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.na="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.O=a.na.slice(0);a.Aa="account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement".split(" ");
for(l=0;250>=l;l++)76>l&&(a.g.push("prop"+l),a.O.push("prop"+l)),a.g.push("eVar"+l),a.O.push("eVar"+l),6>l&&a.g.push("hier"+l),4>l&&a.g.push("list"+l);l="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest".split(" ");a.g=a.g.concat(l);a.G=a.G.concat(l);a.ssl=0<=h.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=0;a.offlineFilename=
"AppMeasurement.offline";a.Oa=0;a.ma=0;a.N=0;a.Na=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=h;a.d=h.document;try{if(a.Sa=!1,navigator){var v=navigator.userAgent;if("Microsoft Internet Explorer"==navigator.appName||0<=v.indexOf("MSIE ")||0<=v.indexOf("Trident/")&&0<=v.indexOf("Windows NT 6"))a.Sa=!0}}catch(w){}a.ga=function(){a.ha&&(h.clearTimeout(a.ha),a.ha=n);a.l&&a.J&&a.l.dispatchEvent(a.J);a.A&&("function"==typeof a.A?a.A():a.l&&a.l.href&&(a.d.location=
a.l.href));a.l=a.J=a.A=0};a.Qa=function(){a.b=a.d.body;a.b?(a.v=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.Ca)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.v,!1);else{a.b.removeEventListener("click",a.v,!0);a.Ca=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.M&&a.M==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||a.clickObject.parentNode))a.clickObject=
0;else{var k=a.M=a.clickObject;a.la&&(clearTimeout(a.la),a.la=0);a.la=setTimeout(function(){a.M==k&&(a.M=0)},1E4);f=a.Ia();a.track();if(f<a.Ia()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.Ka(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||h.name&&d==h.name))){try{b=a.d.createEvent("MouseEvents")}catch(l){b=new h.MouseEvent}if(b){try{b.initMouseEvent("click",
c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(n){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.l=c.target,a.J=b)}}}}}catch(p){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.v):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&
h.MouseEvent)&&(a.Ca=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.v,!0)),a.b.addEventListener("click",a.v,!1))):setTimeout(a.Qa,30)};a.Qa();a.loadModule("ActivityMap")}
function s_gi(a){var h,n=window.s_c_il,p,l,r=a.split(","),s,q,u=0;if(n)for(p=0;!u&&p<n.length;){h=n[p];if("s_c"==h._c&&(h.account||h.oun))if(h.account&&h.account==a)u=1;else for(l=h.account?h.account:h.oun,l=h.allAccounts?h.allAccounts:l.split(","),s=0;s<r.length;s++)for(q=0;q<l.length;q++)r[s]==l[q]&&(u=1);p++}u||(h=new AppMeasurement);h.setAccount?h.setAccount(a):h.sa&&h.sa(a);return h}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var a=window,h=a.s_giq,n,p,l;if(h)for(n=0;n<h.length;n++)p=h[n],l=s_gi(p.oun),l.setAccount(p.un),l.setTagContainer(p.tagContainerName);a.s_giq=0}s_pgicq();
