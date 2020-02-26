"use strict";

const section2 = "http://orangeduck.dk/Eksamen/naihakhiljee/wp-json/wp/v2/nk_section2";
const section3 = "http://orangeduck.dk/Eksamen/naihakhiljee/wp-json/wp/v2/nk_section3";
const section4 = "http://orangeduck.dk/Eksamen/naihakhiljee/wp-json/wp/v2/nk_section4";

function loadBogData(link) {
    fetch(link).then(e => e.json()).then(data => bogData(data));
}

function bogData(data) {
    console.log(data);

    document.querySelector(".citat1 p").textContent = data[0].citat;
    document.querySelector("#knap1 a").href = data[0].bog;
}

loadBogData(section2);
loadMenuData(section3);
loadMenuData(section4);
