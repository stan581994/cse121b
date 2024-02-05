/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templeUrl = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
let templeList = [];
const articleElement = document.createElement('article');
const templeElement = document.querySelector('#temples');

/* async displayTemples Function */
const displayTemples = (templeList)=> {
    templeList.forEach(temple => {
        const articleElement = document.createElement('article');
        const templeNameElement = document.createElement('h3');
        templeNameElement.textContent = temple.templeName;
        var img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
        articleElement.appendChild(templeNameElement);
        articleElement.appendChild(img);
        templeElement.appendChild(articleElement);
    });
}



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch(templeUrl);
    if (response.ok){
        templeList = await response.json();
        displayTemples(templeList);
    }
}


/* reset Function */

const resetList = () => {

    const templesElement = document.querySelector('#temples');
    const articlesToRemove = templesElement.querySelectorAll('article');

    articlesToRemove.forEach(article => article.remove());
}   


/* filterTemples Function */

const filterTemple = (temples) => {
    resetList();
    const selectElement = document.getElementById('filtered');
    const filter = selectElement.value;
    console.log(temples)
    switch(filter){
        case 'utah':
            const utahTemples = temples.filter(temple => temple.location.toLowerCase().includes('utah'));
            displayTemples(utahTemples);
            break;
        case 'notutah':
            const notUtahTemples = temples.filter(temple => !temple.location.toLowerCase().includes('utah'));
            displayTemples(notUtahTemples);
            break;
        case 'older':
            oldDate =  new Date(1950,0,1);
            const olderTemples = temples.filter(temple => new  Date(temple.dedicated) < oldDate );
            displayTemples(olderTemples);
            break;
        case 'all':
            displayTemples(temples);
            break;
    }
}


getTemples();
/* Event Listener */
const selectElement = document.querySelector("#filtered").addEventListener("change",() =>{filterTemple(templeList)});


