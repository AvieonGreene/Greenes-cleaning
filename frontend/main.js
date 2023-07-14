const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const loginform = document.getElementById('login-form') 
const First_Name_err = document.getElementById('First_Name_err');

loginform.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const errors = [];

  if(fname.value.trim() === ""){
    errors.push("Fist name required")

  }

  if(lname.value.trim() === ""){
    errors.push("Last name required")

  }

  if(errors.length > 0){
    
    First_Name_err.innerHTML = errors.join(', ');
  }


})