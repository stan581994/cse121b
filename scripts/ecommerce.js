const productUrl = "https://fakestoreapi.com/products/";


let totalPrice = 0;

async function fetchProduct (){
    try{
        const response = await fetch(productUrl);
        if(response.ok){
            const productList = await response.json();
            return productList;
        }else{
            console.log('Failed to fetch product data: ', response.status);
        }
    }catch(error){
        console.log('Error fetching product data: ', error );
    }

}

const displayProduct = (productList) => {
    const productsContainer = document.getElementById('products-container');

    productList.forEach((product,index) => {
        // Create a product container
        const productContainer = document.createElement('div');
        productContainer.classList.add('product');

        // Create an image element
        const imgElement = document.createElement('img');
        imgElement.src = product.image;
        imgElement.alt = product.title;
        imgElement.style.width='100px';
        imgElement.style.height='auto';
        productContainer.appendChild(imgElement);

        // Create an h2 element for the product name
        const h2Element = document.createElement('h2');
        h2Element.textContent = product.title;
        h2Element.classList.add('product-title');
        productContainer.appendChild(h2Element);

        // Create a p element for the product description
        const pElement = document.createElement('p');
        pElement.textContent = product.description;
        pElement.classList.add('product-description');
        productContainer.appendChild(pElement);

        // Create a span element for the product price
        const spanElement = document.createElement('span');
        spanElement.textContent = `$${product.price.toFixed(2)}`;
        spanElement.classList.add('product-price');
        productContainer.appendChild(spanElement);

        
        // Create an input element for the quantity
        const inputElement = document.createElement('input');
        inputElement.type = 'number';
        inputElement.id = `quantity${index + 1}`;
        inputElement.name = `quantity${index + 1}`;
        inputElement.min = 1;
        inputElement.value = 1;
        inputElement.step = 1;
        inputElement.classList.add('product-quantity');
        productContainer.appendChild(inputElement);

        // Create a button for adding to cart
        const buttonElement = document.createElement('button');
        buttonElement.textContent = 'Add to Cart';
        buttonElement.addEventListener('click',()=> {
            addToCart(product,inputElement.value);
        });
        productContainer.appendChild(buttonElement);

        // Append the product container to the products container
        productsContainer.appendChild(productContainer);     

    });

}

const addToCart = (product,quantity)=>{

    totalPrice += product.price * quantity;
    console.log(totalPrice);
    const cartList = document.getElementById('cart-list');
    const newRow = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = product.title;
    const qualityCell = document.createElement('td');
    qualityCell.textContent = quantity;
    const priceCell = document.createElement('td');
    priceCell.textContent=product.price;

    newRow.appendChild(nameCell);
    newRow.appendChild(qualityCell);
    newRow.appendChild(priceCell);
    cartList.appendChild(newRow);
      
}

const compute = () =>{
    const checkBoxMember = document.getElementById('prime-member');
    const totalPriceLabel = document.getElementById('total-cost');
    const selectedValue = checkBoxMember.value;

    if(selectedValue === 'yes'){
        totalPriceLabel.textContent = `${discountedPrice(totalPrice).toFixed(2)}`;
    }else if (selectedValue === 'no'){
        totalPriceLabel.textContent = `${totalPrice.toFixed(2)}`;
 
    }else{
        console.log('Invalid Selection');
    }

}

function discountedPrice(totalPrice){
    return totalPrice * 0.85;
}

const computeButton = document.querySelector('#compute-total-btn').addEventListener('click',compute);


async function init(){
    const productList = await fetchProduct();
    displayProduct(productList);
}

init();