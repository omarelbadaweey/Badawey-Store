// Variables Form => inputs 
var username = document.getElementById("username");
// var email = document.getElementById("email");
var password = document.getElementById("password");
var loginBtn = document.getElementById("loginBtn");
var iconPassword = document.getElementById("iconPassword");
var GetUser = localStorage.getItem("username");
var GetPassword = localStorage.getItem("password");
// validate form & save to values in LocalStorage
loginBtn.addEventListener("click" , (e) =>{
    e.preventDefault()
    if (username.value === "" || password.value === "" ){
        Swal.fire({
            title: "password or username is empty",
            icon: "error"
        });
    } else {
        if (GetUser.trim() === username.value.trim() && GetPassword.trim() === password.value.trim()) {
            Swal.fire({
                title: "Drag me!",
                icon: "success",
                draggable: true
            });
            setTimeout(() =>{
                location = "index.html";
            },2000);
        }  else if (username.value !== GetUser || password.value !== GetPassword) {
            Swal.fire({
                title: "password or username is empty",
                icon: "error"
            });
        }
    };
});

iconPassword.addEventListener("click" , () =>{
    iconPassword.classList.toggle("fa-eye-slash");
    iconPassword.classList.toggle("fa-eye");
    // if المختصره 
    iconPassword.classList.contains("fa-eye")? password.type =  "text" : password.type = "password";
})
