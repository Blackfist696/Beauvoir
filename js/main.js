import sessionController from "./controller/sessionController.js";
import routeController from "./controller/routeController.js";

let session = new sessionController();
let route = new routeController();

window.onload = function() {
    session.sessionCheck();
};

window.onclick = function(event) {
    event.preventDefault();
    let target = event.target;
    route.navigate(target);
};
