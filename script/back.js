function removeAddressPart() {
    var currentUrl = document.getElementById("currentUrl").innerText;
    var lastSlashIndex = currentUrl.lastIndexOf("/");
    if (lastSlashIndex !== -1) {
        var newUrl = currentUrl.substring(0, lastSlashIndex);
        document.getElementById("currentUrl").innerText = newUrl;
    } else {
        alert("There's no address part to remove.");
    }
}