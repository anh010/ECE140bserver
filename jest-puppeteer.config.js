module.exports = {
  launch: {
    dumpio: true,
    headless: true
  },
  browser: 'chromium',
  browserContext: 'default',
  server: {
    command: 'node ./source/main/home_page/homePage.js,
    port: 5500,
    launchTimeout: 10000,
    debug: true,
  },
}
