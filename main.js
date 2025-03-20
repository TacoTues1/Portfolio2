document.getElementById('darkModeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.topnav').classList.toggle('dark-mode');
    document.querySelectorAll('.topnav a').forEach(link => {
        link.classList.toggle('dark-mode');
    });
});