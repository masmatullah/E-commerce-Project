/* let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

let cartremove = document.getElementsByClassName("cart-remove");

let btnbuy = document.getElementsByClassName("btn-buy");

// let cartContent = document.getElementsByClassName("cart-content")[0];
let cartBox = document.getElementsByClassName("cart-box");
// let cartPrice = document.getElementsByClassName("cart-price")[0];
// let cartQuantity = document.getElementsByClassName("cart-quantity")[0];

let qas = document.getElementsByClassName("cart-quantity");


cartIcon.addEventListener("click",()=>
{
    cart.classList.add("active");
});

closeCart.addEventListener("click",()=>
{
    cart.classList.remove("active");
});

let addcart = document.getElementsByClassName("add-cart");
        for(let i=0; i<addcart.length; i++)
        {
            let button = addcart[i];
            button.addEventListener("click", (event)=>
            {
                let btn = event.target;
                let sp = btn.parentElement;
                let title = sp.getElementsByClassName("product-title")[0].innerText;
                console.log(title);
                let price = sp.getElementsByClassName("price")[0].innerText;
                console.log(price);
                let productimage = sp.getElementsByClassName("product-image")[0].src;
                console.log(productimage);

                
                
                f2(title,price,productimage);
                f1();
            })
        }


let f1 = ()=>
{
    let total=0;
    for(let i=0; i<cartBox.length; i++)
    {
        let cb = cartBox[i];
        let cartPrice = cb.getElementsByClassName("cart-price")[0];
        let cartQuantity = cb.getElementsByClassName("cart-quantity")[0];
        let pricee = parseFloat(cartPrice.innerText.replace("$",""));
        let q = cartQuantity.value;
        total=total+(q*pricee);
        document.getElementsByClassName("total-price")[0].innerText="$"+total;

     
    }
}
   

let f2 = (title,price,productimage)=>
{
    let csb = document.createElement("div");
    csb.classList.add("cart-box");
    let ci = document.getElementsByClassName("cart-content")[0];
    
    let cbc = `
                            <img src="${productimage}" alt="" class="cart-image">
                            <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity">
                            </div>
                            <i class='bx bxs-trash-alt cart-remove'></i>`;
    csb.innerHTML = cbc;
    ci.append(csb);


    
          function btnbuy(){
            document.getElementsByClassName("btn-buy").innerText("You Purchase Item");
        }          
}*/

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

cartIcon.addEventListener("click", () => {
    cart.classList.add("active");
});

closeCart.addEventListener("click", () => {
    cart.classList.remove("active");
});

let addcart = document.getElementsByClassName("add-cart");

/* Add to Cart */
for (let i = 0; i < addcart.length; i++) {
    let button = addcart[i];

    button.addEventListener("click", (event) => {
        let btn = event.target;
        let sp = btn.parentElement;

        let title = sp.getElementsByClassName("product-title")[0].innerText;
        let price = sp.getElementsByClassName("price")[0].innerText;
        let productimage = sp.getElementsByClassName("product-image")[0].src;

        f2(title, price, productimage);
        f1();
    });
}

/* Total Price Function */
function f1() {
    let cartBox = document.getElementsByClassName("cart-box");
    let total = 0;

    for (let i = 0; i < cartBox.length; i++) {
        let cb = cartBox[i];

        let cartPrice = cb.getElementsByClassName("cart-price")[0];
        let cartQuantity = cb.getElementsByClassName("cart-quantity")[0];

        let pricee = parseFloat(cartPrice.innerText.replace("$", ""));
        let q = cartQuantity.value;

        total = total + (pricee * q);
    }

    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}

/* Create Cart Item */
function f2(title, price, productimage) {
    let csb = document.createElement("div");
    csb.classList.add("cart-box");

    let ci = document.getElementsByClassName("cart-content")[0];

    let cbc = `
        <img src="${productimage}" alt="" class="cart-image">

        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>

        <i class='bx bxs-trash-alt cart-remove'></i>
    `;

    csb.innerHTML = cbc;
    ci.append(csb);

    /* Delete Button Working */
    let removeBtn = csb.querySelector(".cart-remove");

    removeBtn.addEventListener("click", function () {
        csb.remove();
        f1();
    });

    /* Quantity Change */
    let quantityInput = csb.querySelector(".cart-quantity");

    quantityInput.addEventListener("change", function () {
        if (this.value <= 0) {
            this.value = 1;
        }
        f1();
    });
}

/* Buy Now Button */
let buyBtn = document.querySelector(".btn-buy");

buyBtn.addEventListener("click", function () {
    alert("Thank You! You Purchased Successfully");

    let cartContent = document.querySelector(".cart-content");
    cartContent.innerHTML = "";

    f1();
});