let parentAirpods = document.getElementById("parentAirpods");
let viewProductsDiv = document.getElementById("viewProduct");
let badge = document.getElementById("badge");
function drowAirpods() {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "data.json", true);
    xhttp.onload = function () {
        let data = JSON.parse(this.responseText);
        product = data.airpods;
        product.forEach(element => {
            var html = `
                <div class="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-500">
                    <img src="${element.img}" alt="${element.name}" class="object-center w-40 h-40 mb-4 rounded-xl">
                    <h3 class="text-xl font-bold text-black mb-2">${element.name}</h3>
                    <p class="text-gray-600  text-center">${element.desc}</p>
                    <p class="text-xl my-2 text-amber-700 underline" >${element.price}</p>
                    <button class="bg-amber-600 text-white px-6 py-2 rounded-full font-bold hover:bg-black hover:text-amber-600 transition cursor-pointer" onclick= "addToCart(${element.id})">اضافه للعربه</button>
                </div>
            `
            parentAirpods.innerHTML += html;
        });

    }
    xhttp.send();
}
drowAirpods();
badge.style.display = "none";
let addItem = localStorage.getItem("productInCart") ? JSON.parse(localStorage.getItem("productInCart")) : [];
if (addItem) {
addItem.map((item) => {
    viewProductsDiv.innerHTML += `<p>${item.name}</p><img src="${item.img}" alt="${item.name}" class="w-10 h-10 inline-block ml-2">`;
})
badge.style.display = "block";
badge.innerHTML = addItem.length;
}
function addToCart(id) {
    let chooseItem = product.find((item) => item.id === id);
    viewProductsDiv.innerHTML += `<p>${chooseItem.name}</p><img src="${chooseItem.img}" alt="${chooseItem.name}" class="w-10 h-10 inline-block ml-2">`;
    cartDropdown.classList.remove("hidden");
    closeCard.addEventListener("click", () => {
        cartDropdown.classList.add("hidden");
    });
    addItem.push(chooseItem);
    localStorage.setItem("productInCart", JSON.stringify(addItem));
    let viewProductsDivP = document.querySelectorAll("#viewProduct p");
    badge.style.display = "block";
    badge.innerHTML = viewProductsDivP.length;
    
}
