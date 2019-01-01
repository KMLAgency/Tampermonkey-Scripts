// ==UserScript==
// @name         Google View Image
// @version      1.3
// @description  Brings back the view image button that google removed!
// @license      MIT
// @icon         https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png
// @namespace    https://github.com/StellarisStudio
// @supportURL   https://github.com/StellarisStudio/Tampermonkey-Scripts
// @author       Loky (StellarisStudio)
// @homepageURL  https://github.com/StellarisStudio/Tampermonkey-Scripts
// @include      /https://www\.?google\..+?/search/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (isGoogleImgs()) {
        makeObserver();
    }


    //adds view image buttons to all immersive containers (usually 3 of them)
    function addButtons() {
        var containers = document.getElementsByClassName('immersive-container');

        for (let c = 0; c < containers.length; c++) { //put a button in each immersive container
            var container = containers[c];
            var table = container.getElementsByClassName('irc_but_r')[0];
            var row = table.getElementsByTagName('tr')[0];

            var oldLinks = table.getElementsByClassName('viewImg');
            for (let l = 0; l < oldLinks.length; l++) { //get rid of the old view image button
                oldLinks[l].remove();
            }

            var newBtn = document.createElement('td');
            newBtn.setAttribute('class', 'viewImg');
            var btnLink = document.createElement('a');
            btnLink.href = container.getElementsByClassName('irc_mi')[0].src;
            newBtn.appendChild(btnLink);
            var text = document.createElement('span');
            text.innerText = "View image";
            btnLink.appendChild(text);

            row.childNodes[0].after(newBtn);
        }
    }


    //creates a mutation observer that adds view image buttons every time an image is clicked
    function makeObserver() {
        var observer = new MutationObserver(function(mutation){
            observer.disconnect();
            addButtons();
            reconnect(this);
        });
        reconnect(observer);

        function reconnect(observer) {
            var config = {
            'childList': true,
            'subtree': true
            };
            observer.observe(document, config);
        }
    }

    //checks if we're on google images
    function isGoogleImgs() {
        return document.getElementsByClassName('rg_ic').length !== 0;
    }
})();
