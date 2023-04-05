var nameError = document.getElementById("name-error");
var numberError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

const form = document.getElementById("feedback");

// let popup = document.getElementById('pop-up')

// function openPopup() {
//     popup.classList.add("open-popup");
// }
// function closePopup() {
//     popup.classList.remove("open-popup");
// }

function validateName() {
  var name = document.getElementById("contact-name").value;
  var trimName = name.trim();

  if (name.length == 0) {
    nameError.innerHTML = "name is required";
    return false;
  }
  if (!trimName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "write full name";
    return false;
  }
  nameError.innerHTML = '<img src="./svg/check.svg">';
  return true;
}

function validateNumber() {
  var number = document.getElementById("contact-number").value;

  if (number.length == 0) {
    numberError.innerHTML = "contact number is required";
    return false;
  }

  if (number.length !== 10) {
    numberError.innerHTML = "number requires 10 digits";
    return false;
  }

  if (!number.match(/^[0-9]{10}$/)) {
    numberError.innerHTML = "Invalid input";
    return false;
  }
  numberError.innerHTML = '<img src="./svg/check.svg">';
  return true;
}

function validateEmail() {
  var email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailError.innerHTML = "email is required";
    return false;
  }

  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = "Invalid email";
    return false;
  }

  emailError.innerHTML = '<img src="./svg/check.svg">';
  return true;
}

function validateMessage() {
  var message = document.getElementById("message").value;
  var required = 25;
  var remain = required - message.length;

  if (remain > 0) {
    messageError.innerHTML = remain + " characters required";
    return false;
  }

  messageError.innerHTML = "";
  return true;
}

function validateRadio_01() {
  var radioButtons = document.getElementsByName("Question01");
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      break;
    }
  }
  if (i == radioButtons.length) {
    return (document.getElementById("Question01-error").innerHTML = "required");
  }
  return (document.getElementById("Question01-error").innerHTML = "");
}

function validateRadio_02() {
  var radioButtons = document.getElementsByName("Question02");
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      break;
    }
  }
  if (i == radioButtons.length) {
    return (document.getElementById("Question02-error").innerHTML = "required");
  }
  return (document.getElementById("Question02-error").innerHTML = "");
}

function description() {
  var radios = document.getElementsByName("Question02");
  var feedbackSection = document.getElementById("Q2-display");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      feedbackSection.style.display = "block";
      return;
    }
  }
  feedbackSection.style.display = "none";
}

function validateRadio_04() {
  var radioButtons = document.getElementsByName("Question04");
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      break;
    }
  }
  if (i == radioButtons.length) {
    return (document.getElementById("Question04-error").innerHTML = "required");
  }
  return (document.getElementById("Question04-error").innerHTML = "");
}

function resetForm() {
  document.getElementById("feedback").reset();
}




// const submitButton = document.getElementById("submit-button");
// submitButton.addEventListener("click", function (event) {
//   event.preventDefault();
//   if (
//     !validateName() ||
//     !validateNumber() ||
//     !validateEmail() ||
//     validateRadio_01() ||
//     validateRadio_02() ||
//     !validateMessage() ||
//     validateRadio_04()
//   ) {
//     submitError.style.display = "block";
//     submitError.innerHTML = "Correct the errors to submit";
//     setTimeout(() => {
//       submitError.style.display = "none";
//     }, 3000);
//     return false;
//   }

//   messageError.innerHTML = "";
//   feedback.submit();
// });



form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(form);

  const success = await fetch("https://formspree.io/f/mqkodrgg", {
  method: "POST",
  body: JSON.stringify({
   Subject: data.get("subject")
  })
 });

  const dialog = document.getElementById("success_dialog");
  const div = document.createElement("div");
  div.innerHTML = success;
  dialog.appendChild(div);
  dialog.showModal();
});


















// const comment_rating=document.getElementById('Q2-display').value;
// const comment = document.getElementById('message').value;

// const subject = "New comment from " + trimName;
// const body = "Name: " + trimName + "\n\nContact Number: " + number + "\n\nEmail: " + email;
// const mailtoLink = "mailto:sithulimalwana@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
// window.location.href = mailtoLink;

// function validateForm() {
//     if (
//       !validateName() ||
//       !validateNumber() ||
//       !validateEmail() ||
//       validateRadio_01() ||
//       validateRadio_02() ||
//       !validateMessage() ||
//       validateRadio_04()
//     ) {
//       submitError.style.display = "block";
//       submitError.innerHTML = "Correct the errors to submit";
//       setTimeout(function () {
//         submitError.style.display = "none";
//       }, 3000);
//       return false;
//     }

//     messageError.innerHTML = "";
//     return true;
//   }
