const productUrl = "https://fakestoreapi.com/products/";

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
        productsContainer.classList.add('product');

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
        productContainer.appendChild(h2Element);

        // Create a p element for the product description
        const pElement = document.createElement('p');
        pElement.textContent = product.description;
        productContainer.appendChild(pElement);

        // Create a span element for the product price
        const spanElement = document.createElement('span');
        spanElement.textContent = `$${product.price.toFixed(2)}`;
        productContainer.appendChild(spanElement);

        
        // Create an input element for the quantity
        const inputElement = document.createElement('input');
        inputElement.type = 'number';
        inputElement.id = `quantity${index + 1}`;
        inputElement.name = `quantity${index + 1}`;
        inputElement.min = 1;
        inputElement.value = 1;
        inputElement.step = 1;
        productContainer.appendChild(inputElement);

        // Create a button for adding to cart
        const buttonElement = document.createElement('button');
        buttonElement.textContent = 'Add to Cart';
        productContainer.appendChild(buttonElement);

        // Append the product container to the products container
        productsContainer.appendChild(productContainer);     

    });

}

async function init(){
    const productList = await fetchProduct();
    displayProduct(productList);
}

init();