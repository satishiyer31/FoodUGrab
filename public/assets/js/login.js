console.log("Inside Login.js");
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#user').value.trim();
    const password = document.querySelector('#pwd').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/customers/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
          console.log("Logged in");
          data = await response.json();
          // console.log(data);
          sessionStorage.setItem("customer_id",data.user.id);
          
        document.location.replace('/restaurants');
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert("loggedin");
        document.location.replace('/restaurants');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  document
    .querySelector('#login-form')
    .addEventListener('submit', loginFormHandler);
  
//   document
//     .querySelector('.signup-form')
//     .addEventListener('submit', signupFormHandler);
  