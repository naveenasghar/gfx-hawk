const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');
const sidebarLinks = document.querySelectorAll('.sidebar-links a');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

// Close sidebar when a link is clicked
sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });
});
