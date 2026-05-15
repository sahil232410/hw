const http = require('http');
const fs = require('fs');

const server = http.createServer((req,resp)=>{
    let data = './demo/'
    switch (req.url) {
        case "/":
            data +="index.html";
            break;
        case "/about":
            data +="about.html";
            break;
        case "/contact":
            data +="contact.html";
            break;
    
        default:data+="index.html";
            break;
    }
fs.readFile(data,(error,result)=>{
    if (error) {
        console.log(error);
    }else{
        resp.end(result)
    }
})
})
server.listen(4600,()=>{
    console.log("Running!!!!");
    
})