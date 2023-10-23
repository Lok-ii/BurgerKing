let items = document.querySelector(".cart-items");
let totalPrice = document.querySelector(".totalPrice");
let burgerCount = document.querySelector(".burger-count");
let friesCount = document.querySelector(".fries-count");
let drinksCount = document.querySelector(".drinks-count");

items.addEventListener("click", (e) => {
  if (e.target.classList.contains("adjust-btn")) {
    let value = e.target.nextElementSibling;
    if (value == null) {
      value = e.target.previousElementSibling.innerText;
      value++;
      e.target.previousElementSibling.innerText = value;
    } else {
      value = value.innerText;
      value--;
      if (value >= 0) {
        e.target.nextElementSibling.innerText = value;
      } else {
        value = 0;
      }
    }
  }

  totalPrice.innerText =
    burgerCount.innerText * 699 +
    friesCount.innerText * 349 +
    drinksCount.innerText * 150;
});

let order = document.querySelector(".order-btn");

order.addEventListener("click", () => {
  myOrder();
});

let close = () => {
  let closeBtn = document.querySelector(".close-btn");

  closeBtn.addEventListener("click", () => {
    let orderPlaced = document.querySelector(".ordered");
    orderPlaced.style.display = "none";
  });
};

let showOrder = (image) => {
  let orderId = Math.floor(Math.random() * 300);
  let orderPlaced = document.querySelector(".ordered");
  orderPlaced.innerHTML = "";
  orderPlaced.innerHTML = `<h1>Your Order Has Been Placed!</h1>
                  <span>Order Id: <span class="order-id">${orderId}</span></span>
                  <img src="${image}" alt="">
                  <button class="close-btn">Close</button>`;

  close();
};

let myOrder = () => {
  let orderPromise = new Promise((resolve, reject) => {
    if (
      burgerCount.innerText >= 1 ||
      friesCount.innerText >= 1 ||
      drinksCount.innerText >= 1
    ) {
      resolve();
    } else {
      reject();
    }
  });

  orderPromise
    .then(() => {
      let orderPlaced = document.querySelector(".ordered");
      orderPlaced.innerHTML = `<div class="ring">Loading
      <span class="loading"></span>
  </div>`;

      orderPlaced.style.display = "flex";

      setTimeout(() => {
        let burgerCount = document.querySelector(".burger-count");
        let friesCount = document.querySelector(".fries-count");
        let drinksCount = document.querySelector(".drinks-count");
        if (
          burgerCount.innerText >= 1 &&
          friesCount.innerText >= 1 &&
          drinksCount.innerText >= 1
        ) {
          let image = "./Super Over Combo - Veg.jpg";
          showOrder(image);
        } else if (
          burgerCount.innerText >= 1 &&
          friesCount.innerText >= 1
        ) {
          let image = "./Burger-Fries.jpg";
          showOrder(image);
        } else if (
          burgerCount.innerText >= 1 &&
          drinksCount.innerText >= 1
        ) {
          let image = "./Crispy Chicken + Med Pepsi.jpg";
          showOrder(image);
        } else if (
          drinksCount.innerText >= 1 &&
          friesCount.innerText >= 1
        ) {
          let image = "./Drink and fries.jpg";
          showOrder(image);
        } else {
          if (
            drinksCount.innerText >= 1
          ) {
            let image = "./Pepsi.jpg";
            showOrder(image);
          } else if (burgerCount.innerText >= 1
          ) {
            let image = "./Whopper Jr Chicken with Cheese Burger.jpg";
            showOrder(image);
          } else if (
           friesCount.innerText >= 1
          ) {
            let image = "./Cheesy Fries.jpg";
            showOrder(image);
          }
        }
      }, 3000);
    })
    .catch(() => {
      alert("Please select at least one item to place an order");
    });
};
