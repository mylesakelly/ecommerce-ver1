// // product slider js

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})




 // Fetch the JSON file
 fetch('products.json')
 .then(response => response.json())
 .then(products => {

   // Get the product list container
   const productList = document.getElementById('product-list');
   
   // Loop through the products and create list items for each one
   products.forEach(product => {
     const listItem = document.createElement('li');
     const image = document.createElement('img');
     image.src = product.image;
     const title = document.createElement('h2');
     title.textContent = product.title;
     const description = document.createElement('h4');
     description.textContent = product.description;
     const price = document.createElement('p');
     price.textContent = `$${product.price.toFixed(2)}`;
     
     // Append the product information to the list item
     listItem.appendChild(image);
     listItem.appendChild(title);
     listItem.appendChild(description);
     listItem.appendChild(price);
     
     // Append the list item to the product list container
     productList.appendChild(listItem);
   });
 })
 .catch(error => {
   console.error('Error fetching products:', error);
 });