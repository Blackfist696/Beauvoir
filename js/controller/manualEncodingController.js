import ManualEncodingView from "../view/manualEncodingView.js";

export default class ManualEncodingController {

    constructor() {
        this.view = new ManualEncodingView();
    }   

    loadManualEncoding() {
        this.view.render();
    }   
}