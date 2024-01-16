//Password Web design

//Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);
//Event Listener
function btnClicked() {
  //Input
  let user = document.getElementById("user-in").value;
  let pwd = document.getElementById("pwd-in").value;
  let confirm = document.getElementById("confirm-in").value;
  let validUser = false;
  let validPwd = false;

  //Check if username is valid
  if (user.length === 0) {
    document.getElementById("user-out").innerHTML = `*required field`;
    document.getElementById("user-in").style.border = "2px solid red";
  } else if (user.length < 4 || user.length > 8) {
    document.getElementById("user-out").innerHTML = `
    *Username must be 4-8 characters`;
    document.getElementById("user-in").style.border = "2px solid red";
  } else if (user.length > 3 && user.length < 9) {
    document.getElementById("user-out").innerHTML = `
     Valid username`;
    document.getElementById("user-in").style.border = "2px solid green";
    validUser = true;
  }

  //Check if Password and confirmaion is valid
  if (pwd.length === 0) {
    document.getElementById("pwd-out").innerHTML = `*required field`;
    document.getElementById("pwd-in").style.border = "2px solid red";
  }
  if (confirm.length === 0) {
    document.getElementById("confirm-out").innerHTML = `*required field`;
    document.getElementById("confirm-in").style.border = "2px solid red";
  } else if (pwd !== confirm) {
    document.getElementById("pwd-out").innerHTML = `
    *Passwords must match`;
    document.getElementById("confirm-out").innerHTML = `
    *Passwords must match`;
    document.getElementById("pwd-in").style.border = "2px solid red";
    document.getElementById("confirm-in").style.border = "2px solid red";
  } else if (pwd === confirm) {
    document.getElementById("pwd-out").innerHTML = `
   Valid password`;
    document.getElementById("confirm-out").innerHTML = `
   Valid password`;
    document.getElementById("pwd-in").style.border = "2px solid green";
    document.getElementById("confirm-in").style.border = "2px solid green";
    validPwd = true;
  }

  //Check if username and passwords are valid
  if (validUser === true && validPwd === true) {
    document.getElementById("btn-out").innerHTML = `Sign up successful`;
  }
}
