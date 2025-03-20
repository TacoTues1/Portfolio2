document.getElementById('darkModeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.topnav').classList.toggle('dark-mode');
    document.querySelectorAll('.topnav a').forEach(link => {
        link.classList.toggle('dark-mode');
    });
});

var i = 0;
var txt = "I'M ALFONZ PEREZ";
var speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.querySelector(".intro-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(() => {
            i = 0;
            document.querySelector(".intro-text").innerHTML = "";
            typeWriter();
        }, 2000);
    }
}

window.onload = typeWriter;