//important
const addProduct = () =>{
    const productName = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');
    const product = productName.value;
    const quantity = productQuantity.value;
    productName.value = '';
    productQuantity.value = '';
    showProduct(product, quantity);
    saveProductToLocalStorage(product, quantity);
}


const showProduct = (product, quantity) =>{
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}

const getStoredShoppingCard = () =>{
    let card = {};
    const storedCard = localStorage.getItem('card');
    if(storedCard){
        card = JSON.parse(storedCard);
    }
    return card;
}

const saveProductToLocalStorage = (product, quantity) =>{
    const card = getStoredShoppingCard();
    console.log(product);
    card[product] = quantity;
    console.log(quantity);
    console.log(card);
    const cardStringiFied = JSON.stringify(card);
    localStorage.setItem('card', cardStringiFied)
}

const displayProductFromLocalStorage = () =>{
    const saveCard = getStoredShoppingCard();
    for(const product in saveCard){
        const quantity = saveCard[product];
        //console.log(product, quantity);
    }
}
displayProductFromLocalStorage();