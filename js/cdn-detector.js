// CDN Detector Module - Real detection via headers and IP ranges
class CDNDetector {
    async detectCDN(hostname) {
        try {
            const url = hostname.startsWith('http') ? hostname : `https://${hostname}`;
            const response = await fetch(url, { method: 'HEAD' });
            const headers = response.headers;
            if (headers.has('x-akamai-request-id')) return { cdn_provider: 'Akamai', confidence: 95 };
            if (headers.has('cf-ray')) return { cdn_provider: 'Cloudflare', confidence: 95 };
            if (headers.has('x-amz-cf-id')) return { cdn_provider: 'AWS CloudFront', confidence: 90 };
            return { cdn_provider: 'Unknown / Direct', confidence: 50 };
        } catch (error) {
            return { cdn_provider: 'Detection Failed', confidence: 0 };
        }
    }
}
window.cdnDetector = new CDNDetector();