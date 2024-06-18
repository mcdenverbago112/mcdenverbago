// script.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('Registration');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting
      
      // Basic validation
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      
      if (email === '' || password === '') {
        alert('Please fill out all fields.');
        return; // Stop further execution
      }
      
      // Redirect to login.html
      window.location.href = 'Registrationv2.html';
    });
  });
  

















