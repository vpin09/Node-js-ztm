const response= require("./response");
const request = require("./request");

function  makeRequest(url,data ) {
  request.send(url,data);
  return response.read();
}
const responseData=makeRequest('https://google.com','hello')
console.log('responseData: ', responseData);