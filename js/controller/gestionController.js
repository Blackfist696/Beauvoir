import GestionView from "../view/gestionView.js";

export default class GestionController {

    constructor() {
        this.view = new GestionView();
    }

    loadGestion() {
        this.view.render();
    }
}