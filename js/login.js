"using strict";
//?========================================= Calling elements =======================================
let f_SignIn = document.getElementById("SignIn");
let f_SignUp = document.getElementById("SignUp");
//================================
let d_container = document.getElementById("container");
//=================================
let b_signSwitch = document.querySelector("#Sign-switch-link");

//?================================ Globals =================================
let mode = "SignIn";
//?================================ code =================================

console.log(b_signSwitch);
b_signSwitch.addEventListener("click", function (e) {
  //*Set time methods
  //animation
  d_container.classList.add("SignBox-animate");
  //delete the animation
  setTimeout(function () {
    d_container.classList.remove("SignBox-animate");
  }, 500);

  //change the container
  setTimeout(function () {
    if (mode == "SignIn") {
      f_SignIn.classList.add("SignBox-hide");
      f_SignIn.classList.remove("SignBox-show");
      //*================================================
      f_SignUp.classList.remove("SignBox-hide");
      f_SignUp.classList.add("SignBox-show");

        b_signSwitch.innerText = "Have an account?"
      mode = "SignUp";
    } else if (mode == "SignUp") {
      f_SignIn.classList.remove("SignBox-hide");
      f_SignIn.classList.add("SignBox-show"); //make sure the element will be visible
      //*================================================
      f_SignUp.classList.add("SignBox-hide"); //make sure the element will be visible
      f_SignUp.classList.remove("SignBox-show"); //make sure the element will be invisible
      b_signSwitch.innerText = "Don't Have an account?";
      mode = "SignIn";
    }
  }, 250);

  // if (f_SignIn.classList.contains("SignBox-show")) {
  //     f_SignIn.classList.remove("SignBox-show");//make sure the element will be invisible

  //     f_SignIn.classList.add("SignBox-hide");

  //     f_SignUp.classList.add("SignBox-show");
  // }
  // else if (f_SignUp.classList.contains("SignBox-show")) {

  //  }
});


let  x = 44;

