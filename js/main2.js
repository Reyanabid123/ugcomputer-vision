document.addEventListener("DOMContentLoaded", function () {
  // Initialize Locomotive Scroll
  const scroll = new LocomotiveScroll({
    el: document.querySelector(".page3"),
    smooth: true,
    lerp: 0.2,
  });

  // GSAP Animations for Cards
  gsap.from(".post1", {
    duration: 1,
    opacity: 0,
    y: 100,
    scale: 0.8,
    stagger: 0.3,
    ease: "power2.out",
  });

  document.querySelectorAll(".post1").forEach((card) => {
    // Adding hover animation
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        scale: 1.05,
        duration: 0.3,
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        ease: "power2.out",
      });
    });
  });

  // Three.js Setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.querySelector(".full-page-overlay").appendChild(renderer.domElement);

  // Add Particles
  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  for (let i = 0; i < 1000; i++) {
    vertices.push(
      Math.random() * 2000 - 1000,
      Math.random() * 2000 - 1000,
      Math.random() * 2000 - 1000
    );
  }
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3)
  );
  const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5 });
  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  camera.position.z = 500;

  function animate() {
    requestAnimationFrame(animate);
    particles.rotation.x += 0.001;
    particles.rotation.y += 0.001;
    renderer.render(scene, camera);
  }
  animate();
});
