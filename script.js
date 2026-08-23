let cart = [];


// ADD TO CART

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });
    updateCart();
    alert(name + " was added to your cart!");
}

// UPDATE CART
function updateCart() {
    let cartItems = document.getElementById("cartItems");
    let cartCount = document.getElementById("cartCount");
    let cartTotal = document.getElementById("cartTotal");
    cartCount.innerHTML = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        cartTotal.innerHTML = "Total: ₱0";
        return;
    }

    let total = 0;
    let items = "";

    for (let i = 0; i < cart.length; i++) {
        total = total + cart[i].price;
        items += `
            <div>
                <p>
                    ${cart[i].name} - ₱${cart[i].price}
                    <button onclick="removeItem(${i})">
                        Remove
                    </button>
                </p>
            </div>
        `;

    }
    cartItems.innerHTML = items;
    cartTotal.innerHTML = "Total: ₱" + total;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function openCart() {
    document.getElementById("cartBox").style.display = "block";
}

function closeCart() {
    document.getElementById("cartBox").style.display = "none";
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");

    } else {
        alert("Thank you for shopping at ShopZada<3!");
        cart = [];

        updateCart();
        closeCart();
    }
}

function scrollToProducts() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}

function searchProducts() {
    let search = document
        .getElementById("searchInput")
        .value
        .toLowerCase();
    let products = document.querySelectorAll(".product");
    for (let i = 0; i < products.length; i++) {

        let name = products[i]
            .querySelector("h3")
            .innerHTML
            .toLowerCase();
        if (name.includes(search)) {
            products[i].style.display = "block";

        } else {
            products[i].style.display = "none";
        }
    }
}

function showCategory(category) {
    let message = document.getElementById("categoryMessage");

    if (category === "clothing") {
        message.innerHTML = "Clothing: Black T-Shirt, Jersey, Hoodie, Jacket";
    } else if (category === "shoes") {
        message.innerHTML = "Shoes: Running Shoes, Cleats Shoes";

    } else if (category === "bags") {
        message.innerHTML = "Bags: Backpack, Shoulder Bag";

    } else if (category === "electronics") {
        message.innerHTML = "Electronics: Wireless Headphones, Smartphone, Fast Charger";
    }
}