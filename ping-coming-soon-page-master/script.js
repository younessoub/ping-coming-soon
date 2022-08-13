const email = document.querySelector('.email');
const error = document.querySelector('.error');
const submitButton = document.querySelector('.form button');

const form = document.querySelector('.form');

form.addEventListener('submit',handleSubmit);

function handleSubmit(e){
  if(email.value.trim()===''){
    e.preventDefault();
    showError("Whoops! It looks like you forgot to add your email");
  }
  else if(!validateEmail(email.value.trim())){
    e.preventDefault();
    showError("Please provide a valid email address");
  }
}

function showError(message){
  error.textContent = message;
  error.style.display = "block";
  email.style.border = "1px solid var(--lightRed)";
  email.style.marginBottom = "30px";
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};