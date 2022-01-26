let queryInput = document.getElementsByName('query')[0];
let searchTerm = queryInput.value;

document.title = searchTerm +  " - Startpage.com";

let googleMapsLink = document.createElement("a");
googleMapsLink.text = "Google Maps";
googleMapsLink.href = "https://maps.google.com?q=" + searchTerm;

let osmLink = document.createElement("a");
osmLink.text = "OpenStreetMap";
osmLink.href = "https://www.openstreetmap.org/search?query=" + searchTerm;


let menubar = document.getElementsByClassName('inline-nav-menu__container')[0];

if(menubar === undefined) { // for some reason 'News' and 'Videos' Tab use different nav-bar-layout and css
	osmLink.style = "text-decoration: inherit; color:inherit";
	googleMapsLink.style = "text-decoration: inherit; color:inherit";
	
	menubar = document.getElementsByClassName('inline-nav')[0];
	let menuItemClass = menubar.children[0].classList[0];
	let menuItemClass2 = menubar.children[0].children[menubar.children[0].children.length-1].classList[0];
	
	let linkForm = document.createElement("form");
	linkForm.classList.add(menuItemClass);
	linkForm.action = "javascript:void(0);";
	let buttonForForm = document.createElement("button");
	buttonForForm.classList.add(menuItemClass2);
	
	buttonForForm.appendChild(googleMapsLink);
	linkForm.appendChild(buttonForForm);
	menubar.appendChild(linkForm);
	
	linkForm = document.createElement("form");
	linkForm.classList.add(menuItemClass);
	linkForm.action = "javascript:void(0);";
	buttonForForm = document.createElement("button");
	buttonForForm.classList.add(menuItemClass2);
	
	buttonForForm.appendChild(osmLink);
	linkForm.appendChild(buttonForForm);
	menubar.appendChild(linkForm);
}
else {
	googleMapsLink.classList.add("inline-nav-menu__link");
	googleMapsLink.classList.add("inline-nav-menu__link__post-link");
	
	osmLink.classList.add("inline-nav-menu__link");
	osmLink.classList.add("inline-nav-menu__link__post-link");
	
	
	menubar.appendChild(googleMapsLink);
	menubar.appendChild(osmLink);
}


let resultList = document.getElementsByClassName("w-gl__result-url-container");

for(let link of resultList) {
	let searchResultLink = new URL(link.children[1].href);
	let faviconImg = document.createElement("img");
	faviconImg.src = "https://icon.horse/icon/" + searchResultLink.hostname;
	link.prepend(faviconImg);
	link.append(link.children[1]); //move private browsing to the right
}
