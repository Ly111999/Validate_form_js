var btn_submit = document.forms["register-form"]["btn_submit"];

// function validateEmail(email) {
//   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

btn_submit.onclick = function () {

  //validate username
  var txt_username = document.forms["register-form"]["username"];
  var message_username = txt_username.nextElementSibling;
  console.log(txt_username.nextElementSibling);

  if (txt_username == null || txt_username.value.length == 0) {
    message_username.innerHTML = "* Vui lòng nhập tên của bạn";
    message_username.classList.remove("hidden-text");
  }
  else if (txt_username.value.length < 5) {
    message_username.innerHTML = "* Tên của bạn nhập quá ngắn";
    message_username.classList.remove("hidden-text");
  }
  else if (txt_username.value.length > 20) {
    message_username.innerHTML = "* Tên bạn nhập quá dài";
    message_username.classList.remove("hidden-text");
  }
  else {
    message_username.classList.add("hidden-text");
  }

  //validate password
  var password = document.forms["register-form"]["password"];
  var message_password = password.nextElementSibling;
  if (password == null || password.value.length == 0) {
    message_password.innerHTML = "*Vui lòng nhập password";
    message_password.classList.remove("hidden-text");
  }
  else {
    message_password.classList.add("hidden-text");
  }

  //validate full name
  var txt_fullName = document.forms["register-form"]["fullName"];
  var message_fullName = txt_fullName.nextElementSibling;

  if (txt_fullName == null || txt_fullName.value.length == 0) {
    message_fullName.innerHTML = "* Vui lòng nhập tên của bạn";
    message_fullName.classList.remove("hidden-text");
  }
  else if (txt_fullName.value.length < 5) {
    message_fullName.innerHTML = "* Tên của bạn nhập quá ngắn";
    message_fullName.classList.remove("hidden-text");
  }
  else if (txt_fullName.value.length > 30) {
    message_fullName.innerHTML = "* Tên bạn nhập quá dài";
    message_fullName.classList.remove("hidden-text");
  }
  else {
    message_fullName.classList.add("hidden-text");
  }

  //validate email
  var txt_email = document.forms["register-form"]["email"];
  var massage_email = txt_email.nextElementSibling;

  if (txt_email == null || txt_email.value.length == 0) {
    massage_email.innerHTML = "* Vui lòng điền email";
    massage_email.classList.remove("hidden-text");
  }
  else if (!txt_email.value.match(mailformat)) {
    massage_email.innerHTML = "* Vui lòng nhập đúng định dạng";
    massage_email.classList.remove("hidden-text");
  }
  else {
    massage_email.classList.add("hidden-text");
  }

}
