class RealtimeMonitor {
    constructor() { this.isRunning = false; this.data = []; }
    start(target) { this.isRunning = true; this.interval = setInterval(() => { if (this.isRunning) { const latency = Math.floor(Math.random() * 200) + 50; this.data.push({ timestamp: Date.now(), latency }); if (this.data.length > 100) this.data.shift(); } }, 1000); }
    stop() { this.isRunning = false; if (this.interval) clearInterval(this.interval); }
    getData() { return this.data; }
}
window.realtimeMonitor = new RealtimeMonitor();