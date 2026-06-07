class ReportGenerator {
    generateHTMLReport(results) {
        return `<!DOCTYPE html><html><head><title>OmniTest Report</title></head><body><h1>Performance Report</h1><pre>${JSON.stringify(results, null, 2)}</pre></body></html>`;
    }
    downloadPDF(element) { if (typeof html2pdf !== 'undefined') { html2pdf().set({ margin: 10, filename: 'omnitest-report.pdf' }).from(element).save(); } else { alert('PDF export requires html2pdf library'); } }
}
window.reportGenerator = new ReportGenerator();