const timestamp = require('moment')(Date.now()).format('HH:mm:ss');

module.exports = function (msg) {
  const tmp = msg.split('');
  var header = '';
  var footer = '';

  tmp.forEach(function() {
    header += '=';
    footer += '-'
  });

  console.log('[' + timestamp + ']', header.substr(11, msg.length));
  console.log(msg);
  console.log(footer);
};
