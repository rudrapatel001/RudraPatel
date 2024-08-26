// Loader
window.addEventListener("load", function(){
    setTimeout(function(){
        document.getElementById("loader").style.display = "none";
        document.getElementById(".main-page").style.display = "block";
    }, 2000);
});

//Theme-Selector
document.addEventListener('DOMContentLoaded', () => {
    const themes = ['default-theme', 'dark-theme'];
    let currentThemeIndex = 0;

    const themeToggle = document.getElementById('theme-toggle');

    const setTheme = (theme) => {
        document.body.className = theme;
    };

    const cycleThemes = () => {
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        setTheme(themes[currentThemeIndex]);
    };

    themeToggle.addEventListener('click', cycleThemes);

    setTheme(themes[currentThemeIndex]);
});


const typed = new Typed('#typing-text', {
    strings: ['Data scientist','Data Analyst'],
    typeSpeed: 100, 
    backSpeed: 100, 
    loop: true 
  });


//active navbar
let sections = document.querySelectorAll('section')
let navLink = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
} 
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
}

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const moreText = document.getElementById(targetId);
            const currentDisplay = moreText.style.display;
            
            if (currentDisplay === 'none' || currentDisplay === '') {
                moreText.style.display = 'inline'; // Show the extra text
                this.textContent = 'Show Less';    // Change button text
            } else {
                moreText.style.display = 'none';   // Hide the extra text
                this.textContent = 'Show More';    // Change button text
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.show-description-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const description = this.previousElementSibling;
            if (description.style.display === 'none' || description.style.display === '') {
                description.style.display = 'block';
                this.textContent = 'Hide Description';
            } else {
                description.style.display = 'none';
                this.textContent = 'Read Description';
            }
        });
    });
});


