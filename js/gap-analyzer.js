class GapAnalyzer {
    async analyzeAllHops(target, testResults, cdnInfo) {
        const gaps = [];
        for (const [region, data] of Object.entries(testResults.regions)) {
            if (data.statistics.avg_ttfb_ms > 300) gaps.push({ check: 'Regional Latency', severity: 'HIGH', description: `${region} high latency: ${Math.round(data.statistics.avg_ttfb_ms)}ms`, impact: 'Poor user experience' });
        }
        let score = 100 - (gaps.length * 15);
        let severity = score >= 80 ? 'LOW' : score >= 60 ? 'MEDIUM' : score >= 40 ? 'HIGH' : 'CRITICAL';
        return { overall_score: Math.max(0, score), severity, gaps };
    }
}
window.gapAnalyzer = new GapAnalyzer();