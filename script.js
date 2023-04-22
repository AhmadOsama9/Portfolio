let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
      });
      document.querySelectorAll(`header nav a[href="#${id}"]`).forEach(link => {
        link.classList.add('active');
      });
    }
  });

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);


});


let menu = document.querySelector(".Menu");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("active");
    navbar.classList.toggle("active");
};


ScrollReveal({
    distance: '5rem',
    duration: 2000 ,
    delay: 200
  });
  
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.projects-container, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content h1', { origin: 'right' });
  


const typed = new Typed('.auto-typed', {
    strings: ['Computer Science Student', 'Front-End Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});


const serviceID = 'service_8834455';
const templateID = 'template_laovrx6';
const userID = 'ZFJSlFLigYlimHQN3';

const form = document.querySelector('#contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  const emailPattern = /^[^\s@]+@(hotmail|gmail|yahoo)\.com$/;

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address from hotmail, gmail, or yahoo.');
    return;
  }

  

  emailjs.send(serviceID, templateID, { name, email, message }, userID)
    .then((response) => {
      alert('Email sent successfully!', response.status, response.text);
    }, (error) => {
      alert('Email failed to send!', error);
    });

  form.reset();
});

