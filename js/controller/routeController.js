import DashboardController from './dashboardController.js';
import AbsentController from './absentController.js';
import ScanController from './scanController.js';
import ManualEncodingController from './manualEncodingController.js';
import JustifiedOutingsController from './justifiedOutingsController.js';

export default class RouteController {

    constructor() {
        this.routes = {
            'dashboard': this.loadDashboard,
            'scan': this.loadScan,
            'manualEncoding': this.loadManualEncoding,
            'absent': this.loadAbsent,
            'justifiedOutings': this.loadJustifiedOutings,
            'search': this.loadSearch,
            'historical': this.loadHistorical,
            'gestion': this.loadGestion,
            'logout': this.logout
        };
    }

    navigate(route) {
        if(this.routes[route]) {
            this.routes[route]();
            switch(route) {
                case 'logout':
                    this.logout();
                    break;
                case 'dashboard':
                    let dashboardController = new DashboardController();
                    dashboardController.loadDashboard();
                    break;
                case 'scan':
                    let scanController = new ScanController();
                    scanController.loadScan();
                    break;
                case 'manualEncoding':
                    let manualEncodingController = new ManualEncodingController();
                    manualEncodingController.loadManualEncoding();
                    break;
                case 'absent':
                    let absentController = new AbsentController();
                    absentController.loadAbsent();
                    break;
                case 'justifiedOutings':
                    let justifiedOutingsController = new JustifiedOutingsController();
                    justifiedOutingsController.loadJustifiedOutings();
                    break;
                case 'search':
                    this.loadSearch();
                    break;
                case 'historical':
                    this.loadHistorical();
                    break;
                case 'gestion':
                    this.loadGestion();
                    break;
                
            }
        } else {
            console.error(`Route ${route} not found`);
        }
    }

    loadScan() {

    }

    loadManualEncoding() {
        fetch('../../html/manualEncoding.html')
            .then(response => response.text())
            .then(data => {
            document.getElementById('container').innerHTML = data;
        });
        alert('Manual Encoding loaded');
    }

    loadAbsent() {

    }

    loadJustifiedOutings() {
        fetch('../../html/justifiedOutings.html')
            .then(response => response.text())
            .then(data => {
            document.getElementById('container').innerHTML = data;
        });
        alert('Justified Outings loaded');
    }

    loadSearch() {
        fetch('../../html/search.html')
            .then(response => response.text())
            .then(data => {
            document.getElementById('container').innerHTML = data;
        });
        alert('Search loaded');
    }

    loadHistorical() {
        fetch('../../html/historical.html')
            .then(response => response.text())
            .then(data => {
            document.getElementById('container').innerHTML = data;
        });
        alert('Historical loaded');
    }

    loadGestion() {
        fetch('../../html/gestion.html')
            .then(response => response.text())
            .then(data => {
            document.getElementById('container').innerHTML = data;
        });
        alert('Gestion loaded');
    }

    logout() {
        sessionStorage.removeItem('role');
        alert('Logged out');
        window.location.reload();
    }
}