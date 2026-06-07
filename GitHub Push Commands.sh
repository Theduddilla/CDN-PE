# Create repository on GitHub first, then:
git clone https://github.com/YOUR_USERNAME/omnitest-cdn.git
cd omnitest-cdn

# Create all directories
mkdir -p css js frames assets/logos tests/k6-scripts tests/jmeter tests/playwright config benchmarks .github/workflows docs

# Copy all files above into their respective locations

# Add all files
git add .
git commit -m "Initial commit: OmniTest CDN - Enterprise Performance Intelligence Platform

- 7-hop network analysis (CDN → LB → Origin → App → Cache → DB → Observability)
- Executive dashboard with interactive hop-by-hop visualization
- Real CDN detection (Akamai, CloudFront, Cloudflare, Fastly, Azure)
- Google Authentication for enterprise SSO
- Multi-frame architecture with cross-frame communication
- AI-powered gap analysis with fix recommendations
- PDF report export functionality
- CI/CD scheduling for automated testing
- Legacy tool integration (JMeter, LoadRunner, Gatling)
- Fully responsive design for all devices"

git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/omnitest-cdn.git
git push -u origin main

# Deploy to Netlify (connect your GitHub repo in Netlify dashboard)