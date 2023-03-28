function validateForm() {
  const reset = document.getElementsByName("reset");
  let isChecked = false;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  for (let i = 0; i < reset.length; i++) {
    if (reset[i].checked) {
      isChecked = true;
      break;
    }
  }
  if (!isChecked) {
    alert("Please select a reset method.");
    return false;
  }

  if (document.getElementById("mail").checked) {
    const emailCheck = /^[a-zA-Z0-9\._]+@[a-zA-Z0-9]+\.([a-z]+)*$/;
    if (!emailCheck.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  }

  return true;
}

const sms = document.getElementById("sms");
const mail = document.getElementById("mail");
const emailDiv = document.querySelector(".email-address");
const phoneDiv = document.querySelector(".phone-number");

sms.addEventListener("change", function() {
  if (sms.checked) {
    phoneDiv.style.display = "block";
    emailDiv.style.display = "none";
  } else {
    phoneDiv.style.display = "none";
    emailDiv.style.display = "block";
  }
});

mail.addEventListener("change", function() {
  if (mail.checked) {
    phoneDiv.style.display = "none";
    emailDiv.style.display = "block";
  }
});

emailDiv.style.display = "block";