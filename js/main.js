import sessionController from "./controller/sessionController.js";

new sessionController().sessionCheck();

window.onload = function() {
    new sessionController().sessionCheck();
};