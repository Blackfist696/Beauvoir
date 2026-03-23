export default class SessionView {

    constructor() {
        this.container = document.getElementById('container');
        this.header = document.getElementById('header');
        this.nav = document.getElementById('nav');
    }

    renderLogin() {
            fetch('../../html/login.html')
                .then(response => response.text())
                .then(data => {
                this.container.innerHTML = data;
                });
    }

    renderUser() {
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