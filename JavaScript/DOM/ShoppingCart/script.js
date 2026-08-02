
let nameInput = document.getElementById("name");
let priceInput = document.getElementById("price");
let quantityInput = document.getElementById("quantity");
let categoryInput = document.getElementById("category");
let addBtn = document.getElementById("addBtn");
let productList = document.getElementById("productList");


let cart = [];
let editId = null;

if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

displayProducts();
updateSummary();

// Add Product
addBtn.addEventListener("click", function () {
    let name = nameInput.value.trim();
    let price = Number(priceInput.value);
    let quantity = Number(quantityInput.value);
    let category = categoryInput.value;
    if (name == "" || price <= 0 || quantity <= 0 || category == "") {
        alert("Please fill all fields.");
        return;
    }
    if (editId == null) {
        let product = {
            id: Date.now(),
            name: name,
            price: price,
            quantity: quantity,
            category: category
        };
        cart.push(product);
    } else {
        cart.forEach(function (product) {
            if (product.id == editId) {
                product.name = name;
                product.price = price;
                product.quantity = quantity;
                product.category = category;
            }
        });
        editId = null;
        addBtn.innerText = "Add Product";
    }

    saveData();
    displayProducts();
    updateSummary();
    clearForm();

});

function saveData() {
    localStorage.setItem("cart", JSON.stringify(cart));
}
s
function displayProducts(list = cart) {

    productList.innerHTML = "";

    if (list.length === 0) {
        productList.innerHTML = "<h2>No Products Found</h2>";
        return;
    }

    list.forEach(function (product) {

        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h2>${product.name}</h2>
            <p><b>Price :</b> ₹${product.price}</p>
            <p><b>Quantity :</b> ${product.quantity}</p>
            <p><b>Category :</b> ${product.category}</p>
            <div class="buttons">
                <button class="editBtn"
                onclick="editProduct(${product.id})">
                Edit
                </button>
                <button class="deleteBtn"
                onclick="deleteProduct(${product.id})">
                Delete
                </button>
            </div>
        `;
        productList.appendChild(card);

    });
    updateSummary()

}

function deleteProduct(id) {
    cart = cart.filter(function (product) {
        return product.id !== id;
    });
    saveData();
    displayProducts();
}

function clearForm() {
    nameInput.value = "";
    priceInput.value = "";
    quantityInput.value = "";
    categoryInput.value = "";

}

function editProduct(id) {

    let product = cart.find(function (item) {
        return item.id == id;
    });
    nameInput.value = product.name;
    priceInput.value = product.price;
    quantityInput.value = product.quantity;
    categoryInput.value = product.category;
    editId = id;
    addBtn.innerText = "Update Product";

}
let search = document.getElementById("search");
search.addEventListener("keyup", function () {
    let value = search.value.toLowerCase();
    let result = cart.filter(function (product) {
        return product.name.toLowerCase().includes(value);

    });

    displayProducts(result);

});
let filter = document.getElementById("filter");

filter.addEventListener("change", function () {

    let category = filter.value;

    if (category == "All") {

        displayProducts(cart);

    } else {
        let result = cart.filter(function (product) {
            return product.category == category;
        });
        displayProducts(result);
    }

});

function updateSummary() {
    document.getElementById("totalProducts").innerText = cart.length;
    let totalQty = cart.reduce(function (sum, product) {
        return sum + product.quantity;

    }, 0);

    document.getElementById("totalQuantity").innerText = totalQty;
    let totalPrice = cart.reduce(function (sum, product) {
        return sum + (product.price * product.quantity);
    }, 0);
    document.getElementById("grandTotal").innerText = totalPrice;

}
let clearBtn = document.getElementById("clearCart");

clearBtn.addEventListener("click", function () {
    let ans = confirm("Are you sure?");
    if (ans) {
        cart = [];
        saveData();
        displayProducts();
        updateSummary();
    }
});