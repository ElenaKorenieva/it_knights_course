document.addEventListener('DOMContentLoaded', function () {
    let menuBtn = document.querySelector('.button');
    let menu = document.querySelector('.start_header');
    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('visible');
    })
})
