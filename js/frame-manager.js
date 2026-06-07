class FrameManager {
    constructor() { this.frames = { cdn: { id: 'frame-cdn', loaded: false }, lb: { id: 'frame-lb', loaded: false }, origin: { id: 'frame-origin', loaded: false }, app: { id: 'frame-app', loaded: false }, cache: { id: 'frame-cache', loaded: false }, db: { id: 'frame-db', loaded: false } }; this.init(); }
    init() { this.setupMessageListener(); }
    setupMessageListener() { window.addEventListener('message', (event) => { if (event.data?.type === 'FRAME_READY') { console.log(`Frame ${event.data.frameId} ready`); } }); }
}
window.frameManager = new FrameManager();