let cartItems={};
let cartContainer=document.getElementById("cart-items");
let cartTotal=document.getElementById("cart-total");

function addToCart(productName,price){
    if(cartItems[productName]){
        cartItems[productName].quantity++;
    }else{
        cartItems[productName]={price,quantity:1};
    }
    updateCart();
}

function removeFromCart(productName){
   if(cartItems[productName]){
    cartItems[productName].quantity--;

    if(cartItems[productName].quantity<=0){
        delete cartItems[productName];
    }
   }
    updateCart();
}

function cancelIemFromCart(productName){
    delete cartItems[productName];
    updateCart();
}
function updateCart(){
    let total=0;
    cartContainer.innerHTML="";

    if(Object.keys(cartItems).length===0){
        cartContainer.innerHTML="<div class='empty-cart'>Cart is empty</div>";
    }else{
        Object.keys(cartItems).forEach((productName)=>{
            const item=cartItems[productName];
            const subtotal=item.price*item.quantity;
            total+=subtotal;

            let cartItemsdiv=document.createElement("div");
            cartItemsdiv.classList.add("cart-items");
            cartItemsdiv.innerHTML = `
            <p>${productName}</p>
            <div>
                <button onclick="removeFromCart('${productName}')">-</button>
                ${item.quantity}
                <button onclick="addToCart('${productName}', ${item.price})">+</button>
                $${subtotal.toFixed(2)}
                <button onclick="cancelIemFromCart('${productName}')">Remove</button>   
            </div>      
      `;
      cartContainer.appendChild(cartItemsdiv);
    });
  }
  
  cartTotal.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
}
