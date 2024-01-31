/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Steven M. Tan",
    photo: "images/my_profile_pic.jpg",
    favoriteFood:[
        'Apple',
        'Burger',
        'Fries',
        'Pie',
        'Mango'
    ],
    hobbies:[
        'Playing video games',
        'Reading Book',
        'Watching Movies',
        'Listening to music'
    ],
    placesLived: []
};

myProfile.placesLived.push(
    {
        place: 'Dasmarinas City, Cavite',
        length: '25 years'
    }
);

myProfile.placesLived.push(
    {
        place: 'Makati City, Comembo',
        length: '2 years'
    }
);





/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name

/* Photo with attributes */
var pictureElement = document.querySelector('main#home picture');
var imageElement = pictureElement.querySelector('img');
imageElement.setAttribute('src',myProfile.photo);
imageElement.setAttribute('alt',"Steven Tan's Profile Picture");


/* Favorite Foods List*/
myProfile.favoriteFood.forEach(food => {
    let li = document.createElement('li');
    li.textContent= food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent=hobby;
    document.querySelector('#hobbies').appendChild(li);
});


/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    // Create <dt> element
    const dtElement = document.createElement('dt');
    // Set the text content of <dt> to the place property of the current object
    dtElement.textContent = place.place;
  
    // Create <dd> element
    const ddElement = document.createElement('dd');
    // Set the text content of <dd> to the length property of the current object
    ddElement.textContent = place.length;
  
    // Access the HTML <dl> element with the ID 'places-lived'
    const dlElement = document.getElementById('places-lived');
  
    // Append <dt> and <dd> elements to the <dl> element
    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);
  });