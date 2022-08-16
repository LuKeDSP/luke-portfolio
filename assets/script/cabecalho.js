var startBtn = window.document.getElementById('startbtn');
var aboutBtn = window.document.getElementById('aboutbtn');
var projectBtn = window.document.getElementById('projectsbtn');
var contactBtn = window.document.getElementById('contactmebtn');

function start() {
    window.document.getElementById('startbtn').onclick = window.document.getElementById('presentation').scrollIntoView();
}

function about() {
    window.document.getElementById('aboutbtn').onclick = window.document.getElementById('about').scrollIntoView();
}

function project() {
    window.document.getElementById('projectsbtn').onclick = window.document.getElementById('project').scrollIntoView();
}

function contact() {
    window.document.getElementById('contacBtn').onclick = window.document.getElementById('contact').scrollIntoView();
}

startBtn.addEventListener("click", start);
aboutBtn.addEventListener("click", about);
projectBtn.addEventListener("click", project);
contactBtn.addEventListener("click", contact);