module.exports = {
  launch: {
    dumpio: true,
    headless: true
  },
  server: {
    command: 'http-server ./source/main/',
    port: 5500,
    launchTimeout: 10000,
    debug: true,
  },
}
