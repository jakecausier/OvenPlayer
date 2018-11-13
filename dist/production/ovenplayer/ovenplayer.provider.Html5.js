/*! For license information please see ovenplayer.provider.Html5.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{119:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getBrowser=function(){if(-1!=(navigator.userAgent.indexOf("Opera")||navigator.userAgent.indexOf("OPR")))return"opera";if(-1!=navigator.userAgent.indexOf("Chrome"))return"chrome";if(-1!=navigator.userAgent.indexOf("Safari"))return"safari";if(-1!=navigator.userAgent.indexOf("Firefox"))return"firefox";if(-1!=navigator.userAgent.indexOf("MSIE")){navigator.userAgent.indexOf("MSIE");return function(){for(var e=3,t=document.createElement("div"),n=t.getElementsByTagName("i");t.innerHTML="\x3c!--[if gt IE "+ ++e+"]><i></i><![endif]--\x3e",n[0];);return e>4?e:void 0}()<9?"oldIE":"modernIE"}return"unknown"}},278:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pickCurrentQualityIndex=t.errorTrigger=t.separateLive=t.extractVideoElement=void 0;var r=n(8),a=function(e){return e&&e.__esModule?e:{default:e}}(n(6));t.extractVideoElement=function(e){return a.default.isElement(e)?e:e.getVideoElement?e.getVideoElement():e.media?e.media:null},t.separateLive=function(e){return!!e.isDynamic&&e.isDynamic()},t.errorTrigger=function(e,t){t.setState(r.STATE_ERROR),t.pause(),t.trigger(r.ERROR,e)},t.pickCurrentQualityIndex=function(e,t,n){var r=Math.max(0,t);if(e)for(var a=0;a<e.length;a++)if(e[a].default&&(r=a),n.getQualityLabel()&&e[a].label===n.getQualityLabel())return a;return r}},279:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(119),a=n(8),o=function(e){return e&&e.__esModule?e:{default:e}}(n(280));t.default=function(e,t){var n={},i=e.getAttribute("data-parent-id"),u="",l=(0,r.getBrowser)();OvenPlayerConsole.log("MediaManager loaded. browserType : "+l);return n.create=function(){return OvenPlayerConsole.log("MediaManager createElement()"),u&&n.destroy(),function(){if(t!==a.PROVIDER_RTMP)(u=document.createElement("video")).setAttribute("disableRemotePlayback",""),u.setAttribute("webkit-playsinline",""),u.setAttribute("playsinline",""),e.appendChild(u);else{var n=void 0,r=void 0,s=void 0,c=void 0,d=void 0,f=void 0,E=void 0,g=void 0,v=void 0;(n=document.createElement("param")).setAttribute("name","movie"),n.setAttribute("value",o.default),(r=document.createElement("param")).setAttribute("name","flashvars"),r.setAttribute("value","playerId="+i),(s=document.createElement("param")).setAttribute("name","allowscriptaccess"),s.setAttribute("value","always"),(c=document.createElement("param")).setAttribute("name","allowfullscreen"),c.setAttribute("value","true"),(d=document.createElement("param")).setAttribute("name","quality"),d.setAttribute("value","height"),(f=document.createElement("param")).setAttribute("name","name"),f.setAttribute("value",i+"-flash"),(E=document.createElement("param")).setAttribute("name","menu"),E.setAttribute("value","false"),(g=document.createElement("param")).setAttribute("name","quality"),g.setAttribute("value","high"),(v=document.createElement("param")).setAttribute("name","bgcolor"),v.setAttribute("value","#000000"),(u=document.createElement("object")).setAttribute("id",i+"-flash"),u.setAttribute("name",i+"-flash"),u.setAttribute("width","100%"),u.setAttribute("height","100%"),"oldIE"!==l?(u.setAttribute("data",o.default),u.setAttribute("type","application/x-shockwave-flash")):(u.setAttribute("classid","clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"),u.appendChild(n)),u.appendChild(v),u.appendChild(g),u.appendChild(c),u.appendChild(s),u.appendChild(r),e.appendChild(u)}return u}()},n.destroy=function(){OvenPlayerConsole.log("MediaManager removeElement()"),e.removeChild(u),u=null},n}},280:function(e,t,n){e.exports=n.p+"OvenPlayerFlash.swf"},281:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(60)),a=u(n(282)),o=n(278),i=n(8);function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n){OvenPlayerConsole.log("CORE loaded. ");var u={};(0,r.default)(u);var l=(0,a.default)(e.extendedElement,u),s=(0,o.extractVideoElement)(e.extendedElement),c=t.getConfig().image||"";s.playbackRate=s.defaultPlaybackRate=t.getDefaultPlaybackRate();var d=function(t){var r=e.sources[e.currentQuality];if(n)n(r,t);else{OvenPlayerConsole.log("source loaded : ",r,"lastPlayPosition : "+t);var a=s.src,o=document.createElement("source");o.src=r.file,o.src!==a?(s.src=e.sources[e.currentQuality].file,a&&s.load()):0===t&&s.currentTime>0&&u.seek(t),t>0&&(u.seek(t),u.play()),u.trigger(i.CONTENT_LEVELS,{currentQuality:e.currentQuality}),c&&(s.poster=c)}};return u.getName=function(){return e.name},u.canSeek=function(){return e.canSeek},u.setCanSeek=function(t){e.canSeek=t},u.isSeeking=function(){return e.seeking},u.setSeeking=function(t){e.seeking=t},u.setState=function(t){if(e.state!==t){var n=e.state;switch(t){case i.STATE_COMPLETE:u.trigger(i.PLAYER_COMPLETE);break;case i.STATE_PAUSED:u.trigger(i.PLAYER_PAUSE,{prevState:e.state});break;case i.STATE_PLAYING:u.trigger(i.PLAYER_PLAY,{prevState:e.state})}e.state=t,u.trigger(i.PLAYER_STATE,{prevstate:n,newstate:e.state})}},u.getState=function(){return e.state},u.setBuffer=function(t){e.buffer=t},u.getBuffer=function(){return e.buffer},u.getDuration=function(){return s.duration===1/0||(0,o.separateLive)(e.extendedElement)?1/0:s.duration},u.getPosition=function(){return s?s.currentTime:0},u.setVolume=function(e){if(!s)return!1;s.volume=e/100},u.getVolume=function(){return s?100*s.volume:0},u.setMute=function(e){return!!s&&(void 0===e?(s.muted=!s.muted,u.trigger(i.CONTENT_MUTE,{mute:s.muted})):(s.muted=e,u.trigger(i.CONTENT_MUTE,{mute:s.muted})),s.muted)},u.getMute=function(){return!!s&&s.muted},u.preload=function(n,r){return e.sources=n,e.currentQuality=(0,o.pickCurrentQualityIndex)(n,e.currentQuality,t),d(r||0),new Promise(function(e,t){e()})},u.load=function(n){e.sources=n,e.currentQuality=(0,o.pickCurrentQualityIndex)(n,e.currentQuality,t),d(e.sources.starttime||0)},u.play=function(){if(!s)return!1;if(u.getState()!==i.STATE_PLAYING){var e=s.play();void 0!==e&&e.then(function(e){}).catch(function(e){setTimeout(function(){u.play()},1e3)})}},u.pause=function(){if(!s)return!1;u.getState()===i.STATE_PLAYING&&s.pause()},u.seek=function(e){if(!s)return!1;s.currentTime=e},u.setPlaybackRate=function(e){return!!s&&(u.trigger(i.PLAYBACK_RATE_CHANGED,{playbackRate:e}),s.playbackRate=s.defaultPlaybackRate=e)},u.getPlaybackRate=function(){return s?s.playbackRate:0},u.getQualityLevels=function(){return s?e.sources.map(function(e,t){return{file:e.file,type:e.type,label:e.label,index:t,metaQuality:e.metaQuality}}):[]},u.getCurrentQuality=function(){if(!s)return null;var t=e.sources[e.currentQuality];return{file:t.file,type:t.type,label:t.label,index:e.currentQuality}},u.setCurrentQuality=function(n,r){return e.currentQuality!==n&&(n>-1&&e.sources&&e.sources.length>n?(u.setState(i.STATE_IDLE),OvenPlayerConsole.log("source changed : "+n),e.currentQuality=n,u.trigger(i.CONTENT_LEVEL_CHANGED,{currentQuality:n}),t.setQualityLabel(e.sources[n].label),r&&d(s.currentTime||0),e.currentQuality):void 0)},u.stop=function(){if(!s)return!1;for(OvenPlayerConsole.log("CORE : stop() "),s.removeAttribute("preload"),s.removeAttribute("src");s.firstChild;)s.removeChild(s.firstChild);u.pause(),u.setState(i.STATE_IDLE)},u.destroy=function(){if(!s)return!1;u.stop(),l.destroy(),u.off(),OvenPlayerConsole.log("CORE : destroy() player stop, listener, event destroied")},u.super=function(e){var t=u[e];return function(){return t.apply(u,arguments)}},u}},282:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),a=n(278);t.default=function(e,t){var n={};OvenPlayerConsole.log("EventListener loaded.",e,t);var o={},i=(0,a.extractVideoElement)(e);return n.canplay=function(){t.setCanSeek(!0),t.trigger(r.CONTENT_BUFFER_FULL),OvenPlayerConsole.log("EventListener : on canplay")},n.durationchange=function(){n.progress(),OvenPlayerConsole.log("EventListener : on durationchange")},n.ended=function(){OvenPlayerConsole.log("EventListener : on ended"),t.getState()!=r.STATE_IDLE&&t.getState()!=r.STATE_COMPLETE&&(t.trigger(r.CONTENT_COMPLETE),t.setState(r.STATE_COMPLETE))},n.loadeddata=function(){OvenPlayerConsole.log("EventListener : on loadeddata")},n.loadedmetadata=function(){var n=i.duration===1/0||(0,a.separateLive)(e),o=t.getCurrentQuality()?t.getCurrentQuality().type:"",u={duration:n?1/0:i.duration,type:o};OvenPlayerConsole.log("EventListener : on loadedmetadata",u),t.trigger(r.CONTENT_META,u)},n.pause=function(){return t.getState()!==r.STATE_COMPLETE&&t.getState()!==r.STATE_ERROR&&!i.ended&&!i.error&&i.currentTime!==i.duration&&(OvenPlayerConsole.log("EventListener : on pause"),void t.setState(r.STATE_PAUSED))},n.play=function(){i.paused||t.getState()===r.STATE_PLAYING||(OvenPlayerConsole.log("EventListener : on play"),t.setState(r.STATE_LOADING))},n.playing=function(){OvenPlayerConsole.log("EventListener : on playing"),t.setState(r.STATE_PLAYING)},n.progress=function(){var e=i.buffered;if(!e)return!1;var n=i.duration,a=i.currentTime,o=function(e,t,n){return Math.max(Math.min(e,n),t)}((e.length>0?e.end(e.length-1):0)/n,0,1);OvenPlayerConsole.log("EventListener : on progress",100*o),t.setBuffer(100*o),t.trigger(r.CONTENT_BUFFER,{bufferPercent:100*o,position:a,duration:n})},n.stalled=function(){OvenPlayerConsole.log("EventListener : on stall")},n.timeupdate=function(){var e=i.currentTime,n=i.duration;isNaN(n)||(t.isSeeking()||i.paused||t.setState(r.STATE_PLAYING),(t.getState()===r.STATE_PLAYING||t.isSeeking())&&t.trigger(r.CONTENT_TIME,{position:e,duration:n}))},n.resize=function(){OvenPlayerConsole.log("EventListener : on resize")},n.seeking=function(){t.setSeeking(!0),OvenPlayerConsole.log("EventListener : on seeking",i.currentTime),t.trigger(r.CONTENT_SEEK,{position:i.currentTime})},n.seeked=function(){t.isSeeking()&&(OvenPlayerConsole.log("EventListener : on seeked"),t.setSeeking(!1),t.trigger(r.CONTENT_SEEKED))},n.waiting=function(){OvenPlayerConsole.log("EventListener : on waiting",t.getState()),t.isSeeking()?t.setState(r.STATE_LOADING):t.getState()==r.STATE_PLAYING&&t.setState(r.STATE_STALLED)},n.volumechange=function(){OvenPlayerConsole.log("EventListener : on volumechange",Math.round(100*i.volume)),t.trigger(r.CONTENT_VOLUME,{volume:Math.round(100*i.volume),mute:i.muted})},n.error=function(){var e=i.error&&i.error.code||0,n={0:{code:r.PLAYER_UNKNWON_ERROR,reason:"Unknown html5 video error",message:"Unknown html5 video error"},1:{code:r.PLAYER_UNKNWON_OPERATION_ERROR,reason:"Unknown operation aborted",message:"Unknown operation aborted"},2:{code:r.PLAYER_UNKNWON_NEWWORK_ERROR,reason:"Unknown network error",message:"Unknown network error"},3:{code:r.PLAYER_UNKNWON_DECODE_ERROR,reason:"Unknown decode error",message:"Unknown decode error"},4:{code:r.PLAYER_FILE_ERROR,reason:"File could not be played",message:"File could not be played"}}[e]||0;n.error=i.error,OvenPlayerConsole.log("EventListener : on error",n),function(e){t.setState(r.STATE_ERROR),t.pause(),t.trigger(r.ERROR,e)}(n)},Object.keys(n).forEach(function(e){i.removeEventListener(e,n[e]),i.addEventListener(e,n[e])}),o.destroy=function(){OvenPlayerConsole.log("EventListener : destroy()"),Object.keys(n).forEach(function(e){i.removeEventListener(e,n[e])})},o}},62:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(279)),a=i(n(281)),o=(n(278),n(8));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){var n=(0,r.default)(e,o.PROVIDER_HTML5),i=n.create(),u={name:o.PROVIDER_HTML5,extendedElement:i,listener:null,canSeek:!1,isLive:!1,seeking:!1,state:o.STATE_IDLE,buffer:0,currentQuality:-1,sources:[]},l=(0,a.default)(u,t,null),s=l.super("destroy");return OvenPlayerConsole.log("HTML5 PROVIDER LOADED."),l.destroy=function(){n.destroy(),n=null,i=null,OvenPlayerConsole.log("HTML5 : PROVIDER DESTROYED."),s()},l}}}]);
//# sourceMappingURL=ovenplayer.provider.Html5.js.map