import React, { Component, useState } from 'react';
import $ from "jquery";
import anime from 'animejs/lib/anime.es.js';

var expanded = false;

function ExpandMenu() {
    if (expanded) {
        expanded = false;
        anime({
            delay: 100,
            targets: "#navbar",
            left: "-201px",
            easing: 'easeOutExpo',
            duration: 200
        });
        anime({
            targets: "#blur",
            background: "rgba(48,48,48, .0)",
            easing: 'easeOutExpo',
            duration: 200,
            begin: function(anim) {
                $("#blur").css('visibility', 'hidden')
            }
        });        
    }
    else {
        expanded = true;
        anime({
            targets: "#navbar",
            left: "0px",
            easing: 'easeOutExpo',
            duration: 200
        });
        anime({
            targets: "#blur",
            background: "rgba(48,48,48, .79)",
            easing: 'easeOutExpo',
            duration: 200,
            begin: function(anim) {
                $("#blur").css('visibility', 'visible')
            }
        });        
    }
}

export default ExpandMenu;