let items = document.querySelector(".cart-items");
let totalPrice = document.querySelector(".totalPrice");
let burgerCount = document.querySelector(".burger-count");
let friesCount = document.querySelector(".fries-count");
let drinksCount = document.querySelector(".drinks-count");

items.addEventListener("click", (e) => {
    if(e.target.classList.contains("adjust-btn")){
        let value = e.target.nextElementSibling;
        if(value === null){
            value = e.target.previousElementSibling.innerText;
            value++;
            e.target.previousElementSibling.innerText = value;
        }else{
            value = value.innerText;
            value--;
            if(value >= 0){
                e.target.nextElementSibling.innerText = value;
            }else{
                value = 0;
            }
        }
    }

    totalPrice.innerText = burgerCount.innerText * 699 + friesCount.innerText * 349 + drinksCount.innerText * 150;

});

let order = document.querySelector(".order-btn");

order.addEventListener("click", () => {
    let orderPlaced = document.querySelector(".ordered");
    let orderId = Math.floor(Math.random() * 300);
    if(burgerCount.innerText >= 1 && friesCount.innerText >= 1 && drinksCount.innerText >= 1){
        orderPlaced.style.display = "flex";
        setTimeout(() => {
            orderPlaced.innerHTML = `<h1>Your Order Has Been Placed!</h1>
            <span>Order Id: <span class="order-id">${orderId}</span></span>
            <img src="./Super Over Combo - Veg.jpg" alt="">
            <button class="close-btn">Close</button>`;
        }, 3000);
    }
});


let closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
    let orderPlaced = document.querySelector(".ordered");
    orderPlaced.style.display = "none";
})