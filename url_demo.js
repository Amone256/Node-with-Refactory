const url = require('url');

const myurl = new URL('https:/mywebsite.com/helloworld.html');

//serialized url
console.log(myurl.href);
//Host (root domain)
console.log(myurl.host);
//host name without path
console.log(myurl.hostname);

/// And so on...