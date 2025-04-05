const mobileMenu = () => {
  const mobileMenuButton = document.querySelector('.header-nav-mobile-button');
  const mobileMenu = document.querySelector('.header-nav-mobile');
  const mobileMenuButtonClose = document.querySelector(
    '.header-nav-mobile-button-close'
  );
  const mobileMenuItems = document.querySelectorAll('.header-nav-mobile-item');
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
  });

  mobileMenuButtonClose.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });

  mobileMenuItems.forEach(item => {
    item.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
    });
  });

};

export default mobileMenu;
