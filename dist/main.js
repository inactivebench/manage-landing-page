const navToggle = document.querySelector(".nav-toggle");
const primaryHeader = document.querySelector(".primary-header");
const nav = document.querySelector(".nav");
const img = document.querySelector(".toggle-img");
const error = document.querySelector(".error-span");
const emailEl = document.querySelector(".email-input");
const submitBtn = document.querySelector(".submit-btn");

navToggle.addEventListener("click", () => {
  const hidden = nav.getAttribute("aria-hidden");
  if (hidden === "true") {
    nav.classList.remove("hidden");
    nav.classList.add("block");
    nav.setAttribute("aria-hidden", false);
    img.setAttribute("src", "./images/icon-close.svg");
    // primaryHeader.setAttribute("data-overlay", false);
  } else {
    nav.classList.remove("block");
    nav.classList.add("hidden");
    nav.setAttribute("aria-hidden", true);
    img.setAttribute("src", "./images/icon-hamburger.svg");
    // primaryHeader.setAttribute("data-overlay", true);
  }
});

//slider

const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: false,
  dots: true,
  arrows: false,
  centerMode: true,
  responsive: {
    960: {
      dots: false,
      arrows: false,
      autoplay: true,
      autoplayHoverPause: true,
    },
  },
});

// check email validity
const isRequired = (value) => (value === "" ? false : true);

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const showError = (input, message) => {
  // show the error message
  input.style.borderWidth = "2px";
  input.style.borderColor = "red";
  input.style.color = "red";
  error.textContent = message;
};

const showSuccess = (input) => {
  // hide the error message
  input.style.borderWidth = "";
  input.style.borderColor = "";
  input.style.color = "";
  error.textContent = "";
};

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, "Please insert a valid email");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "Please insert a valid email");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

// input validation
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let isEmailValid = checkEmail();
});
