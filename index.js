const timestamp = `[${require('moment')(Date.now()).format('HH:mm:ss')}]`;

module.exports = function (msg) {
  const tmp = msg.split('');
  let header = '';
  let footer = '';

  tmp.forEach(function() {
    header += '=';
    footer += '-';
  });

  console.log(`${timestamp} ${header.substr(11, msg.length)}`);
  console.log(msg);
  console.log(footer);
};
