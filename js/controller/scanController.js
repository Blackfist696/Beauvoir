import ScanView from "../view/scanView";

export default class ScanController {

    constructor() {
        this.view = new ScanView();
    }

    loadScan() {
        this.view.render();
    }
}