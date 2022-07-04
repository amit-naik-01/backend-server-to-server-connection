// Quick start, create an active ftp server.
const FtpSrv = require('ftp-srv');
const fs = require("fs");
hostname='127.0.0.1'
const port=21;
const ftpServer = new FtpSrv({
    url: 'ftp://' + hostname + ':' + port,

    anonymous: false,
    greeting : [ "Hello user"]
});

ftpServer.on('login', ({ connection, username, password }, resolve, reject) => { 
    if(username === 'anonymous' && password === 'anonymous'){
        return resolve({ root:"./public" });    
    }
    return reject(new errors.GeneralError('Invalid username or password', 401));
});


ftpServer.listen().then(() => { 
    console.log(`Ftp server has started at ftp://${hostname}:${port}/`)
})