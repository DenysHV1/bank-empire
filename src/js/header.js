const mobileMenu = () => {
  const mobileMenuButton = document.querySelector('.header-nav-mobile-button');
  const mobileMenu = document.querySelector('.header-nav-mobile');
  const mobileMenuButtonClose = document.querySelector(
    '.header-nav-mobile-button-close'
  );
  const mobileMenuItems = document.querySelectorAll('.header-nav-mobile-item');
  const header = document.querySelector('.header');
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

  if (window.innerWidth < 1440) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scroll', window.scrollY > 0);
    });
  }
};

export default mobileMenu;
