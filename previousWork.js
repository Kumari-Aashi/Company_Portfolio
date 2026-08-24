// Ensure code executes after HTML is loaded
document.addEventListener("DOMContentLoaded", () => {
    let currentWork = 0;

    const works = document.querySelectorAll(".pw-work");
    const pages = document.querySelectorAll(".pw-page");
    const prevBtn = document.getElementById("pwPrevBtn");
    const nextBtn = document.getElementById("pwNextBtn");

    function showWork(index) {
        if (!works || works.length === 0) return;

        // Loop bounds checking
        if (index < 0) {
            currentWork = works.length - 1;
        } else if (index >= works.length) {
            currentWork = 0;
        } else {
            currentWork = index;
        }

        // Hide all slides
        works.forEach((work) => work.classList.remove("active"));
        pages.forEach((page) => page.classList.remove("active"));

        // Show active slide
        works[currentWork].classList.add("active");
        if (pages[currentWork]) {
            pages[currentWork].classList.add("active");
        }
    }

    // Attach click listeners to arrows
    if (prevBtn) {
        prevBtn.addEventListener("click", (e) => {
            e.preventDefault();
            showWork(currentWork - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", (e) => {
            e.preventDefault();
            showWork(currentWork + 1);
        });
    }

    // Attach click listeners to pagination dots
    pages.forEach((page, idx) => {
        page.addEventListener("click", () => {
            showWork(idx);
        });
    });

    // Initialize first slide
    showWork(0);
});