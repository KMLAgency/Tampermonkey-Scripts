// ==UserScript==
// @name         Google View Image
// @version      1.5
// @description  Brings back the view image button that google removed!
// @license      MIT
// @icon         https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png
// @namespace    https://github.com/StellarisStudio
// @supportURL   https://github.com/StellarisStudio/Tampermonkey-Scripts
// @author       Loky (StellarisStudio)
// @homepageURL  https://github.com/StellarisStudio/Tampermonkey-Scripts
// @include      /https://www\.?google\..+?/search/
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @grant        none
// ==/UserScript==

var xurl, progressBar, xIMG, xPlaceholder, xCurrentClass, xPos;

$(window).on("load", function() {
	setTimeout(function() { Checker(); }, 1000);

	$(window).click(function(e) {
		if ( $(e.target).prop("tagName") == 'IMG' ) {
      $("#viewIMG").remove();
      setTimeout(function() {
    		Checker();
      }, 500);
  	}
	});
});


function Checker() { setTimeout(function() {
  $("#viewIMG").remove();
	$( '#irc-ss>div' ).each(function (index, obj) {
 	 if ( $( obj ).css('display') != 'none' ) {
		progressBar = $( obj ).find('.jfk-progressBar-blocking');
			if ( $(progressBar).css('display') != 'none' )
      {
  			Checker();
    		return true;
			} else {
  			theWork(obj);
			}
   }
	});
}, 300); }

function theWork(obj) {

			xIMG = $(obj).find('img');
      xurl = $(xIMG).attr("src");

      xPlaceholder = $('.hZC4Sd > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)');
  		xCurrentClass = $('.hZC4Sd > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(2)').attr('class');

			if (!$("#viewIMG").length) {
  			$(xPlaceholder).append('<a class="'+xCurrentClass+'" id="viewIMG" href="'+xurl+'" title="Open image in new tab" target="_blank" ><span>View image</span></a>');
			}

      if ( $(xurl).attr("href").startsWith('data:image/') )
       {
        $("#viewIMG").attr("href") = $("#viewIMG").parent().parent().parent().parent().parent().find('.i30052').find('img').attr('src');
       }

}

$( '<style>' ).text(' \
#viewIMG {position:relative; z-index:1; top:0; text-decoration:none !important;} \
#viewIMG > span {padding-left:3px;} \
#viewIMG:hover {filter:brightness(1.3);} \
div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3), .hZC4Sd > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1) {margin-right:-0px;} \
.hZC4Sd > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1) {pointer-events:none !important;} \
.hZC4Sd > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1) > div:nth-child(1) {pointer-events:all !important;} \
' ).appendTo( document.head );
