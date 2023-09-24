document.addEventListener('DOMContentLoaded', () => {
    let navbar = document.querySelector('.navbar');
    let menuBtn = document.querySelector('#menu-btn');

    if (navbar && menuBtn) {
        menuBtn.onclick = () => {
            navbar.classList.toggle('active');
        };
    } else {
        console.error("Either '.navbar' or '#menu-btn' element not found.");
    }

    window.onscroll = () => {
        navbar.classList.remove('active');
    }
});


