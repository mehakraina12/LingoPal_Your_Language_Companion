let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () => {
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
   document.querySelector('.logo img').src = 'static/images/logo-dark.png'; // Change logo source to logo-dark.png
   document.querySelectorAll('.notification-title, .button i').forEach(element => {
       element.style.color = 'white'; // Change color of notification titles and icons to white
   });
   document.querySelectorAll('td[style*="font-family: Arial"], td[style*="font-size: 20px;"]').forEach(td => {
      td.style.color = 'white';
  });
  document.querySelectorAll('td').forEach(td => {
   td.style.border = '1px solid white';
});
}

const disableDarkMode = () => {
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
   document.querySelector('.logo img').src = 'static/images/logo.png'; // Change logo source to logo-light.png
   document.querySelectorAll('.notification-title, .button i').forEach(element => {
      element.style.color = 'black'; // Change color of notification titles and icons to white
  });
  document.querySelectorAll('td[style*="font-family: Arial"], td[style*="font-size: 20px;"]').forEach(td => {
   td.style.color = 'black';
});
document.querySelectorAll('td').forEach(td => {
   td.style.border = '1px solid black';
});
}



if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}

document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("registrationForm").addEventListener("submit", function(event) {
       var password = document.getElementById("password").value;
       var confirmPassword = document.getElementById("confirmPassword").value;
       if (password != confirmPassword) {
           document.getElementById("passwordError").textContent = "Passwords do not match";
           event.preventDefault(); // Prevent form submission
       }
   });
});


document.getElementById("registrationForm").addEventListener("submit", function(event) {
   // Prevent the default form submission
   event.preventDefault();
   
   // Redirect to verify.html
   window.location.href = "verify.html";
});

// Get the quiz links
const quizLinks = document.querySelectorAll('.box');

// Add click event listener to each quiz link
quizLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevent the default behavior of the link (i.e., opening the href)
        event.preventDefault();
        
        // Get the href attribute of the clicked link
        const quizUrl = this.getAttribute('href');
        
        // Open the quiz.html page
        window.location.href = quizUrl;
    });
});
