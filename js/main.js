var allProducts = document.getElementById("allProducts");
function code() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "data.json", true);
    xhttp.onload = function () {
        var data =  JSON.parse(this.responseText)
        var product = data.products;
        product.forEach(item => {
            var html = `
            <div class="bg-white rounded-2xl shadow-2xl p-5 flex flex-col items-center hover:scale-105 transition-transform duration-500">
                <img src="${item.img}" alt="iPhone" class="w-28 h-28 mb-4 rounded-xl">
                <h3 class="text-2xl font-bold text-black mb-2">${item.name}</h3>
                <p class="text-gray-600 mb-4 text-center">${item.desc}</p>
                <a href="${item.link}" class="bg-amber-600 text-white px-6 py-2 rounded-full font-bold hover:bg-black hover:text-amber-600 transition">تسوق الآن</a>
            </div>
            `
            allProducts.innerHTML += html
        });
    }
    xhttp.send();
}  
code()

const arrimg = [
        `   <div class="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center transition-transform duration-500 absolute w-[100%] h-[100%]">
    <img src="img/iPhone-slider.jpg" alt="iPhone 16 Pro Max" class="object-center w-[100%] h-[100%] mb-4 rounded-xl absolute top-0 left-0 outline-3 outline-amber-500">
    <h3 class=" font-bold text-amber-500 text-4xl capitalize mb-2 absolute top-10"> iphone</h3>
            <a href="iphone.html" class="bg-amber-600 text-white px-6 py-2 rounded-full font-bold hover:bg-black hover:text-amber-600 transition cursor-pointer absolute bottom-10"> تسوق الان </a>
        </div>`,
        `   <div class="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center transition-transform duration-500 absolute w-[100%] h-[100%]">
    <img src="img/airpods-slider.jpg" alt="iPhone 16 Pro Max" class="object-center object-fill w-[100%] h-[100%] mb-4 rounded-xl absolute top-0 left-0 outline-3 outline-amber-500">
    <h3 class=" font-bold text-amber-500 text-4xl capitalize mb-2 absolute top-10"> air pods</h3>
            <a href="airpods.html" class="bg-amber-600 text-white px-6 py-2 rounded-full font-bold hover:bg-black hover:text-amber-600 transition cursor-pointer absolute bottom-10"> تسوق الان </a>
        </div>`,
        `   <div class="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center transition-transform duration-500 absolute w-[100%] h-[100%]">
    <img src="img/main-watch.jpg" alt="iPhone 16 Pro Max" class="object-center w-[100%] h-[100%] mb-4 rounded-xl absolute top-0 left-0 outline-3 outline-amber-500">
    <h3 class=" font-bold text-amber-500 text-4xl capitalize mb-2 absolute top-10"> apple watch </h3>
            <a href="watch.html" class="bg-amber-600 text-white px-6 py-2 rounded-full font-bold hover:bg-black hover:text-amber-600 transition cursor-pointer absolute bottom-10"> تسوق الان </a>
        </div>`,
    `   <div class="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center transition-transform duration-500 absolute w-[100%] h-[100%]">
    <img src="img/main-airtag.jpg" alt="iPhone 16 Pro Max" class="object-center w-[100%] h-[100%] mb-4 rounded-xl absolute top-0 left-0 outline-3 outline-amber-500">
    <h3 class=" font-bold text-amber-500 text-4xl capitalize mb-2 absolute top-10"> air tag</h3>
            <a href="airtag.html" class="bg-amber-600 text-white px-6 py-2 rounded-full font-bold hover:bg-black hover:text-amber-600 transition cursor-pointer absolute bottom-10"> تسوق الان </a>
        </div>`,
];
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let img_container = document.getElementById("img_container");
let btn_container = document.getElementById("btn_container");
let r = 0;

// 
img_container.innerHTML = arrimg[r]
prev.disabled = true
img_container.innerHTML += ` <p class="relative top-5 left-5 z-20 text-amber-50 bg-amber-500 w-[fit-content] font-bold px-2 p-1 rounded-2xl capitalize">product #${r+1} of ${arrimg.length}</p>`
next.addEventListener("click", () => {
    prev.disabled = false
    r++;
    img_container.innerHTML = arrimg[r]
    img_container.innerHTML += ` <p class="relative top-5 left-5 z-20 text-amber-50 bg-amber-500 w-[fit-content] font-bold px-2 p-1 rounded-2xl capitalize">product #${r+1} of ${arrimg.length}</p>`
    if (r+1 == arrimg.length) {
        next.disabled = true
    }
    btn_container.getElementsByClassName("active-num")[0].classList.remove("active-num");
    btn_container.getElementsByTagName("button")[r].classList.add("active-num")
});

// 
prev.addEventListener("click", () => {
    next.disabled = false
    r--;
    img_container.innerHTML = arrimg[r]
    img_container.innerHTML += ` <p class="relative top-5 left-5 z-20 text-amber-50 bg-amber-500 w-[fit-content] font-bold px-2 p-1 rounded-2xl capitalize">product #${r+1} of ${arrimg.length}</p>`
    if (r == 0) {
        prev.disabled = true
    }
        btn_container.getElementsByClassName("active-num")[0].classList.remove("active-num");
    btn_container.getElementsByTagName("button")[r].classList.add("active-num")
});
// 
let allBtn = document.querySelectorAll("#btn_container button");
allBtn.forEach((item , index) =>{
    item.addEventListener("click" , () =>{
        btn_container.getElementsByClassName("active-num")[0].classList.remove("active-num");
        item.classList.add("active-num");
        img_container.innerHTML = arrimg[index]
        img_container.innerHTML += ` <p class="relative top-5 left-5 z-20 text-amber-50 bg-amber-500 w-[fit-content] font-bold px-2 p-1 rounded-2xl capitalize">product #${index+1} of ${arrimg.length}</p>`
        r = index;
        if (index == arrimg.length-1) {
            next.disabled = true
            prev.disabled = false
        } else if (index == 0){
            prev.disabled = true
            next.disabled = false
        }else{
            next.disabled = false
            prev.disabled = false
        }

    })
});
// //////////////
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

let viewProductsDiv = document.getElementById("viewProduct");
let badge = document.getElementById("badge");
function showProductINCart() {
    // جلب المنتجات من localStorage
    let addItem = localStorage.getItem("productInCart") ? JSON.parse(localStorage.getItem("productInCart")) : [];
    viewProductsDiv.innerHTML = ""; // امسح القديم
    addItem.forEach(item => {
        viewProductsDiv.innerHTML += `<p>${item.name}</p><img src="${item.img}" alt="${item.name}" class="w-10 h-10 inline-block ml-2">`;
    });
    // تحديث العداد
    badge.style.display = addItem.length > 0 ? "block" : "none";
    badge.innerHTML = addItem.length;
}
showProductINCart();