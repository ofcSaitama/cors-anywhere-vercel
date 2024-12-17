// server.js
const cors_anywhere = require('cors-anywhere');

const host = '0.0.0.0';
const port = process.env.PORT || 8080;

cors_anywhere.createServer({
  originWhitelist: [], // Allows all origins
  requireHeaders: [],  // Optional: Remove if you don't need specific headers
  removeHeaders: ['cookie', 'cookies', 'authorization'], // Remove sensitive headers (optional)
}).listen(port, host, () => {
  console.log(`CORS Anywhere server running on ${host}:${port}`);
});
