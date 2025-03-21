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

window.addEventListener('scroll', function () {
    const backToTopButton = document.getElementById('backToTop');
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// chart
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
document.head.appendChild(script);

script.onload = function () {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    const skillsChart = new Chart(ctx, {
        type: 'bar', // Bar chart
        data: {
            labels: ['HTML', 'CSS', 'JavaScript', 'Java', 'ReactJS', 'NodeJS', 'Laravel'], // Skill labels
            datasets: [{
                label: 'Skill Level (%)',
                data: [100, 100, 100, 100, 100, 100, 100], // Skill levels
                backgroundColor: [
                    '#FF5733', // HTML
                    '#33C3FF', // CSS
                    '#FFC300', // JavaScript
                    '#8E44AD', // Java
                    '#61DAFB', // ReactJS
                    '#68A063', // NodeJS
                    '#FF2D20'  // Laravel
                ],
                borderColor: [
                    '#FF5733',
                    '#33C3FF',
                    '#FFC300',
                    '#8E44AD',
                    '#61DAFB',
                    '#68A063',
                    '#FF2D20'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
};