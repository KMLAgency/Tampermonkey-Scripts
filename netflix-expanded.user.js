// ==UserScript==
// @name          Netflix Expanded
// @version       0.6.4
// @description   More visible content, Remove the billboard promotions, Stretch video (remove black side), Centered player controls, Better Subtitles!
// @license       MIT
// @author        Loky (StellarisStudio)
// @icon          http://www.mulierchile.com/data/10/honeycomb-icon/honeycomb-icon-25.jpg
// @namespace     https://github.com/StellarisStudio
// @supportURL    https://github.com/StellarisStudio/Tampermonkey-Scripts
// @homepageURL   https://github.com/StellarisStudio/Tampermonkey-Scripts
// @include       https://www.netflix.com/*
// @run-at        document-start
// ==/UserScript==
(function() {var css = [
	".rowContainer .rowContent .slider .row-with-x-columns .slider-item { width: 13% !important; }",
	".title-artwork, .video-artwork { background-repeat: no-repeat; background-position: 50% 50%;",
	"   -moz-background-size: 100% 100%; background-size: 100% 100%;",
	"   width: 100%; padding: 28.125% 0; border-radius: 5px !important; }",
	".lolomoRow.lolomoRow_title_card { margin: 1vw 0 !important; }",
    ".lolomo.is-fullbleed { margin-left: -3vw; }",
    ".slider .handle.handlePrev { left: 3vw; }",
    ".indicator-icon, .slider-hover-trigger-layer:hover .slider .handle.active:hover .indicator-icon { color: #e50914; }",
	".episodeWrapper .loadingTitle, .episodeWrapper .row-with-x-columns .slider-item,",
	".placeholderEpisodes .loadingTitle, .placeholderEpisodes .row-with-x-columns .slider-item,",
	".simsWrapper .loadingTitle, .simsWrapper .row-with-x-columns .slider-item,",
	".trailerWrapper .loadingTitle, .trailerWrapper .row-with-x-columns .slider-item { width: 17% !important; }",
	".sliderItemHidden { display: block !important; }",
    ".boxart-container { border-radius: 5px; }",
    "",
    ".billboard-row { display: none !important; }",
    ".pinning-header { height: 70px; margin-bottom: 40px !important; }",
    "",
    "video { object-fit: fill; }",
    ".player-timedtext-text-container { bottom: 11%; margin: auto; width: 65%; }",
    ".player-timedtext-text-container span { font-family: Arial,Helvetica,sans-serif,sans!important;",
 	"   font-size: 1.03em; font-weight: bold; color: #fff; opacity: 0.7 !important; letter-spacing: 1px;",
    "   -webkit-text-stroke: 1px black;",
 	"	text-shadow: 2.5px 2.5px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; }",
	"",
    ".PlayerControlsNeo__gradient-bottom { background-image: none; }",
    ".PlayerControlsNeo__bottom-controls {background-color: rgba(0,0,0,0.3); width: 70%; bottom: -1em; margin: 0 auto; border-radius: 10px;}",
    ".time-remaining__time { color: #e50914; font-weight:bold;}",
    ".PlayerControlsNeo__button-control-row { width: 85%; margin: auto; }",
    ".PlayerControlsNeo__bottom-controls .nfp-button-control { width: 1em; }",
    ".button-nfplayerBackTen { margin-left: 1em;}",
    ".svg-icon.svg-icon-nfplayerBackTen, .svg-icon.svg-icon-nfplayerFastForward { width: .9em!important; }",
    ".svg-icon.svg-icon-nfplayerReportAProblem { width: .7em!important; opacity: .5;}",
    ".button-nfplayerNextEpisode, .button-nfplayerEpisodes, .button-nfplayerSubtitles, .button-nfplayerFullscreen { margin: 0 .5em; }",
    ".svg-icon-volumeMuted { fill: #e50914!important; stroke: #e50914!important;}",
    ".PlayerControls--control-element.video-title h4{ display: block!important; }",
    ".PlayerControls--control-element.video-title span{ color: #e50914; opacity: .7; }",
    "",
    "body::-webkit-scrollbar { width: .5em; }",
    "body::-webkit-scrollbar-track { -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); }",
    "body::-webkit-scrollbar-thumb { background-color: #e50914; outline: 1px solid slategrey; }"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
