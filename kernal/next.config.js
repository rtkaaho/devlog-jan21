const TRIAGE_URL = "http://localhost:4000";
const STAR_WARS_URL = "http://localhost:5000";

module.exports = {
  rewrites() {
    return [
      {
        source: '/triage',
        destination: `${TRIAGE_URL}/triage`,
      },
      {
        source: '/triage/:path*',
        destination: `${TRIAGE_URL}/triage/:path*`,
      },
      {
        source: '/star-wars',
        destination: `${STAR_WARS_URL}/star-wars`,
      },
      {
        source: '/star-wars/:path*',
        destination: `${STAR_WARS_URL}/star-wars/:path*`,
      },
    ]
  },
}
