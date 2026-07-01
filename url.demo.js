const url = require('url');
const myUrl = new URL('http://mywebiste.com/hello.html?id=100&status=active');

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString);
//host (root domain)
console.log(myUrl.host);
//hostname
console.log(myUrl.hostname);
//path name
console.log(myUrl.pathname);
//serialzied query
console.log(myUrl.search);
//Params Object
console.log(myUrl.searchParams);
//add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
//loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));