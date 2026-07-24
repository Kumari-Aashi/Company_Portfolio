document.addEventListener("DOMContentLoaded", () => {
  // Select target elements for transition
  const animatedElements = document.querySelectorAll(
    '.bh-software-canvas, .bh-about-section, .experience-block, .project-slide-block, .grid-card'
  );
  
  const toast = document.querySelector('.bh-hiring-toast');

  const scrollHandler = () => {
    const triggerHeight = window.innerHeight * 0.85; // Element screen ke 85% depth par aate hi run hoga

    animatedElements.forEach(el => {
      const distanceToTop = el.getBoundingClientRect().top;
      if (distanceToTop < triggerHeight) {
        el.classList.add('active-reveal');
      }
    });

    // Elegant entrance of the bottom hiring toast after scrolling down 300px
    if (window.scrollY > 300) {
      toast.classList.add('toast-active');
    } else {
      toast.classList.remove('toast-active');
    }
  };

  // Close dynamic action toast listener
  const closeBtn = document.querySelector('.toast-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      toast.style.display = 'none';
    });
  }

  // Bind and run initialization check
  window.addEventListener('scroll', scrollHandler);
  scrollHandler(); 
});


const slider = document.querySelector(".slides");

let index = 0;

const total = document.querySelectorAll(".slides video").length;

setInterval(() => {

    index++;

    if(index >= total){
        index = 0;
    }

    slider.style.transform = `translateX(-${index * 320}px)`;

},3000);