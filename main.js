document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('bhMobileToggle');
  const menuContainer = document.querySelector('.bh-desktop-menu');

  if (toggleBtn && menuContainer) {
    toggleBtn.addEventListener('click', () => {
      menuContainer.classList.toggle('active');
    });
  }

  // Highlights base link on routing match
  const currentFileName = window.location.pathname.split('/').pop();
  const allNavLinks = document.querySelectorAll('.bh-link');

  allNavLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentFileName) {
      link.classList.add('active');
    }
  });
});

