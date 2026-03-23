import SearchView from "../view/searchView.js";

export default class SearchController {

    constructor() {
        this.view = new SearchView();
    }

    loadSearch() {
        this.view.render();
    }   
}