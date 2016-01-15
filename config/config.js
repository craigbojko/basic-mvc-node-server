var path = require('path')
var env = process.env.NODE_ENV || 'development'
var rootPath = path.normalize(__dirname + '/..')

console.log("NODE ENV ", process.env.NODE_ENV)
console.log("ENV ", env)
console.log("ROOTPATH ", rootPath)

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'feedback'
    },
    port: 5100,
    db: 'mysql://root:password@localhost/feedback_development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'feedback'
    },
    port: 5100,
    db: 'mysql://root@localhost/feedback_test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'feedback'
    },
    port: 5100,
    db: 'mysql://root@localhost/feedback_production'
  }
};

module.exports = config[env];
