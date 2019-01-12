// ==UserScript==
// @name          Facebook Default Volume
// @version       0.1
// @description   Automatically set the default video volume to 0.25
// @license       MIT
// @author        Loky (StellarisStudio)
// @icon          https://cloud.addictivetips.com/wp-content/uploads/2017/02/fb-video-sound-off.gif
// @namespace     https://github.com/StellarisStudio
// @supportURL    https://github.com/StellarisStudio/Tampermonkey-Scripts
// @homepageURL   https://github.com/StellarisStudio/Tampermonkey-Scripts
// @match         *://www.facebook.com/*
// @grant         none
// ==/UserScript==

(function() {
    'use strict';

    var VolumeIDList = [];
    var VolumeDefault = 0.10;
    setTimeout(SetVolumes, 2000);

    function SetVolumes() {
        var VideoPlayerList = document.getElementsByTagName("video");
        var Len = VideoPlayerList.length;
        var def_this_run = 0;
            for(var i=0;i<Len;i++) {
               if( VolumeIDList[VideoPlayerList[i].id] === undefined ) {
                   VolumeIDList[VideoPlayerList[i].id] = true;
                   VideoPlayerList[i].volume = VolumeDefault;
                   def_this_run++;
               }
            }
        var d = new Date();
            console.log(d+" - Defaulted: "+def_this_run);

        setTimeout(SetVolumes, 2000);
    }
})();
