export const faq = () => {
  const questionsBtn = document.querySelectorAll('.faq-question-button-js');

  questionsBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      const isAlreadyOpen = btn.nextElementSibling.classList.contains('open');

      questionsBtn.forEach(btns => {
        [...btns.children].forEach(item => {
            [...item.children].forEach(svg => {
              svg.style.transform = 'rotate(90deg)';
            });
        });
      });

      questionsBtn.forEach(btnNext => {
        btnNext.nextElementSibling.classList.remove('open');
      });

      if (!isAlreadyOpen) {
        btn.nextElementSibling.classList.add('open');
        [...btn.children].forEach(item => {
            [...item.children].forEach(svg => {
              svg.style.transform = 'rotate(0deg)';
            });
        });
      }
    });
  });
};