document.addEventListener("DOMContentLoaded", function () {
  // Initialize Locomotive Scroll
  const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
    smoothMobile: true,
    multiplier: 1.2,
    class: "is-reveal",
  });

  // GSAP Navbar Hover Effects
  const navItems = document.querySelectorAll(".navbar ul li");

  navItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      gsap.to(item, {
        scale: 1.2,
        rotation: 5,
        color: "#f39c12",
        duration: 0.3,
        ease: "power2.out",
      });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(item, {
        scale: 1,
        rotation: 0,
        color: "#fff",
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });

  // GSAP Card Hover Effects
  const featureCards = document.querySelectorAll(".feature-card");

  featureCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -15,
        boxShadow: "0px 15px 30px rgba(0,0,0,0.3)",
        borderColor: "#f39c12",
        backgroundColor: "#2c3e50",
        color: "#ecf0f1",
        duration: 0.4,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        boxShadow: "0px 5px 10px rgba(0,0,0,0.1)",
        borderColor: "#bdc3c7",
        backgroundColor: "#ecf0f1",
        color: "#2c3e50",
        duration: 0.4,
        ease: "power2.out",
      });
    });
  });

  // Initialize Swiper
  const swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
// Scroll-triggered navbar background change
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = '#1a1a1a';
  } else {
    navbar.style.backgroundColor = '#2d2d2d';
  }
});

// GSAP animation for content appearance
gsap.from('.content h1', {
  duration: 1.5,
  y: -50,
  opacity: 0,
  ease: "power3.out",
  delay: 0.3
});

gsap.from('.content p', {
  duration: 1.5,
  y: 50,
  opacity: 0,
  ease: "power3.out",
  delay: 0.6
});
document.addEventListener("DOMContentLoaded", function () {
  // Create the custom cursor element
  const cursor = document.createElement("div");
  cursor.classList.add("cuser");
  document.body.appendChild(cursor);

  // Update cursor position
  document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate3d(${
      e.clientX - cursor.clientWidth / 2
    }px, ${e.clientY - cursor.clientHeight / 2}px, 0)`;
  });

  // Hide cursor when mouse leaves the viewport
  document.addEventListener("mouseleave", () => {
    cursor.classList.add("hidden");
  });

  // Show cursor when mouse re-enters the viewport
  document.addEventListener("mouseenter", () => {
    cursor.classList.remove("hidden");
  });
});
const loadingText = document.getElementById('loading-text h1');

let loadPercentage = 0;

const loadingInterval = setInterval(() => {
    if (loadPercentage < 100) {
        loadPercentage++;
        loadingText.innerText = `${loadPercentage}%`;
    } else {
        clearInterval(loadingInterval);
        document.querySelector('.loading-animation').classList.add('hidden');
    }
}, 50); // Adjust the interval to control the speed of loading
