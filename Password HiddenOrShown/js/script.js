 // Functions for select elems with id & class
 var $ = document;
 function _id(id_name) {
   return $.querySelector(id_name);
 }

 function _class(class_name) {
   return $.querySelector(class_name);
 }

 // Select Elems
 var togglePassword = _class(".toggle-password");
 var passwordField = _id("#password-field");

 // Fire click event on eye icon
 togglePassword.addEventListener("click", function () {
   if (passwordField.type == "text") {
     passwordField.type = "password";
     togglePassword.classList.toggle("active");
   } else {
     passwordField.type = "text";
     togglePassword.classList.toggle("active");
   }
 })