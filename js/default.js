


// 
var logIn = document.getElementById("logIn");
var account = document.getElementById("account");
var GetUser = localStorage.getItem("username");
let logoutBtn = document.getElementById("logoutBtn");
logoutBtn.classList.add("hidden");
if (GetUser) {
    logIn.classList.add("hidden")
    account.classList.remove("hidden")
    account.innerText = GetUser
    logoutBtn.classList.remove("hidden");
}
// 
{var IconNav = document.querySelector(".IconNav");
var navBar = document.querySelector(".navBar");
IconNav.addEventListener("click" , () =>{
    IconNav.classList.toggle("closeIconNav")
    navBar.classList.toggle("translate-x-[100%]")
});}

var cartDropdown = document.getElementById("cartDropdown");
var iconCard = document.getElementById("iconCard");
let showCardPage = document.getElementById("showCardPage");
iconCard.addEventListener("click", () =>{
    cartDropdown.classList.toggle('hidden');
    document.getElementById("closeCard").addEventListener("click", () => {
        cartDropdown.classList.add('hidden');
    });
    
})
// // //
showCardPage.addEventListener("click", (e) => {
    e.preventDefault();
    if (GetUser) {
        window.location.href = "card.html";
    } else {
        window.location.href = "login.html";
    }
});

// log out
  document.getElementById('logoutBtn').onclick = function() {
    Swal.fire({
    title: "Do you want to log out?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, log out!",
    }).then((result) => {
  if (result.isConfirmed) {
    let timerInterval;
    Swal.fire({
    title: "You will be logged out",
    html: "I will close in <b></b> milliseconds.",
    timer: 1500,
    timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
    },
    willClose: () => {
        clearInterval(timerInterval);
    }
    }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
    }
    });
    localStorage.removeItem('user')
    setTimeout(() => {
        location = "login.html";
    }, 1500);
  }
});
};
// scroll backTop Function
{ var backTop = document.getElementById("backTop");
    window.addEventListener("scroll", () => {
        if (scrollY > 150) {
            backTop.classList.remove("hidden");
            backTop.addEventListener("click", () => {
                scroll({ top: "0" , behavior: "smooth" });
            })
        } else {
              backTop.classList.add("hidden");
        }
    })
};
// 
badge.style.display = addItem.length > 0 ? "block" : "none";
