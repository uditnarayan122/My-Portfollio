//Toggle icon navbar
let menuicon=document.querySelector('#menu-icon');
let navbar=document.querySelector('#navbar');
menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
//Scroll section active link
let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
window.onscroll= () => {
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top >= offset && top < offset+height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+ ']').classList.add('active');
            });
        };
    });
    let header=document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);
    //Remove toggle icon navbar
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
// Typing
var typed=new Typed('.text',{
    strings:["Software Engineer","Web Developer","App Developer","Python Developer","ML Engineer"],
    typeSpeed:25,
    backSpeed:25,
    backDelay:1500,
    loop:true
});
// Get the toggle button element
const themeToggleBtn = document.getElementById('theme-toggle');

// Default to dark mode and set the moon icon 🌙
document.body.classList.add('dark-mode');
themeToggleBtn.textContent = '🌙';

// Toggle dark and light mode on button click
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    let theme = 'light-mode'; // Default to light mode when toggled

    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark-mode';
        themeToggleBtn.textContent = '🌙'; // Moon icon for dark mode
    } else {
        themeToggleBtn.textContent = '🌞'; // Sun icon for light mode
    }

    // Save the selected theme in localStorage
    localStorage.setItem('theme', theme);
});

// Apply saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.remove('dark-mode', 'light-mode');
    document.body.classList.add(savedTheme);
    themeToggleBtn.textContent = savedTheme === 'dark-mode' ? '🌙' : '🌞';
}


