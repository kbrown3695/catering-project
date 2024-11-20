
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navBar = document.querySelector('.nav-bar');

  menuToggle.addEventListener('click', function() {
    navBar.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideNav = navBar.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnToggle && navBar.classList.contains('active')) {
      navBar.classList.remove('active');
    }
  });

  // Close menu when window is resized above mobile breakpoint
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      navBar.classList.remove('active');
    }
  });
});
