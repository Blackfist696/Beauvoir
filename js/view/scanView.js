export default class ScanView {

    constructor() {
        this.container = document.getElementById('container');
    }

    render() {
        fetch('../../html/scan.html')
            .then(response => response.text())
            .then(data => {
                this.container.innerHTML = data;
            });
        alert('Scan loaded');
    }
}