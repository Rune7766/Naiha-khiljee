"use strict";
// https://www.w3schools.com/js/js_strict.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
//--------------EVENT SIDE-------------
const skabelon = document.querySelector("template").content;

const mylink = "http://orangeduck.dk/Eksamen/naihakhiljee/wp-json/wp/v2/nk_event?_embed";
//const myCategory = "http://orangeduck.dk/Eksamen/naihakhiljee/wp-json/wp/v2/landsdel";


function LoadPageData(link) {
    fetch(link).then(e => e.json()).then(data => showMenu(data));
}

/*function LoadCatData(link) {
    fetch(link).then(e => e.json()).then(data => showCat(data));
}*/

function showMenu(events) {
    //console.log(events);
    //document.querySelector('#liste').textContent = events[1]._embedded['wp:term'][0][0].name;
    events.forEach(event => {
        console.log(event);
        // Klon skabelonen
        const klon = skabelon.cloneNode(true);

        // Fyld skabelonen
        klon.querySelector("h3").textContent = event.title.rendered;
        klon.querySelector(".kortBeskrivelse").innerHTML = event.content.rendered;
        klon.querySelector(".detaljerSted").textContent = event.sted;
        klon.querySelector(".detaljerAdresse").textContent = event.adresse;
        klon.querySelector(".detaljerPris").textContent = event.pris;
        klon.querySelector(".detaljerTid").textContent = event.tid;
        klon.querySelector("img").src = event._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;

        // Tilføj til DOM
        document.querySelector("#liste").appendChild(klon);

    });
}


/*-- -- -- -- -- -- -- -- -- -- -- --section 1-- -- -- -- -- -- -- -- -- -- -- -- -- --*/

/*function showCat() {

}*/
LoadPageData(mylink);
//LoadCatData(myCategory);
