var startBtn = window.document.getElementById('startbtn');
var aboutBtn = window.document.getElementById('aboutbtn');
var projectBtn = window.document.getElementById('projectsbtn');
var contactBtn = window.document.getElementById('contactmebtn');

function start() {
    window.document.getElementById('startbtn').onclick = document.getElementById('presentation').scrollIntoView();
}

function about() {
    window.document.getElementById('aboutbtn').onclick = document.getElementById('about').scrollIntoView();
}

function project() {
    window.document.getElementById('projectsbtn').onclick = document.getElementById('project').scrollIntoView();
}

startBtn.addEventListener("click", start);
aboutBtn.addEventListener("click", about);
projectBtn.addEventListener("click", project);