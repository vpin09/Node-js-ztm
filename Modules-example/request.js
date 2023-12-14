function encrypt(data){
    return 'encrpted data';
}
function send(url,data) {
    const encryptedData=encrypt(data)
    console.log(`sending ${encryptedData} to ${url}`);
}
module.exports={ send}