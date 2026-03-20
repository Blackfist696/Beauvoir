import DashboardView from "../view/dashboardView";

export default class DashboardController {

    constructor() {
        this.view = new DashboardView();
    }

    loadDashboard() {
        this.view.render();
    }
}