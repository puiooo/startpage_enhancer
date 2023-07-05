function enhance() {
    // Set search-title
    let queryInput = document.getElementsByName('query')[0];
    let searchTerm = queryInput !== undefined ? queryInput.value : undefined;

    if (searchTerm === undefined || searchTerm === "") {
        return;
    }
    document.title = searchTerm + " - Startpage.com";

    // Append Maps links
    let menubar = document.getElementsByClassName('categories')[0];

    if (menubar === undefined) {
        return;
    }

    menubar.className = 'categories'; //removes additional styling

    // - GMAPS Link
    let googleMapsLink = document.createElement("a");
    googleMapsLink.style = "text-decoration: inherit; color:inherit; white-space: nowrap;";
    googleMapsLink.text = "Google Maps";
    googleMapsLink.href = "https://maps.google.com?q=" + searchTerm;

    let gmaps = menubar.lastChild.cloneNode(true);
    let gmapsButton = gmaps.firstChild.lastChild;
    gmapsButton.innerHTML = '';
    gmapsButton.appendChild(googleMapsLink);

    // - OSM Link
    let osmLink = document.createElement("a");
    osmLink.style = "text-decoration: inherit; color:inherit; white-space: nowrap;";
    osmLink.text = "OpenStreetMap";
    osmLink.href = "https://www.openstreetmap.org/search?query=" + searchTerm;

    let osmaps = menubar.lastChild.cloneNode(true);
    let osmapsButton = osmaps.firstChild.lastChild;
    osmapsButton.innerHTML = '';
    osmapsButton.appendChild(osmLink);

    // - add both
    menubar.appendChild(gmaps);
    menubar.appendChild(osmaps);


    // Add website-icons
    let resultList = document.querySelectorAll('[class*="result-url-container"]');

    for (let link of resultList) {
        let searchResultLink = new URL(link.children[1].href);
        let faviconImg = document.createElement("img");
        faviconImg.style.height = "18px";
        faviconImg.src = "https://icon.horse/icon/" + searchResultLink.hostname;
        link.prepend(faviconImg);
        link.append(link.children[1]); //move private browsing to the right
        link.children[1].style.marginLeft = "0.5rem"; // fix spacing
    }
}

enhance();