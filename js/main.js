//Animation at home 
var typed = new Typed('#element', {
  strings: ['Tech Enthusiast', 'Programmer', 'Web Developer'],
  typeSpeed: 70,
});

  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("scrolled", window.scrollY > 10);
  });

 let menulist = document.getElementById("menu-list");
  menulist.style.maxHeight = "0px";

  function toggleMenu() {
    if (menulist.style.maxHeight === "0px") {
      menulist.style.maxHeight = "600px"; // Increased height
    } else {
      menulist.style.maxHeight = "0px";
    }
  }
  // Auto-hide menu when a link is clicked
  document.querySelectorAll('#menu-list li a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        menulist.style.maxHeight = "0px";
      }
    });
  });

function bucket() {
  const contactSection = document.getElementById('contactme');
  contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Skills and Education effect
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}


function scrollSkills(direction) {
  const slider = document.getElementById("skillsSlider");
  if (direction === 1) {
    slider.appendChild(slider.children[0]);
  } else {
    slider.insertBefore(slider.children[slider.children.length - 1], slider.children[0]);
  }
}

// Scroll animation for education timeline
const eduCards = document.querySelectorAll('.edu-card');
function revealCards() {
  eduCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      card.classList.add('visible');
    }
  });
}
document.addEventListener('scroll', revealCards);
document.addEventListener('DOMContentLoaded', revealCards);


// Google sheet 
const scriptURL = 'https://script.google.com/macros/s/AKfycby0bqjBY2GD_nq0MyJy7gg3YMQngB0GLhYVl_kYP9TpDFuDwaoEG4FsPebFt0YcOIt0/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent succesfully"
      setTimeout(function(){
        msg.innerHTML = ""
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})




// particlesJS("particles-js", {
//     particles: {
//       number: { value: 100 },
//       color: { value: "#00f5d4" },
//       shape: { type: "circle" },
//       opacity: { value: 0.4 },
//       size: { value: 2 },
//       line_linked: { enable: true, distance: 150, color: "#00f5d4", opacity: 0.2, width: 1 },
//       move: { enable: true, speed: 2 }
//     },
//     interactivity: {
//       events: { onhover: { enable: true, mode: "grab" } }
//     }
//   });

 particlesJS("particles-js", {
    particles: {
      number: { value: 80 },
      color: { value: "#00f5d4" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00f5d4",
        opacity: 0.4,
        width: 1
      },
      move: { enable: true, speed: 2 }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "grab" }
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: { opacity: 0.5 }
        }
      }
    },
    retina_detect: true
  });