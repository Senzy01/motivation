function handleSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const response = document.getElementById("response");

  if (name && email && message) {
    response.textContent = "Thanks for registering! We'll get back to you.";
  } else {
    response.textContent = "Please fill out all fields.";
  }
}