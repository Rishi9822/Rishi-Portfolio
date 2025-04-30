//Animation at home 
var typed = new Typed('#element', {
  strings: ['Tech Enthusiast', 'Programmer', 'Web Developer'],
  typeSpeed: 70,
});


let menulist = document.getElementById("menu-list")
menulist.style.maxHeight = "0px";
function toggleMenu(){
  if(menulist.style.maxHeight == "0px"){
    menulist.style.maxHeight = "300px";
  }
  else{
    menulist.style.maxHeight = "0px";
  }
}

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