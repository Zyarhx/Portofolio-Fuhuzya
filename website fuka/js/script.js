// Toogle class active
const navMenu = document.querySelector('.nav-menu');
// ketika hamburger di klik
document.querySelector('#hambur-ger').onclick = function(event) {
event.preventDefault();
navMenu.classList.toggle('active');
    
};

const hambur = document.querySelector('.hambur');

document.addEventListener('click', function(e) {
    if (!hamburGer.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});