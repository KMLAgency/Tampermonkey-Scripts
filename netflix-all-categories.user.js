// ==UserScript==
// @name          Netflix All Categories
// @version       0.5
// @description   Add a new menu entry with all the not empty catecories!
// @license       MIT
// @author        Loky (StellarisStudio)
// @icon          https://ya-webdesign.com/images/netflix-png-icon-5.png
// @namespace     https://github.com/StellarisStudio
// @supportURL    https://github.com/StellarisStudio/Tampermonkey-Scripts
// @homepageURL   https://github.com/StellarisStudio/Tampermonkey-Scripts
// @match         https://www.netflix.com/*
// @grant         GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle ( `
        .catsLinkcolor:hover { color:#e50914; }
        #newCatsContainer { position:absolute; top:3em; width:100vw; min-height:50%; background-color:rgba(20,20,20,0.95); color:white; z-index:9999; padding:0 0 20px 0; box-sizing:border-box; }
        .closeCats { text-transform:uppercase; width:80%!important; margin:auto; padding:2px 5px; box-sizing:border-box; border-bottom:1px solid white; display:block; text-align:center; font-size:1em; font-weight:bold; }
        .titleCats { color:#e50914; margin:5px 0 0; }
        .ulCats { width:93%; margin:auto; }
        .liCats { display:inline; list-style-type:none; padding:3px 5px; font-size:.9em; }
    ` );

    window.setTimeout(function() {

        var menuItemsTV = [
            {id: 10673, name: "Action & Adventure"},
            {id: 52117, name: "British TV Shows"},
            {id: 46553, name: "Classic TV Shows"},
            {id: 10375, name: "Comedies"},
            {id: 26146, name: "Crime TV Shows"},
            {id: 10105, name: "Docuseries"},
            {id: 11714, name: "Dramas"},
            {id: 72436, name: "Food & Travel"},
            {id: 83059, name: "Horror"},
            {id: 67879, name: "Korean TV Shows"},
            {id: 65263, name: "LGBTQ TV Shows"},
            {id: 4814, name: "Miniseries"},
            {id: 25804, name: "Military TV Shows"},
            {id: 4366, name: "Mysteries"},
            {id: 9833, name: "RealityTV"},
            {id: 52780, name: "Science & Nature"},
            {id: 1372, name: "Sci-Fi & Fantasy"},
            {id: 60951, name: "Teen TV Shows"}
        ];

        var menuItemsAA = [
            {id: 1365, name: "Action & Adventure"},
            {id: 43040, name: "Action Comedies"},
            {id: 43048, name: "Action Thrillers"},
            {id: 7442, name: "Adventures"},
            {id: 77232, name: "Asian Action Movies"},
            {id: 46576, name: "Classic Action & Adventure"},
            {id: 10118, name: "Comic Book & Superhero"},
            {id: 52858, name: "Epics"},
            {id: 11804, name: "Independent Action & Adventure"},
            {id: 8985, name: "Martial Arts Movies"},
            {id: 2125, name: "Military Action & Adventure"}
        ];

        var menuItemsSF = [
            {id: 1568, name: "Action Sci-Fi & Fantasy"},
            {id: 3327, name: "Alien Sci-Fi"},
            {id: 9744, name: "Fantasy Movies"},
            {id: 6926, name: "Sci-Fi Adventure"},
            {id: 1694, name: "Sci-Fi Horror Movies"},
            {id: 11014, name: "Sci-Fi Thrillers"}
        ];

        var menuItemsTH = [
            {id: 8933, name: "Thrillers"},
            {id: 46588, name: "Classic Thrillers"},
            {id: 10499, name: "Crime Thrillers"},
            {id: 31851, name: "Gangster Movies"},
            {id: 3269, name: "Independent Thrillers"},
            {id: 9994, name: "Mysteries"},
            {id: 10504, name: "Political Thrillers"},
            {id: 5505, name: "Psychological Thrillers"},
            {id: 972, name: "Steamy Thrillers"},
            {id: 11140, name: "Supernatural Thrillers"}
        ];

        var menuItemsCO = [
            {id: 6548, name: "Comedies"},
            {id: 1252, name: "Campy Movies"},
            {id: 31694, name: "Classical Comedies"},
            {id: 869, name: "Dark Comedies"},
            {id: 89585, name: "Horror Comedy"},
            {id: 4195, name: "Independent comedies"},
            {id: 7120, name: "LGBTQ Comedies"},
            {id: 26, name: "Mockumentaries"},
            {id: 2700, name: "Political Comedies"},
            {id: 5475, name: "Romantic Comedies"},
            {id: 4922, name: "Satires"},
            {id: 10256, name: "Slapstick Comedies"},
            {id: 5286, name: "Sports Comedies"},
            {id: 11559, name: "Stand-up Comedy"},
            {id: 3519, name: "Teen Comedies"}
        ];

        var menuItemsHO = [
            {id: 8711, name: "Horror Movies"},
            {id: 8195, name: "B-Horror Movies"},
            {id: 6895, name: "Creature Features"},
            {id: 45028, name: "Deep Sea Horror Movies"},
            {id: 947, name: "Monster Movies"},
            {id: 6998, name: "Satanic Stories"},
            {id: 8646, name: "Slasher & Serial Killer"},
            {id: 42023, name: "Supernatural"},
            {id: 75804, name: "Vampires"},
            {id: 75930, name: "Werewolfs"},
            {id: 75405, name: "Zombies"}
        ];

        var menuItemsDR = [
            {id: 5763, name: "Dramas"},
            {id: 3179, name: "Biographical Dramas"},
            {id: 29809, name: "Classic Dramas"},
            {id: 6889, name: "Crime Dramas"},
            {id: 4961, name: "Dramas based on Books"},
            {id: 3653, name: "Dramas based on real life"},
            {id: 384, name: "Independent Dramas"},
            {id: 500, name: "LGBTQ Dramas"},
            {id: 11, name: "Military Dramas"},
            {id: 12123, name: "Period Pieces"},
            {id: 6616, name: "Political Dramas"},
            {id: 1255, name: "Romantic Dramas"},
            {id: 5012, name: "Showbiz Dramas"},
            {id: 3947, name: "Social Issue Dramas"},
            {id: 7243, name: "Sports Dramas"}
        ];

        var menuItemsAN = [
            {id: 11881, name: "Adult Animation"},
            {id: 7424, name: "Anime"},
            {id: 6721, name: "Anime Series"},
            {id: 3063, name: "Anime Features"},
            {id: 2653, name: "Action"},
            {id: 9302, name: "Comedy"},
            {id: 452, name: "Drama"},
            {id: 11146, name: "Fantasy"},
            {id: 10695, name: "Horror"},
            {id: 2729, name: "Sci-Fi"}
        ];

        var menuItemsKI = [
            {id: 27346, name: "Kids TV"},
            {id: 52843, name: "Kids Music"},
            {id: 5507, name: "Animal Tales"},
            {id: 783, name: "Children & Family Movies"},
            {id: 67673, name: "Disney"},
            {id: 10659, name: "Education"},
            {id: 51056, name: "Family Features"},
            {id: 67673, name: "Disney"},
            {id: 10056, name: "Movies based on Children's Books"},
            {id: 6796, name: "Movies (0 to 2 years)"},
            {id: 6218, name: "Movies (2 to 4 years)"},
            {id: 5455, name: "Movies (5 to 7 years)"},
            {id: 561, name: "Movies (8 to 10 years)"},
            {id: 6962, name: "Movies (11 to 12 years)"}
        ];

        var menuItemsWO = [
            {id: 3761, name: "African"},
            {id: 5230, name: "Australian"},
            {id: 262, name: "Belgian"},
            {id: 10757, name: "British"},
            {id: 3960, name: "Chinese"},
            {id: 10606, name: "Dutch"},
            {id: 5254, name: "Eastern European"},
            {id: 58807, name: "French"},
            {id: 58886, name: "German"},
            {id: 10463, name: "Indian"},
            {id: 58750, name: "Irish"},
            {id: 8221, name: "Italian"},
            {id: 10398, name: "Japanese"},
            {id: 5685, name: "Korean"},
            {id: 1613, name: "Latin American"},
            {id: 5875, name: "Middle Eastern"},
            {id: 63782, name: "New Zealand"},
            {id: 9292, name: "Scandinavian"},
            {id: 9196, name: "Southeast Asian"},
            {id: 58741, name: "Spanish"}
        ];

        var menuItemsDO = [
            {id: 6839, name: "Documentaries"},
            {id: 10105, name: "Docuseries"},
            {id: 3652, name: "Biographical"},
            {id: 9875, name: "Crimes"},
            {id: 5349, name: "Historical"},
            {id: 4720, name: "LGBTQ"},
            {id: 6695, name: "Martial Arts, Boxing & Wrestling"},
            {id: 4006, name: "Military"},
            {id: 90361, name: "Music & Concert"},
            {id: 7018, name: "Political"},
            {id: 1159, name: "Travel & Adventure"},
            {id: 2595, name: "Science & Nature Docs"},
            {id: 52780, name: "Science & Nature TV"},
            {id: 3675, name: "Social & Cultural"},
            {id: 2760, name: "Spiritual"},
            {id: 180, name: "Sports"}
        ];

        var menuItemsMU = [
            {id: 1701, name: "Music"},
            {id: 32392, name: "Classic Musicals"},
            {id: 1105, name: "Country & Western/Folk"},
            {id: 59433, name: "Disney Musicals"},
            {id: 10271, name: "Jazz & Easy Listening"},
            {id: 10741, name: "Latin Music"},
            {id: 13335, name: "Musicals"},
            {id: 3278, name: "Rock & Pop Concerts"},
            {id: 13573, name: "Showbiz Musicals"},
            {id: 9472, name: "Urban & Dance Concerts"},
            {id: 2856, name: "World Music Concerts"}
        ];

        var menuItemsD = [
            {id: 8883, name: "Romantic Movies"},
            {id: 5977, name: "LGBTQ Movies"},
            {id: 31273, name: "Classic Romantic Movies"},
            {id: 36103, name: "Quirky Romance"},
            {id: 502675, name: "Romantic Favorites"},
            {id: 9916, name: "Romantic Independent Movies"},
            {name: "-"},
            {id: 29764, name: "Arthouse films"},
            {id: 11079, name: "Experimental Movies"},
            {id: 7077, name: "Independent films"},
            {id: 52804, name: "Faith & Spiritual Movies"},
            {id: 31574, name: "classic Movies"},
            {id: 48744, name: "Classic War Movies"},
            {id: 47465, name: "Classic Westerns"},
            {name: "-"},
            {id: 12339, name: "Baseball"},
            {id: 12762, name: "Basketball"},
            {id: 12443, name: "Boxing"},
            {id: 12803, name: "Football"},
            {id: 12549, name: "Soccer"}
        ];

        /* create additional menu item into netflix default menu */
        var FlixMenu = document.getElementsByClassName('tabbed-primary-navigation');
        var newNav = document.createElement('li'); //the new menu item
        newNav.classList.add('navigation-tab');//to get netflix default style
        var newNavLink = document.createElement('a'); //the link within menuitem
        newNavLink.classList.add('showFullGenreList');
        newNavLink.setAttribute('href', 'javascript:document.getElementById("newCatsContainer").setAttribute("style", "display:block;");');
        newNav.appendChild(newNavLink);
        newNavLink.appendChild(document.createTextNode("All Categories"));
        FlixMenu[0].appendChild(newNav);

        /* create full genre list as hide/show container */
        var newCatsContainerDiv = document.createElement('div');
        newCatsContainerDiv.setAttribute('id', 'newCatsContainer');
        newCatsContainerDiv.setAttribute('style', 'display: none;');
        document.body.appendChild(newCatsContainerDiv);
        var closeCats = document.createElement('a');
        closeCats.setAttribute('href', 'javascript:document.getElementById("newCatsContainer").setAttribute("style", "display:none;");');
        closeCats.setAttribute('class', 'catsLinkcolor closeCats');
        closeCats.appendChild(document.createTextNode('close'));
        newCatsContainerDiv.appendChild(closeCats);

         /* generate menu TV Shows */
        var menuTV = document.createElement('ul');
        menuTV.setAttribute('class', 'ulCats');
        var titleTV = document.createElement('h4');
        titleTV.setAttribute('class', 'titleCats');
        menuTV.appendChild(titleTV);
        titleTV.appendChild(document.createTextNode("TV Shows"));
        newCatsContainerDiv.appendChild(menuTV);
        for(var i = 0; i < menuItemsTV.length;i++) {
            var li = document.createElement('li');
            li.setAttribute('class', 'liCats');

            menuTV.appendChild(li);
            var a = document.createElement('a');
            a.setAttribute('href', '/browse/genre/' + menuItemsTV[i].id);
            a.setAttribute('class', 'catsLinkcolor');
            li.appendChild(a);
            a.appendChild(document.createTextNode(menuItemsTV[i].name));
        }

        /* generate menu Action & Adventure */
        var menuAA = document.createElement('ul');
        menuAA.setAttribute('class', 'ulCats');
        var titleAA = document.createElement('h4');
        titleAA.setAttribute('class', 'titleCats');
        menuAA.appendChild(titleAA);
        titleAA.appendChild(document.createTextNode("Action & Adventure"));
        newCatsContainerDiv.appendChild(menuAA);
        for(var i = 0; i < menuItemsAA.length;i++) {
            var li = document.createElement('li');
            li.setAttribute('class', 'liCats');

            menuAA.appendChild(li);
            var a = document.createElement('a');
            a.setAttribute('href', '/browse/genre/' + menuItemsAA[i].id);
            a.setAttribute('class', 'catsLinkcolor');
            li.appendChild(a);
            a.appendChild(document.createTextNode(menuItemsAA[i].name));
        }

        /* generate menu Sci-Fi & Fantasy */
        var menuSF = document.createElement('ul');
        menuSF.setAttribute('class', 'ulCats');
        var titleSF = document.createElement('h4');
        titleSF.setAttribute('class', 'titleCats');
        menuSF.appendChild(titleSF);
        titleSF.appendChild(document.createTextNode("Sci-Fi"));
        newCatsContainerDiv.appendChild(menuSF);
        for(var i = 0; i < menuItemsSF.length;i++) {
            var li = document.createElement('li');
            li.setAttribute('class', 'liCats');

            menuSF.appendChild(li);
            var a = document.createElement('a');
            a.setAttribute('href', '/browse/genre/' + menuItemsSF[i].id);
            a.setAttribute('class', 'catsLinkcolor');
            li.appendChild(a);
            a.appendChild(document.createTextNode(menuItemsSF[i].name));
        }

        /* generate menu Thrillers */
        var menuTH = document.createElement('ul');
        menuTH.setAttribute('class', 'ulCats');
        var titleTH = document.createElement('h4');
        titleTH.setAttribute('class', 'titleCats');
        menuTH.appendChild(titleTH);
        titleTH.appendChild(document.createTextNode("Thrillers"));
        newCatsContainerDiv.appendChild(menuTH);
        for(var i = 0; i < menuItemsTH.length;i++) {
            var li = document.createElement('li');
            li.setAttribute('class', 'liCats');

            menuTH.appendChild(li);
            var a = document.createElement('a');
            a.setAttribute('href', '/browse/genre/' + menuItemsTH[i].id);
            a.setAttribute('class', 'catsLinkcolor');
            li.appendChild(a);
            a.appendChild(document.createTextNode(menuItemsTH[i].name));
        }

        /* generate menu Comedies */
        var menuCO = document.createElement('ul');
        menuCO.setAttribute('class', 'ulCats');
        var titleCO = document.createElement('h4');
        titleCO.setAttribute('class', 'titleCats');
        menuCO.appendChild(titleCO);
        titleCO.appendChild(document.createTextNode("Comedies"));
        newCatsContainerDiv.appendChild(menuCO);
        for(var i = 0; i < menuItemsCO.length;i++) {
            var li = document.createElement('li');
            li.setAttribute('class', 'liCats');

            menuCO.appendChild(li);
            var a = document.createElement('a');
            a.setAttribute('href', '/browse/genre/' + menuItemsCO[i].id);
            a.setAttribute('class', 'catsLinkcolor');
            li.appendChild(a);
            a.appendChild(document.createTextNode(menuItemsCO[i].name));
        }

        /* generate menu Horror */
        var menuHO = document.createElement('ul');
        menuHO.setAttribute('class', 'ulCats');
        var titleHO = document.createElement('h4');
        titleHO.setAttribute('class', 'titleCats');
        menuHO.appendChild(titleHO);
        titleHO.appendChild(document.createTextNode("Horror"));
        newCatsContainerDiv.appendChild(menuHO);
        for(var i = 0; i < menuItemsHO.length;i++) {
            var li = document.createElement('li');
            li.setAttribute('class', 'liCats');

            menuHO.appendChild(li);
            var a = document.createElement('a');
            a.setAttribute('href', '/browse/genre/' + menuItemsHO[i].id);
            a.setAttribute('class', 'catsLinkcolor');
            li.appendChild(a);
            a.appendChild(document.createTextNode(menuItemsHO[i].name));
        }

        /* generate menu Dramas */
        var menuDR = document.createElement('ul');
        menuDR.setAttribute('class', 'ulCats');
        var titleDR = document.createElement('h4');
        titleDR.setAttribute('class', 'titleCats');
        menuDR.appendChild(titleDR);
        titleDR.appendChild(document.createTextNode("Dramas"));
        newCatsContainerDiv.appendChild(menuDR);
        for(var i = 0; i < menuItemsDR.length;i++) {
            var li = document.createElement('li');
            li.setAttribute('class', 'liCats');

            menuDR.appendChild(li);
            var a = document.createElement('a');
            a.setAttribute('href', '/browse/genre/' + menuItemsDR[i].id);
            a.setAttribute('class', 'catsLinkcolor');
            li.appendChild(a);
            a.appendChild(document.createTextNode(menuItemsDR[i].name));
        }

        /* generate menu Animes */
        var menuAN = document.createElement('ul');
        menuAN.setAttribute('class', 'ulCats');
        var titleAN = document.createElement('h4');
        titleAN.setAttribute('class', 'titleCats');
        menuAN.appendChild(titleAN);
        titleAN.appendChild(document.createTextNode("Animes"));
        newCatsContainerDiv.appendChild(menuAN);
        for(var i = 0; i < menuItemsAN.length;i++) {
            var li = document.createElement('li');
            li.setAttribute('class', 'liCats');

            menuAN.appendChild(li);
            var a = document.createElement('a');
            a.setAttribute('href', '/browse/genre/' + menuItemsAN[i].id);
            a.setAttribute('class', 'catsLinkcolor');
            li.appendChild(a);
            a.appendChild(document.createTextNode(menuItemsAN[i].name));
        }

        /* generate menu Kids */
        var menuKI = document.createElement('ul');
        menuKI.setAttribute('class', 'ulCats');
        var titleKI = document.createElement('h4');
        titleKI.setAttribute('class', 'titleCats');
        menuKI.appendChild(titleKI);
        titleKI.appendChild(document.createTextNode("Kids & Family"));
        newCatsContainerDiv.appendChild(menuKI);
        for(var i = 0; i < menuItemsKI.length;i++) {
            var li = document.createElement('li');
            li.setAttribute('class', 'liCats');

            menuKI.appendChild(li);
            var a = document.createElement('a');
            a.setAttribute('href', '/browse/genre/' + menuItemsKI[i].id);
            a.setAttribute('class', 'catsLinkcolor');
            li.appendChild(a);
            a.appendChild(document.createTextNode(menuItemsKI[i].name));
        }

        /* generate menu Worldwide */
        var menuWO = document.createElement('ul');
        menuWO.setAttribute('class', 'ulCats');
        var titleWO = document.createElement('h4');
        titleWO.setAttribute('class', 'titleCats');
        menuWO.appendChild(titleWO);
        titleWO.appendChild(document.createTextNode("Worldwide"));
        newCatsContainerDiv.appendChild(menuWO);
        for(var i = 0; i < menuItemsWO.length;i++) {
            var li = document.createElement('li');
            li.setAttribute('class', 'liCats');

            menuWO.appendChild(li);
            var a = document.createElement('a');
            a.setAttribute('href', '/browse/genre/' + menuItemsWO[i].id);
            a.setAttribute('class', 'catsLinkcolor');
            li.appendChild(a);
            a.appendChild(document.createTextNode(menuItemsWO[i].name));
        }

        /* generate menu Documentaries */
        var menuDO = document.createElement('ul');
        menuDO.setAttribute('class', 'ulCats');
        var titleDO = document.createElement('h4');
        titleDO.setAttribute('class', 'titleCats');
        menuDO.appendChild(titleDO);
        titleDO.appendChild(document.createTextNode("Documentaries"));
        newCatsContainerDiv.appendChild(menuDO);
        for(var i = 0; i < menuItemsDO.length;i++) {
            var li = document.createElement('li');
            li.setAttribute('class', 'liCats');

            menuDO.appendChild(li);
            var a = document.createElement('a');
            a.setAttribute('href', '/browse/genre/' + menuItemsDO[i].id);
            a.setAttribute('class', 'catsLinkcolor');
            li.appendChild(a);
            a.appendChild(document.createTextNode(menuItemsDO[i].name));
        }

        /* generate menu Music */
        var menuMU = document.createElement('ul');
        menuMU.setAttribute('class', 'ulCats');
        var titleMU = document.createElement('h4');
        titleMU.setAttribute('class', 'titleCats');
        menuMU.appendChild(titleMU);
        titleMU.appendChild(document.createTextNode("Music"));
        newCatsContainerDiv.appendChild(menuMU);
        for(var i = 0; i < menuItemsMU.length;i++) {
            var li = document.createElement('li');
            li.setAttribute('class', 'liCats');

            menuMU.appendChild(li);
            var a = document.createElement('a');
            a.setAttribute('href', '/browse/genre/' + menuItemsMU[i].id);
            a.setAttribute('class', 'catsLinkcolor');
            li.appendChild(a);
            a.appendChild(document.createTextNode(menuItemsMU[i].name));
        }

        /* generate menu Divers */
        var menuD = document.createElement('ul');
        menuD.setAttribute('class', 'ulCats');
        var titleD = document.createElement('h4');
        titleD.setAttribute('class', 'titleCats');
        menuD.appendChild(titleD);
        titleD.appendChild(document.createTextNode("Romantics - Divers - Sports"));
        newCatsContainerDiv.appendChild(menuD);
        for(var i = 0; i < menuItemsD.length;i++) {
            var li = document.createElement('li');
            li.setAttribute('class', 'liCats');

            menuD.appendChild(li);
            var a = document.createElement('a');
            a.setAttribute('href', '/browse/genre/' + menuItemsD[i].id);
            a.setAttribute('class', 'catsLinkcolor');
            li.appendChild(a);
            a.appendChild(document.createTextNode(menuItemsD[i].name));
        }

    }, 60);
})();
