'use strict';
require('greenlock-store-fs')

var green = require('greenlock-express').create({
  version: 'draft-11',
  server: 'https://acme-v02.api.letsencrypt.org/directory', // staging
  email: 'chichtorya@gmail.com', // CHANGE THIS
  agreeTos: true,
  approveDomains: ['kiwik.onrender.com', 'www.kiwik.onrender.com'], // CHANGE THIS
  configDir:  require('path').join(require('os').homedir() , 'acme','etc'),
  app: require('./index.js'),
  communityMember: true,
  store: require('greenlock-store-fs'),
  //debug: true
}).listen(80, 443);
