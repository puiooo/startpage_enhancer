// Set search-title
let queryInput = document.getElementsByName('query')[0];
let searchTerm = queryInput.value;
document.title = searchTerm +  " - Startpage.com";

// Append Maps links
let menubar = document.getElementsByClassName('categories')[0];

let menuItemNr = document.body.textContent.includes('Any size') ? 0 : 1; // dirty workaround ;)

let divItemClass = menubar.children[menuItemNr].classList[0];
let formItemClass = menubar.children[menuItemNr].children[0].classList[0];
let buttonItemClass = menubar.children[menuItemNr].children[0].children[menubar.children[0].children[0].children.length-1].classList[0];

// - GMAPS Link
let googleMapsLink = document.createElement("a");
googleMapsLink.style = "text-decoration: inherit; color:inherit; white-space: nowrap;";
googleMapsLink.text = "Google Maps";
googleMapsLink.href = "https://maps.google.com?q=" + searchTerm;

let linkDiv = document.createElement("div");
linkDiv.classList.add(divItemClass);

let linkForm = document.createElement("form");
linkForm.classList.add(formItemClass);
linkForm.action = "javascript:void(0);";

let buttonForForm = document.createElement("button");
buttonForForm.classList.add(buttonItemClass);

buttonForForm.appendChild(googleMapsLink);
linkForm.appendChild(buttonForForm);
linkDiv.appendChild(linkForm);
menubar.appendChild(linkDiv);

// - OSM Link
let osmLink = document.createElement("a");
osmLink.style = "text-decoration: inherit; color:inherit; white-space: nowrap;";
osmLink.text = "OpenStreetMap";
osmLink.href = "https://www.openstreetmap.org/search?query=" + searchTerm;

linkDiv = document.createElement("div");
linkDiv.classList.add(divItemClass);

linkForm = document.createElement("form");
linkForm.classList.add(formItemClass);
linkForm.action = "javascript:void(0);";

buttonForForm = document.createElement("button");
buttonForForm.classList.add(buttonItemClass);
buttonForForm.appendChild(osmLink);

linkForm.appendChild(buttonForForm);
linkDiv.appendChild(linkForm);
menubar.appendChild(linkDiv);

// matches any class that contains string
let resultList = document.querySelectorAll('[class*="result-url-container"]');

for(let link of resultList) {
	let searchResultLink = new URL(link.children[1].href);
	let faviconImg = document.createElement("img");
	faviconImg.style.height = "18px";
	faviconImg.src = "https://icon.horse/icon/" + searchResultLink.hostname;
	link.prepend(faviconImg);
	link.append(link.children[1]); //move private browsing to the right
	link.children[1].style.marginLeft = "0.5rem"; // fix spacing
}
