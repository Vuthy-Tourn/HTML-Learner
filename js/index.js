document.addEventListener("DOMContentLoaded", function() {
  // Mobile Navigation Menu (Keep original functionality)
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      this.classList.toggle('active');
      mainNav.classList.toggle('active');
      document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on links
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileToggle.classList.remove('active');
        mainNav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!mainNav.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileToggle.classList.remove('active');
        mainNav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Improved Sidebar Toggle Functionality
  const sidebar = document.querySelector('.sidebar');
  
  if (sidebar) {
    // Create toggle button
    const sidebarToggle = document.createElement('button');
    sidebarToggle.className = 'sidebar-toggle';
    sidebarToggle.innerHTML = '<span class="toggle-icon">☰</span> Menu';
    sidebarToggle.style.display = 'none'; // Hidden by default
    
    // Insert toggle button before sidebar
    sidebar.parentNode.insertBefore(sidebarToggle, sidebar);
    
    function handleSidebar() {
      if (window.innerWidth <= 992) {
        // Mobile/tablet view
        sidebarToggle.style.display = 'block';
        sidebar.style.position = 'fixed';
        sidebar.style.left = '0';
        sidebar.style.top = '80px';
        sidebar.style.bottom = '0';
        sidebar.style.transform = 'translateX(-100%)';
        sidebar.style.transition = 'transform 0.3s ease';
        
        // Toggle sidebar on button click
        sidebarToggle.addEventListener('click', function(e) {
          e.stopPropagation();
          const isOpen = sidebar.style.transform === 'translateX(0%)';
          sidebar.style.transform = isOpen ? 'translateX(-100%)' : 'translateX(0%)';
        });
        
        // Close sidebar when clicking outside
        document.addEventListener('click', function(e) {
          if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
            sidebar.style.transform = 'translateX(-100%)';
          }
        });
      } else {
        // Desktop view
        sidebarToggle.style.display = 'none';
        sidebar.style.position = 'sticky';
        sidebar.style.transform = 'none';
        sidebar.style.top = '80px';
        sidebar.style.height = 'calc(100vh - 80px)';
      }
    }
    
    // Initialize and handle resize
    handleSidebar();
    window.addEventListener('resize', handleSidebar);
  }
});
// bsck to top
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("back-to-top-btn");
  const scrollThreshold = 300; // Pixels to scroll before button appears

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > scrollThreshold) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });

  // Smooth scroll to top when clicked
  backToTopButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});