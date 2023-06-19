import $ from "jquery";
import anime from 'animejs/lib/anime.es.js';

function ExpandMenu() {
    var expanded = false;

    console.log("Anime");
    if (expanded) {
        anime({
            target: ".navbar",
            translateX: -201,
        });
        console.log(expanded);
    }
    else {
        anime({
            target: ".navbar",
            translateX: 201,
        });
        console.log(expanded);
    }
}

export default ExpandMenu;