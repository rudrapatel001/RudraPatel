// Hide the loader after 2 seconds of page load
window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
  }, 2000);
});

// Add a class to .home-content after 2 seconds of page load to trigger animations or styling
window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector(".home-content").classList.add("loaded");
  }, 2000);
});

// Initialize the typing effect for text
const typed = new Typed("#typing-text", {
  strings: ["Data scientist", "Data Analyst"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

// Theme selector functionality
document.addEventListener("DOMContentLoaded", () => {
  const themes = ["default-theme", "dark-theme"];
  let currentThemeIndex = 0;
  const themeToggle = document.getElementById("theme-toggle");

  // Function to apply the selected theme to the body
  const setTheme = (theme) => {
    document.body.className = theme;
  };

  // Function to cycle through themes
  const cycleThemes = () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    setTheme(themes[currentThemeIndex]);
  };

  // Add click event to the theme toggle button
  themeToggle.addEventListener("click", cycleThemes);

  // Set the initial theme
  setTheme(themes[currentThemeIndex]);
});

// Toggle the navbar visibility when the menu icon is clicked
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("bx-x");
};

document.addEventListener("DOMContentLoaded", function() {
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach(button => {
    button.addEventListener("click", function() {
      const targetId = this.getAttribute("data-target");
      const target = document.getElementById(targetId);

      if (target.style.display === "none" || target.style.display === "") {
        target.style.display = "inline";
        this.textContent = "Show Less";
      } else {
        target.style.display = "none";
        this.textContent = "Show More";
      }
    });
  });
});


document.querySelectorAll(".skills-slider").forEach((slider) => {
  slider.addEventListener("wheel", (event) => {
    event.preventDefault(); // Prevents the default vertical scrolling
    slider.scrollLeft += event.deltaY; // Scrolls horizontally
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".skills-slider");

  // Handle mouse drag scrolling
  let isDragging = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDragging = false;
  });

  slider.addEventListener("mouseup", () => {
    isDragging = false;
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    slider.scrollLeft = scrollLeft - walk;
  });

  // Handle touch scrolling for mobile
  let touchStartX;
  let touchStartScrollLeft;

  slider.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].pageX - slider.offsetLeft;
    touchStartScrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("touchmove", (e) => {
    const touchX = e.touches[0].pageX - slider.offsetLeft;
    const touchWalk = (touchX - touchStartX) * 2; // Scroll speed
    slider.scrollLeft = touchStartScrollLeft - touchWalk;
  });
});

// Toggle description visibility in project sections
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".show-description-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const description = this.previousElementSibling;
      if (
        description.style.display === "none" ||
        description.style.display === ""
      ) {
        description.style.display = "block";
        this.textContent = "Hide Description";
      } else {
        description.style.display = "none";
        this.textContent = "Read Description";
      }
    });
  });
});

// Redirect to Gmail compose window with pre-filled email details
function redirectToGmail() {
  const email = "rudra7042004@example.com";
  const subject = "Your Subject Here";
  const body = "Hello, I would like to...";
  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.open(gmailURL, "_blank");
}

// Handle scroll events to show/hide the scroll-to-top button and activate navigation links
window.onscroll = function () {
  scrollFunction(); // Manage scroll-to-top button visibility
  activateNavLink(); // Manage active navigation link highlighting
};

// Show or hide the scroll-to-top button based on scroll position
function scrollFunction() {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

// Highlight the current section link in the navigation bar based on scroll position
function activateNavLink() {
  let sections = document.querySelectorAll("section");
  let navLink = document.querySelectorAll("header nav a");

  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
}

// Scroll to the top of the page
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
