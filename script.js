// Reveal sections on scroll
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  function revealSections() {
    const triggerBottom = window.innerHeight * 0.85;
    
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealSections);
  revealSections(); // Initial check
});
