document.addEventListener("DOMContentLoaded", () => {
    const isMobile = window.innerWidth <= 767;
    const textElement = document.querySelector(".archivo-black-regular");
    const typingTextElement = document.querySelector(".typing-text");
    const textContainer = document.querySelector(".text-container");
    const imageContainer = document.querySelector(".image-container");
    const techImages = document.querySelectorAll(".img-fluid");
    const techText = document.querySelectorAll(".archivo-black-regular-static");
    const techDesc = document.querySelectorAll(".tech-desc");
    const progressBars = document.querySelectorAll(".progress");
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarNav = document.querySelector(".navbar-nav");
  
    const applyClassWithDelay = (element, className, delay) => {
      if (element) {
        setTimeout(() => {
          if (className) {
            element.classList.add(className);
          }
        }, delay);
      }
    };
  
    const initAnimations = () => {
      if (!isMobile) {
        applyClassWithDelay(textElement, "fade-in", 500);
        applyClassWithDelay(typingTextElement, null, 2500);
        applyClassWithDelay(textContainer, "move-left", 6500);
        applyClassWithDelay(imageContainer, "fade-in", 8500);
        applyClassWithDelay(techText, "fade-in", 8500);
        applyClassWithDelay(techDesc, "fade-in", 8500);
      }
    };
  
    const initObserver = () => {
      if (!isMobile) {
        const observerOptions = {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        };
  
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("fade-in");
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);
  
        techImages.forEach((image) => observer.observe(image));
        techText.forEach((text) => observer.observe(text));
        techDesc.forEach((desc) => observer.observe(desc));
      }
    };
  
    const initProgressBarObserver = () => {
      if (!isMobile) {
        const observerOptions = {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        };
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const progress = entry.target;
              progress.style.width = progress.getAttribute("data-progress");
              observer.unobserve(progress);
            }
          });
        }, observerOptions);
  
        progressBars.forEach((bar) => observer.observe(bar));
      } else {
        progressBars.forEach((bar) => {
          bar.style.width = bar.getAttribute("data-progress");
        });
      }
    };
  
    initProgressBarObserver();
    initAnimations();
    initObserver();
  
    document.querySelectorAll(".nav-link").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  
    if (navbarToggler) {
      navbarToggler.addEventListener("click", () => {
        navbarNav.classList.toggle("active");
      });
    }
  });