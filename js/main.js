import sessionController from "./controller/sessionController.js";
import routeController from "./controller/routeController.js";

let session = new sessionController();
let route = new routeController();

window.onload = function() {
    session.sessionCheck();
};

document.querySelector('a').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche la navigation
    // let hrefValue = this.href; // Récupère l'URL absolue
    let hrefValue = this.getAttribute('href'); // Récupère la valeur exacte dans le HTML
    console.log(hrefValue);
    route.navigate(hrefValue);
});

window.onclick = function(event) {
    event.preventDefault();
    let target = event.target;
    route.navigate(target);
};
