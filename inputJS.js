const PASSWORD_INPUT = document.querySelector(".password-input");

PASSWORD_INPUT.addEventListener("keypress", passwordChecker);

document
  .querySelector(".password-area")
  .addEventListener("click", resetPassword);

PASSWORD_INPUT.addEventListener("keyup", newValue);

let secretValue = [];
let password = [];

function newValue() {
  let key = event.key;
  switch (true) {
    case key === "Backspace" || event.key === "ArrowLeft":
      secretValue.pop();
      password.pop();
      break;
    case key == "ArrowUp":
      resetPassword();
      break;
    case password.length >= 4:
      window.alert(password.slice(0, 4).join(""));
      resetPassword();
      break;
    default:
      break;
  }

  PASSWORD_INPUT.value = secretValue.join("");
}

function passwordChecker() {
  PASSWORD_INPUT.animate(
    keyInputPressAnimation,
    keyInputPressAnimationDuration
  );
  let key = event.key;

  if (Number(key) >= 0 && key != " ") {
    secretValue.push("•");
    password.push(key);
  } else {
    PASSWORD_INPUT.setAttribute("disabled", true);
    PASSWORD_INPUT.animate(errorAnimation, errorAnimationDuration);
    PASSWORD_INPUT.removeAttribute("disabled");
    setTimeout(function () {
      PASSWORD_INPUT.focus();
    }, 800);
  }
}

function resetPassword() {
  password = [];
  secretValue = [];
  PASSWORD_INPUT.value = "";
  PASSWORD_INPUT.focus();
}

let keyInputPressAnimation = [{ fontSize: "max(5.9vw, 3.9rem)" }];
let keyInputPressAnimationDuration = { duration: 200, iterations: 1 };

let errorAnimation = [
  {
    paddingLeft: "2vw",
    color: "hsl(0, 100%, 50%)",
    outlineColor: "red",
    boxShadow: "inset 0px 0px 0px 1vw hsla(0, 100%, 50%, 0.1), 1vw 1.5vh",
    opacity: "100%",
  },

  {
    color: "hsl(0, 90%, 65%)",
    outlineColor: "red",
    opacity: "100%",
  },
];
let errorAnimationDuration = { duration: 200, iterations: 4 };
