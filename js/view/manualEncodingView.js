export default class ManualEncodingView {

    constructor() {
        this.container = document.getElementById('container');
    }

    render() {
        fetch('../../html/manualEncoding.html')
            .then(response => response.text())
            .then(data => {
                this.container.innerHTML = data;
            });
        alert('Manual Encoding loaded');
    }
}