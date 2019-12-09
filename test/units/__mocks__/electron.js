module.exports = {
  require: jest.fn(),
  match: jest.fn(),
  app: {
    getPath: jest.fn(() => '/tmp'),
    name: 'Swifty'
  },
  remote: jest.fn(),
  dialog: jest.fn(),
  BrowserWindow: jest.fn()
}
