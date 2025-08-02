let parentPhones = document.getElementById("parentPhones");
let addCart = localStorage.getItem("productInCart");
if (addCart) {
    let items = JSON.parse(addCart);
    drowCard(items);
}
function drowCard(products) {
        parentPhones.innerHTML = ""; 
        products.forEach((element, index) => {
            var html = `
                <div class="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-500">
                    <img src="${element.img}" alt="iPhone 16 Pro Max" class="object-center w-35 h-35 mb-4 rounded-xl">
                    <h3 class="text-xl font-bold text-black mb-2">${element.name}</h3>
                    <p class="text-gray-600  text-center">${element.desc}</p>
                    <p class="text-xl my-2 text-amber-700 underline" >${element.price}</p>
                    <button class="bg-amber-600 text-white px-6 py-2 rounded-full font-bold hover:bg-black hover:text-amber-600 transition cursor-pointer" onclick= "remove(${index})">حذف من العربه</button>
                </div>
            `
            parentPhones.innerHTML += html
        });
};

function remove(index) {
    let addItem = localStorage.getItem("productInCart") ? JSON.parse(localStorage.getItem("productInCart")) : [];
    addItem.splice(index, 1); // حذف العنصر حسب الـ index
    localStorage.setItem("productInCart", JSON.stringify(addItem));
    drowCard(addItem);
    countProducts.innerHTML = addItem.length;
    if (countProducts.innerText == 0) {
    buy.classList.add("!hidden");
    }else {
        buy.classList.remove("!hidden");
    }
}
// 
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

var countProducts = document.getElementById("countProducts");
let buy = document.getElementById("buy");
let addItem = localStorage.getItem("productInCart") ? JSON.parse(localStorage.getItem("productInCart")) : [];
if (addItem) {
    countProducts.innerHTML = addItem.length;
} ;
if (countProducts.innerText == 0) {
    buy.classList.add("!hidden");
}else {
    buy.classList.remove("!hidden");
}


