

function resetForm() {
  document.getElementById("feedback").reset();
}

const feedbackForm = document.getElementById("feedback");
const submitMessage = document.getElementById("submit-message");

feedbackForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("contact-name").value.trim();
  const phone = document.getElementById("contact-number").value.trim();
  const email = document.getElementById("contact-email").value.trim();
  const question1 = document.querySelector('input[name="Question01"]:checked');
  const question2 = document.querySelector('input[name="Question02"]:checked');
  const question4 = document.querySelector('input[name="Question04"]:checked');
  const rating = document.getElementById("rating").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "") {
    document.getElementById("name-error").textContent =
      "Please enter your name";
  } else {
    document.getElementById("name-error").textContent = "";
  }

  if (phone === "") {
    document.getElementById("phone-error").textContent =
      "Please enter your phone number";
  } else if (!/^\d{10}$/.test(phone)) {
    document.getElementById("phone-error").textContent =
      "Please enter a valid phone number";
  } else {
    document.getElementById("phone-error").textContent = "";
  }

  if (email === "") {
    document.getElementById("email-error").textContent =
      "Please enter your email address";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    document.getElementById("email-error").textContent =
      "Please enter a valid email address";
  } else {
    document.getElementById("email-error").textContent = "";
  }

  if (!question1) {
    document.getElementById("Question01-error").textContent =
      "Please select an option";
  } else {
    document.getElementById("Question01-error").textContent = "";
  }

  if (!question4) {
    document.getElementById("Question04-error").textContent =
      "Please select an option";
  } else {
    document.getElementById("Question04-error").textContent = "";
  }

  if (!question2) {
    document.getElementById("Question02-error").textContent =
      "Please select an option";
  } else {
    document.getElementById("Question02-error").textContent = "";
    document.getElementById("Q2-display").style.display = "block";
    if (rating === "") {
      document.getElementById("message-error").textContent =
        "Please enter your feedback";
    } else {
      document.getElementById("message-error").textContent = "";
    }
  }
  // All fields are valid, so submit the form and display the message
  if (
    name &&
    phone &&
    email &&
    question1 &&
    question2 &&
    question4 &&
    rating &&
    message
  ) {
    try {
      const formData = new FormData(event.target);
      const response = await fetch("https://formspree.io/f/mrgvywyv", {
        method: "POST",
        body: formData,
        Name: name,
        Phone: phone,
        Email: email,
        headers: {
          Accept: "application/json",
        },
      });
      const json = await response.json();
      document.getElementById('feedback').style.display ='none'
      document.getElementById('submit-message').style.display ='block'
    } catch (error) {
      alert("There was a problem submitting the form.");
    }
  }
});
