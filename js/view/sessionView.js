export default class SessionView {

    constructor() {
        this.container = document.getElementById('container');
        this.header = document.getElementById('header');
        this.nav = document.getElementById('nav');
    }

    renderNull() {
            fetch('../../html/header.html')
                .then(response => response.text())
                .then(data => {
                this.header.innerHTML = data;
                });
            fetch('../../html/login.html')
                .then(response => response.text())
                .then(data => {
                this.container.innerHTML = data;
                });
    }

    renderUser() {
            fetch('../../html/header.html')
                .then(response => response.text())
                .then(data => {
                this.header.innerHTML = data;
                });
            fetch('../../html/navUser.html')
                .then(response => response.text())
                .then(data => {
                this.nav.innerHTML = data;
                });
            fetch('../../html/scan.html')
                .then(response => response.text())
                .then(data => {
                this.container.innerHTML = data;
                });
    }

    renderAdmin() {
            fetch('../../html/header.html')
                .then(response => response.text())
                .then(data => {
                this.header.innerHTML = data;
                });
            fetch('../../html/navAdmin.html')
                .then(response => response.text())
                .then(data => {
                this.nav.innerHTML = data;
                });
            fetch('../../html/dashboard.html')
                .then(response => response.text())
                .then(data => {
                this.container.innerHTML = data;
                });
    }

    renderGestion() {
            fetch('../../html/header.html')
                .then(response => response.text())
                .then(data => {
                this.header.innerHTML = data;
                });
            fetch('../../html/navGestion.html')
                .then(response => response.text())
                .then(data => {
                this.nav.innerHTML = data;
                });
            fetch('../../html/dashboard.html')
                .then(response => response.text())
                .then(data => {
                this.container.innerHTML = data;
                });
    }
}