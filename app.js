 // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Search icon functionality
    document.querySelector('.search-icon').addEventListener('click', function () {
      alert('Search functionality would open here!');
    });

    // Choose location button
    document.querySelector('.choose-location-btn').addEventListener('click', function () {
      alert('Location selector would open here!');
    });

    // Mobile menu toggle
    
const menu= document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");
const locationbtn = document.getElementById("choose-location-btn");


menu.addEventListener("click", () => {
    nav.classList.toggle("active");
    locationbtn.classList.toggle("active");
});


    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('nav');
      const currentScroll = window.pageYOffset;

      if (currentScroll > 50) {
        nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
      } else {
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
      }

      lastScroll = currentScroll;
    });



    document.querySelector(".btn").addEventListener("click", () => {
      alert("Thank you for your interest!");
    });


    // footer//
    const scrollBtn = document.getElementById("scrollTopBtn");

    // show button on scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    });

    // scroll to top
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });


    // slider//
    const slider = document.getElementById("slider");
    const card = slider.querySelector(".card");
    let cardWidth = card.offsetWidth + 20; // card + gap
    let autoSlideInterval;

    // // Manual arrows//
    // function slideLeft() {
    //   slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
    //   resetAutoSlide();
    // }

    // function slideRight() {
    //   slider.scrollBy({ left: cardWidth, behavior: "smooth" });
    //   resetAutoSlide();
    // }

    // AUTO SLIDE FUNCTION
    function startAutoSlide() {
      autoSlideInterval = setInterval(() => {
        if (
          slider.scrollLeft + slider.clientWidth >=
          slider.scrollWidth - cardWidth
        ) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          slider.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }, 3000);
    }

    // Reset auto slide when user clicks arrow
    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      startAutoSlide();
    }

    // Start auto slide on load
    startAutoSlide();

    // Update width on resize (important for responsive)
    window.addEventListener("resize", () => {
      cardWidth = card.offsetWidth + 24;
    });