document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuButton = document.querySelector('#mobile-menu');
  const mobileNavigation = document.querySelector('#app-navigation');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenuButton.classList.toggle('active-mobile-menu');
    mobileNavigation.classList.toggle('hidden-menu');
  });
});