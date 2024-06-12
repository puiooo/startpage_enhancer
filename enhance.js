function enhance() {
	
	// hide our referral, so startpage does not get problems with our extension :)
	var meta = document.createElement('meta');
	meta.name = "referrer";
	meta.content = "no-referrer";
	document.getElementsByTagName('head')[0].appendChild(meta);
	
    // Set search-title
    let queryInput = document.getElementsByName('query')[0];
    let searchTerm = queryInput !== undefined ? queryInput.value : undefined;

    if (searchTerm === undefined || searchTerm === "") {
        return;
    }
    document.title = searchTerm + " - Startpage.com";

    // Append OSM link
    let menubar = document.getElementsByClassName('categories')[0];

    menubar.className = 'categories'; //removes additional styling

	let dropdownDisplay = document.querySelector('.dropdown-display');
	
    let osmLink = document.createElement("a");
    osmLink.style = "text-decoration: inherit; color:inherit; white-space: nowrap;";
    osmLink.href = "https://www.openstreetmap.org/search?query=" + searchTerm;

	// last Dropdown-Entry is empty div tag, like they were waiting for me to fix the extension and add OpenStreetMaps ;)
    let osmaps = dropdownDisplay.childNodes[dropdownDisplay.childElementCount-2].cloneNode(true);
	osmaps.querySelector('span').textContent = "OpenStreetMap";
	osmaps.querySelector('img').src = "https://icon.horse/icon/openstreetmap.com";
	osmLink.appendChild(osmaps);
    dropdownDisplay.appendChild(osmLink);


    // Add website-icons
    let resultList = document.querySelectorAll('[class~="upper"]');

    for (let link of resultList) {
        let searchResultLink = new URL(link.lastChild.href);
        let faviconImg = document.createElement("img");
        faviconImg.style.height = "18px";
        faviconImg.src = "https://icon.horse/icon/" + searchResultLink.hostname;
        link.prepend(faviconImg);
        link.append(link.children[1]); //move private browsing to the right
        link.children[1].style.marginLeft = "0.5rem"; // fix spacing
    }
}
var intervalId = window.setInterval(function(){
  if(document.querySelectorAll('[src*="icon.horse"]').length === 0) {
	enhance();
  }
}, 500);