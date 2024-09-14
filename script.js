window.addEventListener("load", function () {
  // Hide loader and add class for animations after 2 seconds
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
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

document.addEventListener("DOMContentLoaded", () => {
  const themes = ["default-theme", "dark-theme"];
  let currentThemeIndex = 0;
  const themeToggle = document.getElementById("theme-toggle");
  const themeMessage = document.getElementById("theme-message");

  const setTheme = (theme) => {
    document.body.className = theme;
  };

  const cycleThemes = () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    setTheme(themes[currentThemeIndex]);
  };

  themeToggle.addEventListener("click", (event) => {
    event.preventDefault();
    cycleThemes();
  });

  setTheme(themes[currentThemeIndex]);

  // Function to show the message
  const showThemeMessage = () => {
    if (!sessionStorage.getItem("themeMessageShown")) {
      themeMessage.classList.add("show");
      sessionStorage.setItem("themeMessageShown", "true");

      setTimeout(() => {
        themeMessage.classList.remove("show");
      }, 5000);
    }
  };

  // Event listener for scrolling to the bottom of the page
  window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      showThemeMessage();
    }
    scrollFunction(); // Call scrollFunction during scroll events
    activateNavLink(); // Call activateNavLink during scroll events
  });

  // Toggle the navbar visibility when the menu icon is clicked
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.onclick = () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
  };

  // Toggle description visibility in project sections
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

  // Show or hide the scroll-to-top button based on scroll position
  function scrollFunction() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  }

  // Highlight the current section link in the navigation bar based on scroll position
  function activateNavLink() {
    const sections = document.querySelectorAll("section");
    const navLink = document.querySelectorAll("header nav a");

    const top = window.scrollY;

    sections.forEach((sec) => {
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLink.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector(`header nav a[href*=${id}]`)
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

  // Attach scrollToTop to the scroll-to-top button click event
  document
    .getElementById("scrollTopBtn")
    .addEventListener("click", scrollToTop);
});
