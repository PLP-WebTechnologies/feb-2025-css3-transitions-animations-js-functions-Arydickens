document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('myImage');
    const animateBtn = document.getElementById('animateBtn');
    const bounceBtn = document.getElementById('bounceBtn');
    const fadeBtn = document.getElementById('fadeBtn');
    const resetBtn = document.getElementById('resetBtn');
  
    // Load saved animation state
    if (localStorage.getItem('mainAnimation') === 'true') {
      image.classList.add('animated');
    }
  
    animateBtn.addEventListener('click', () => {
      image.classList.toggle('animated');
      localStorage.setItem('mainAnimation', image.classList.contains('animated'));
    });
  
    bounceBtn.addEventListener('click', () => {
      image.classList.remove('fade');
      image.classList.add('bounce');
      setTimeout(() => {
        image.classList.remove('bounce');
      }, 800);
    });
  
    fadeBtn.addEventListener('click', () => {
      image.classList.toggle('fade');
    });
  
    resetBtn.addEventListener('click', () => {
      image.classList.remove('animated', 'bounce', 'fade');
      localStorage.removeItem('mainAnimation');
    });
  });
  