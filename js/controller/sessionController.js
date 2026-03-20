export default class SessionController {

    constructor() {
        const sessionRole = sessionStorage.getItem('role');
    }

    login() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
    }


    sessionCheck() {
        if(sessionRole === null) {
            fetch('../../../html/header.html')
                .then(response => response.text())
                .then(data => {
                document.getElementById('header').innerHTML = data;
                });
            fetch('../../../html/login.html')
                .then(response => response.text())
                .then(data => {
                document.getElementById('container').innerHTML = data;
                });
        } else {
            fetch('../../../html/header.html')
                .then(response => response.text())
                .then(data => {
                document.getElementById('header').innerHTML = data;
                });
            if(sessionRole === 'administrateur') {
                fetch('../../../html/navAdmin.html')
                    .then(response => response.text())
                    .then(data => {
                    document.getElementById('nav').innerHTML = data;
                    });
                dashboard();
            } else if(sessionRole === 'administration') {
                fetch('../../../html/navGestion.html')
                    .then(response => response.text())
                    .then(data => {
                    document.getElementById('nav').innerHTML = data;
                    });
                    dashboard();
            } else if(sessionRole === 'user') {
                fetch('../../../html/navUser.html')
                    .then(response => response.text())
                    .then(data => {
                    document.getElementById('nav').innerHTML = data;
                    });
            }
        }
    }

    dashboard() {
        fetch('../../../html/dashboard.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('container').innerHTML = data;
        });
    }
}