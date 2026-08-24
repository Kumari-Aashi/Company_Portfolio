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



// slider image 
const portfolioImages = [
  "assest/img1.jpeg",
  "assest/img2.jpeg",
  "assest/img3.jpeg",
  "assest/img4.jpeg"
];

let currentImage = 0;

const portfolioImage =
  document.getElementById("portfolioImage");

const nextBtn =
  document.getElementById("nextBtn");

const prevBtn =
  document.getElementById("prevBtn");

const imageCounter =
  document.getElementById("imageCounter");


function showImage(index) {

  portfolioImage.style.opacity = "0";

  setTimeout(() => {

    portfolioImage.src =
      portfolioImages[index];

    portfolioImage.style.opacity = "1";

    imageCounter.textContent =
      `${index + 1} / ${portfolioImages.length}`;

  }, 200);
}


nextBtn.addEventListener("click", () => {

  currentImage++;

  if (currentImage >= portfolioImages.length) {
    currentImage = 0;
  }

  showImage(currentImage);
});


prevBtn.addEventListener("click", () => {

  currentImage--;

  if (currentImage < 0) {
    currentImage = portfolioImages.length - 1;
  }

  showImage(currentImage);
});



// for singIn
document.getElementById('signInForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const statusMsg = document.getElementById('statusMsg');

            // Form handler demo logic
            if (email && password) {
                statusMsg.textContent = "Successfully signed in! Redirecting...";
                statusMsg.className = "status-msg success";
                
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 1500);
            } else {
                statusMsg.textContent = "Please fill in all required fields.";
                statusMsg.className = "status-msg error";
            }
        });




        