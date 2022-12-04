module.exports = {
  launch: {
    dumpio: true,
    headless: true
  },
  browser: 'chromium',
  browserContext: 'default',
  server: {
    port: 5500,
    launchTimeout: 10000,
    debug: true,
  },
}
