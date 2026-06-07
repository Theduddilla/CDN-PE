class CICDScheduler {
    constructor() { this.schedules = []; this.load(); }
    load() { const saved = localStorage.getItem('omnitest_schedules'); if (saved) this.schedules = JSON.parse(saved); }
    add(schedule) { this.schedules.push({ id: Date.now(), ...schedule }); localStorage.setItem('omnitest_schedules', JSON.stringify(this.schedules)); }
    runJmeter() { alert('JMeter test execution started!'); }
    runLoadrunner() { alert('LoadRunner test execution started!'); }
}
window.ciCdScheduler = new CICDScheduler();