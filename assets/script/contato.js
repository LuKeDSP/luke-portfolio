var insta = window.document.getElementById('txtig');
var face = window.document.getElementById('txtfb');
var gh = window.document.getElementById('txtgh');
var linked = window.document.getElementById('txtli');
var whats = window.document.getElementById('txtwpp');
var email = window.document.getElementById('txtemail');
var downloadcv = window.document.getElementById('txtcv');

function instagram() {
    window.document.getElementById('txtig').onclick = window.open("https://www.instagram.com/luke_pilatti/", "_blank");
}

function facebook() {
    window.document.getElementById('txtfb').onclick = window.open("https://www.facebook.com/lucas.francapilatti", "_blank");
}

function github() {
    window.document.getElementById('txtgh').onclick = window.open("https://github.com/LuKeDSP", "_blank");
}

function linkedin() {
    window.document.getElementById('txtli').onclick = window.open("https://www.linkedin.com/in/lucas-pilatti-4957841bb/", "_blank");
}
function whatsapp() {
    window.document.getElementById('txtwpp').onclick = window.open("https://wa.me/5548991408062", "_blank");
}

insta.addEventListener("click", instagram);
face.addEventListener("click", facebook);
gh.addEventListener("click", github);
linked.addEventListener("click", linkedin);
whats.addEventListener("click", whatsapp);