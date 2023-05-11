
// hamburger menu

const hamburger = document.querySelector(".hamburger"); 
// name variable hamburger and set it equal to a document.querySelector method that is assigned the css selector .hamburger
const navLinks = document.querySelector(".nav-links");
// name variable navlinks and set it equal to a document.querySelector method that will locate this element in the css





hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
})
//click event listener is used to execute this function
//when hamburger is clicked the code in the function will toggle the active class is present in the css

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navLinks.classList.remove("active");
}))
//this code targets the nav links
//a click event listener is added to each nav link in the menu
//when the nav link is clicked the code in the function is executed
//it REMOVES the active class from the hamburger and nav links elements so that the menu can close!





// product slider js

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
// created 3 separate arrays using the document.querySelectorAll method to target the elements in product-container, nxt-btn, and pre-btn


//Next, I wanted to make a function that added a click event listener to the pre and next buttons
productContainers.forEach((item, i) => {
  //for each method is used to loop through each item in the product container element
    let containerDimensions = item.getBoundingClientRect();
    //getBoundingClientRect method is used to measure the width of the product containers
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    //scrollLeft property measures width when added or subtracted so that results in the sliding effect happening

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
      
    })
})






 // Fetch the JSON file
 //fetch is a web api that provides a way to fetch resources asynchronously
 fetch('products.json')
 .then(response => response.json())
//  This line takes the response from the fetch request and then converts it to a JSON object using the json() method. 
//The then() method is used to handle the response asynchronously.
 .then(products => {
  //after the json object from eariler is returned, then we use the then method again and use products as a parameter
  //to represent an array of product objects which is what is stored in the json file

   // Get the product list container
   const productList = document.getElementById('product-list');
   
   // Loop through the products and create list items for each one
   //allows me to style the elements associated in my css file and displays the stored information in the html
   products.forEach(product => {
     const listItem = document.createElement('li');
     const image = document.createElement('img');
     image.src = product.image;
     const title = document.createElement('h2');
     title.textContent = product.title;
     const description = document.createElement('h4');
     description.textContent = product.description;
     const price = document.createElement('p');
    //  price.href = "./cart.html";
  

     price.textContent = `$${product.price.toFixed(2)}`; //keeps two decimal places to the price output
     
     // Append the product information to the list item
     // displayed as a single list item for each product.
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
 //catch method is used to handle any errors fetching from the json file