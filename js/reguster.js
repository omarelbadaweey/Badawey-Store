// Variables Form => inputs 
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var regusterBtn = document.getElementById("regusterBtn");
var iconPassword = document.getElementById("iconPassword");
var info = document.querySelectorAll(".info");
// validate form & save to values in LocalStorage
regusterBtn.addEventListener("click" , (e) =>{
    e.preventDefault()

    if (username.value == "" || email.value == "" || password.value == "") {

        info.forEach(item =>{
            item.classList.remove("!hidden")
        })
        username.focus()

    }else{
        localStorage.setItem("username" , username.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password" , password.value);
        setTimeout(() =>{
            location = "login.html";
        },1000);
        // 

        localStorage.setItem("account", JSON.stringify({
            name: username.value,
            emailName: email.value,
            // phone: "01008790584"
        }));
    };

    // username.addEventListener("input" , () =>{
    //     // if (username !== " ") {
    //         info[0].classList.add("!hidden")
    //     // }
    //     })
    // email.addEventListener("input" , () =>{
    //     info[1].classList.add("!hidden")
    //     })
    // password.addEventListener("input" , () =>{
    //     info[2].classList.add("!hidden")
    //     })
});

iconPassword.addEventListener("click" , () =>{
    iconPassword.classList.toggle("fa-eye-slash");
    iconPassword.classList.toggle("fa-eye");
    // if المختصره 
    iconPassword.classList.contains("fa-eye")? password.type =  "text" : password.type = "password";
})
