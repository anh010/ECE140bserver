module.exports = {
  launch: {
    dumpio: true,
    headless: true
  },
  browser: 'chromium',
  browserContext: 'default',
  server: {
    command: 'node ./',
    port: 5500,
    launchTimeout: 10000,
    debug: true,
  },
}
