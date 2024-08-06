document.addEventListener("DOMContentLoaded", function () {
  // Initialize Locomotive Scroll
  const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
    lerp: 0.2, // Adjust this value for smoother or faster scrolling
  });

  // Animate heading (h1)
  gsap.from("h1", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: "bounce.out",
  });

  // Animate paragraph (p)
  gsap.from("p", {
    duration: 2,
    opacity: 0,
    x: -100,
    ease: "elastic.out(1, 0.3)",
  });

  // Animate button
  gsap.from("button", {
    duration: 1,
    opacity: 0,
    scale: 0.2,
    ease: "elastic.out(1, 0.3)",
  });

  document.querySelectorAll(".navbar li").forEach((item) => {
    let text = item.textContent;
    item.innerHTML = "";
    text.split("").forEach((char, index) => {
      let span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      item.appendChild(span);
    });

    item.addEventListener("mouseenter", () => {
      let tl = gsap.timeline();
      tl.to(item.children, {
        y: -10,
        scale: 1.2,
        rotation: 10,
        color: "rgb(23, 170, 194)",
        stagger: 0.05,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      }).to(item.children, {
        y: 0,
        scale: 1,
        rotation: 0,
        color: "#000",
        stagger: 0.05,
        duration: 0.5,
        ease: "power1.in",
      });
    });

    item.addEventListener("mouseleave", () => {
      let tl = gsap.timeline();
      tl.to(item.children, {
        y: -10,
        scale: 1.2,
        rotation: -10,
        color: "rgb(23, 170, 194)",
        stagger: 0.05,
        duration: 0.5,
        ease: "power1.out",
      }).to(item.children, {
        y: 0,
        scale: 1,
        rotation: 0,
        color: "#000",
        stagger: 0.05,
        duration: 0.5,
        ease: "power1.in",
      });
    });
  });

  const button = document.querySelector(".page1 button");

  document.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(button, {
      x: x * 0.1,
      y: y * 0.1,
      rotate: x * 0.01,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  button.addEventListener("mouseleave", () => {
    gsap.to(button, {
      x: 0,
      y: 0,
      rotate: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  // Create a mouse follower element
  const follower = document.querySelector(".cuser");

  // Set initial properties for the follower element
  gsap.set(follower, { xPercent: -50, yPercent: -50 });

  // Animate the follower based on mouse movement
  document.addEventListener("mousemove", (e) => {
    const scrollY = scroll.scroll.instance.scroll.y; // Get the current scroll position
    gsap.to(follower, {
      x: e.clientX,
      y: e.clientY + scrollY, // Adjust the y-position with the scroll position
      duration: 0.4,
      ease: "elastic.out(1, 0.3)",
    });
  });

  // Full page overlay with typing indicator
  const overlay = document.createElement("div");
  overlay.className = "full-page-overlay";
  document.body.appendChild(overlay);

  gsap.fromTo(
    ".typing-indicator",
    { opacity: 0 },
    { opacity: 1, duration: 0.5 }
  );

  // Example: Hide the typing indicator and overlay after 5 seconds
  setTimeout(function () {
    gsap.to(".full-page-overlay", {
      opacity: 0,
      duration: 0.5,
      innerHTML: "",
      onComplete: () => {
        overlay.remove(); // Remove the overlay from the DOM
      },
    });
  }, 5000);
});
