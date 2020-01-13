function addMapDropdown(){

    //Create main dropdown menu ("button")
    var mainButton = document.createElement("div");
    mainButton.setAttribute("class", "dropdown");

    var buttonText = document.createElement("span");
    buttonText.innerText = "Open in ...";

    var dropdownContainer = document.createElement("div");
    dropdownContainer.setAttribute("class", "dropdown-content");

    mainButton.appendChild(buttonText);
    mainButton.appendChild(dropdownContainer);

    var mapElem = document.getElementById("map");
    mapElem.parentNode.insertBefore(mainButton, mapElem.nextSibling);

    dropdownContainer.innerHTML = null;

    var customMaps = JSON.parse(settings["customMaps"]);

    for (var i=0; i < customMaps.length; i++){
        var title = customMaps[i].title;
        var link = customMaps[i].url;

        //Link editing:
        link = link.toLowerCase();
        link = link.replaceAll("%lat%", nSubCtrl.pageData.lat);
        link = link.replaceAll("%lng%", nSubCtrl.pageData.lng);
        link = link.replaceAll("%title%", nSubCtrl.pageData.title);

        var button = document.createElement("a");
        button.href = link;
        button.setAttribute("target", "_BLANK");
        button.innerText = title;
        dropdownContainer.appendChild(button);
    }

    if (customMaps.length == 0){
        var emptySpan = document.createElement("span");
        emptySpan.innerText = "No custom maps set!";
        dropdownContainer.appendChild(emptySpan);
    }

    console.log(button);

    //Add elem to page
    switch (nSubCtrl.reviewType){
    	case "NEW":
		    var cardFooterElems = document.getElementsByClassName("card__footer");
		    var cardFooterElem = cardFooterElems[cardFooterElems.length-1];
		    cardFooterElem.insertBefore(mainButton, cardFooterElem.children[0]);
		    break;
		case "EDIT":
			var infoCard = document.getElementsByClassName("known-information-card")[0];
			infoCard.style.display = "inline-block";
			infoCard.appendChild(mainButton);
            break;
	}
}

document.addEventListener("WFPNSubCtrlHooked", addMapDropdown);

//Needed entering variables into URLs
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};