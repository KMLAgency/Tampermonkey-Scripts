// ==UserScript==
// @name         Spotify Uri links
// @version      0.3
// @description  Script to redirect open.spotify.com (artist,album,track,playlist) links to the desktop app!
// @license      MIT
// @author       Loky (StellarisStudio)
// @icon         https://image.flaticon.com/icons/svg/82/82186.svg
// @namespace    https://github.com/StellarisStudio
// @supportURL   https://github.com/StellarisStudio/Tampermonkey-Scripts
// @homepageURL  https://github.com/StellarisStudio/Tampermonkey-Scripts
// @match        *://*/*
// @match        *://open.spotify.com/
// ==/UserScript==

(function() {
    'use strict';

    var links = document.getElementsByTagName("a"); //array
    var regex = /^(https?:\/\/)(open\.spotify\.com\/)(track|playlist|album|artist)\/(.+)$/i;
       for (var i=0,imax=links.length; i<imax; i++) {
           links[i].href = links[i].href.replace(regex,"spotify:$3:$4");
       }
    var plinks = document.getElementsByTagName("a"); //array
    var pregex = /^(https?:\/\/)(open\.spotify\.com)\/(.+)\/(.+)\/playlist\/(.+)$/i;
       for (var e=0,emax=plinks.length; e<emax; e++) {
           plinks[e].href = plinks[e].href.replace(pregex,"spotify:$3:$4:playlist:$5");
       }
})();
