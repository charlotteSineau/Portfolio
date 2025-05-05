document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('#menu a');
  const sections = document.querySelectorAll('section');
  const liencontact = document.getElementById('liencontact');
  const contactLink = document.querySelector('#menu a[data-target="contact"]');

  // Navigation
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);

      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      sections.forEach(section => {
        section.classList.remove('active', 'section-hidden');
      });
      targetSection.classList.add('active');

      document.body.classList.toggle('projects-page', targetId === 'projects');
    });
  });

  // Carousel
  let next = document.querySelector('.next')
  let prev = document.querySelector('.prev')
  
  next.addEventListener('click', function(){
      let items = document.querySelectorAll('.item')
      document.querySelector('.slide').appendChild(items[0])
  })
  
  prev.addEventListener('click', function(){
      let items = document.querySelectorAll('.item')
      document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
  })

  // PDF popup
  const buttons = document.querySelectorAll('.pdf-button');
  const popup = document.getElementById('popup');
  const iframe = document.getElementById('pdfViewer');
  const closeBtn = document.querySelector('.close-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const pdfURL = button.getAttribute('data-pdf');
      iframe.src = pdfURL;
      popup.style.display = 'flex';
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
      iframe.src = '';
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
      iframe.src = '';
    }
  });
  

  document.getElementById('openInstagramFeed').addEventListener('click', function() {
    document.querySelector('.elfsight-app-ed55be1f-d0f0-41e3-8fdf-ba37fd5cb058').style.display = 'block';
    document.querySelector('.popup-ig').style.display = 'block';
    document.querySelector('.overlay-ig').style.display = 'block';
  });
  
  document.querySelector('.close-popup-ig').addEventListener('click', function() {
    document.querySelector('.popup-ig').style.display = 'none';
    document.querySelector('.elfsight-app-ed55be1f-d0f0-41e3-8fdf-ba37fd5cb058').style.display = 'none';
    document.querySelector('.overlay-ig').style.display = 'none';
  });
  
  document.querySelector('.overlay-ig').addEventListener('click', function() {
    document.querySelector('.popup-ig').style.display = 'none';
    document.querySelector('.elfsight-app-ed55be1f-d0f0-41e3-8fdf-ba37fd5cb058').style.display = 'none';
    document.querySelector('.overlay-ig').style.display = 'none';
  });
  

  
});
