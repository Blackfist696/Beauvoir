export default class GestionView {

    constructor() {
        this.container = document.getElementById('app');
    }

    render() {
        fetch('../../html/gestion.html')
            .then(response => response.text())
            .then(data => {
                this.container.innerHTML = data;
            });
    }
}