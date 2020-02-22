"use strict";

const mylink = "http://orangeduck.dk/Eksamen/naihakhiljee/wp-json/wp/v2/onepage?_embed";


function LoadPageData(link) {
    fetch(link).then(e => e.json()).then(data => showMenu(data));
}

function showMenu(object) {
    console.log(object);
    console.log(object['0']._embedded['wp:featuredmedia']['0'].media_details.sizes.full);
}
LoadPageData(mylink);
