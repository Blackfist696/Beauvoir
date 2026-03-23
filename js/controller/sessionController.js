import SessionView from "../view/sessionView.js";

export default class SessionController {

    constructor() {
        this.sessionRole = sessionStorage.getItem('role') || 'user';
        this.sessionView = new SessionView();
    }

    login() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
    }


    sessionCheck() {
        if(this.sessionRole === null) {
            this.sessionView.renderNull();
        } else {
            if(this.sessionRole === 'administrateur') {
                this.sessionView.renderAdmin();
            } else if(this.sessionRole === 'administration') {
                this.sessionView.renderGestion();
            } else if(this.sessionRole === 'user') {
                this.sessionView.renderUser();
            }
        }
    }
}