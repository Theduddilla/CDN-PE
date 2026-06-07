// js/auth.js - Simplified without Google OAuth
class LocalAuth {
    constructor() {
        this.user = { name: 'Performance Engineer', email: 'local@omnitest.com', isGuest: true };
        this.isAuthenticated = true;
        this.init();
    }

    init() {
        console.log('OmniTest CDN - Local Mode Active');
        this.updateUI();
    }

    updateUI() {
        const app = document.getElementById('appContainer');
        if (app) app.style.display = 'block';
        
        const nameSpan = document.getElementById('userName');
        const emailSpan = document.getElementById('userEmail');
        
        if (nameSpan) nameSpan.textContent = this.user.name;
        if (emailSpan) emailSpan.textContent = this.user.email;
    }

    getUser() { return this.user; }
    isLoggedIn() { return true; }
}

window.googleAuth = new LocalAuth();