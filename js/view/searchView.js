export default class SearchView {

    constructor() {
        this.container = document.getElementById('container');
    }

    render() {
        fetch('../../html/search.html')
            .then(response => response.text())
            .then(data => {
                this.container.innerHTML = data;
            });
    }
}