let googleMapsLink = document.createElement("a");
googleMapsLink.classList.add("inline-nav-menu__link");
googleMapsLink.classList.add("inline-nav-menu__link__post-link");
googleMapsLink.text = "Google Maps";

let osmLink = document.createElement("a");
osmLink.classList.add("inline-nav-menu__link");
osmLink.classList.add("inline-nav-menu__link__post-link");
osmLink.text = "OpenStreetMap";

if(document.getElementById('query') !== null) {
    document.title = document.getElementById('query').value +  ' - Startpage.com';
	googleMapsLink.href = "https://maps.google.com?q=" + document.getElementById('query').value;
	osmLink.href = "https://www.openstreetmap.org/search?query=" + document.getElementById('query').value;
}
else {
    document.title = document.getElementById('q').value + ' - Startpage.com';
	googleMapsLink.href = "https://maps.google.com?q=" + document.getElementById('q').value;
	osmLink.href = "https://www.openstreetmap.org/search?query=" + document.getElementById('q').value;
}

let menubar = document.getElementsByClassName('inline-nav-menu__container')[0]

menubar.appendChild(googleMapsLink);
menubar.appendChild(osmLink);


let resultList = document.getElementsByClassName("w-gl__result-url-container");

for(let link of resultList) {
	let searchResultLink = link.children[1].href;
	let faviconImg = document.createElement("img");
	faviconImg.src = "https://s2.googleusercontent.com/s2/favicons?domain=" + searchResultLink;
	link.appendChild(faviconImg);
}