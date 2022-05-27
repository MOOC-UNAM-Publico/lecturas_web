///
/*
Simple script to control de Top Button and pill navigation when content is too long.
*/
///

let mybutton = document.getElementById("btn-top");
let pillbutton = document.getElementById("btn-back");

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

mybutton.addEventListener("click", topFunction);

pillbutton.addEventListener("click", topPill);

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function topPill() {
    document.body.scrollTop = 400;
    document.documentElement.scrollTop = 400;
}