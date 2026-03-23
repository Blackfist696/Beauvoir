import ScanView from "../view/scanView.js";

export default class ScanController {

    constructor() {
        this.view = new ScanView();
    }

    loadScan() {
        this.view.render();
    }
}