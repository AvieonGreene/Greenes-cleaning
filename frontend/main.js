const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const loginform = document.getElementById('login-form') 
const First_Name_err = document.getElementById('First_Name_err');

loginform.addEventListener("submit", (e) => {
 
  
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

  e.preventDefault();

})


// Get the input element from the form
const inputElement = document.querySelector("input");

// Add an event listener to the form submission
document.getElementById("login-form").addEventListener("submit", function(event) {
  const inputValue = inputElement.value;

  // Define a regular expression pattern for letters A-Z (case-insensitive)
  const pattern = /^[A-Za-z]+$/;

  // Test the input value against the pattern
  if (!pattern.test(inputValue)) {
    // If the pattern doesn't match, prevent the form submission and display an error message
    event.preventDefault();
    alert("Only letters A-Z are allowed.");
  }
});

let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");

let url = "https://meme-api.com/gimme/";
let subreddits = ["catmemes", "wholesomemes", "dogmemes", "me_irl"];

let getMeme = () => {
  let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
  console.log(randomSubreddit);

  fetch(url + randomSubreddit)
    .then(resp => resp.json())
    .then(data => {
      console.log(data);

      let memeImg = new Image();
      memeImg.src = data.url;
      meme.src = data.url;

      memeImg.onload = () => {
        meme.appendChild(memeImg);
        title.innerHTML = data.title;
      };
    });
};


getMemeBtn.addEventListener("click", getMeme);

window.addEventListener("load", getMeme);


















