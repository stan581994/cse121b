/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Steven M. Tan';

// Create a new Date object
const currentDate = new Date();

// Get the current year from the Date object
const currentYear = currentDate.getFullYear();

let profilePicture = 'images/my_profile_pic.jpg';



/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('year');

var pictureElement = document.querySelector('main#home picture');
var imageElement = pictureElement.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent =  currentYear;
imageElement.setAttribute('src',profilePicture);
imageElement.setAttribute('alt',`Profile image of ${fullName}`)




/* Step 5 - Array */

const favoriteFoods = ["Apple", "Fried Chicken", "Chocolate", "Ice Cream", "Burger"];
foodElement.innerHTML=`${favoriteFoods}`;
favoriteFoods.push('Chiken Pasta');
foodElement.innerHTML += `${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `${favoriteFoods}`;







