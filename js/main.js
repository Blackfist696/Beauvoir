if(sessionStorage.getItem('role') === null) {
    fetch('../html/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    });
    fetch('../html/login.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('container').innerHTML = data;
    });
} else {
    fetch('../html/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    });
    if(sessionStorage.getItem('role') === 'administrateur') {
        fetch('../html/navAdmin.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('nav').innerHTML = data;
        });
    } else if(sessionStorage.getItem('role') === 'administration') {
    fetch('../html/navGestion.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('nav').innerHTML = data;
        });
    } else if(sessionStorage.getItem('role') === 'user') {
    fetch('../html/navUser.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('nav').innerHTML = data;
        });
    }

    fetch('../test/dashboard.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('container').innerHTML = data;
        });
}