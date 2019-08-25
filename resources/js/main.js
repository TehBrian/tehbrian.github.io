function changeCSS(cssFile, cssLinkId) {
    var link = document.getElementById(cssLinkId);
    link.setAttribute("href", cssFile);
}

/* Use this one incase the above doesn't work.
function changeCSS(cssFile, cssLinkId) {
    var oldLink = document.getElementById(cssLinkId);

    var newLink = document.createElement("link");
    newLink.setAttribute("rel", "stylesheet");
    newLink.setAttribute("type", "text/css");
    newLink.setAttribute("media", "screen");
    newLink.setAttribute("href", cssFile);
    newLink.setAttribute("id", cssLinkId);

    document.head.replaceChild(newLink, oldLink);
}
*/