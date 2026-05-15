const http = require('http');
const server =http.createServer((req,resp)=>{
    if (req.url === "/") {
        resp.end("home page....")
        
    } else if(req.url === "/about") {
        resp.end("about page")
        
    }else{
        resp.end("error page")
    }
        
    })
       server.listen(2000,()=>{
        console.log("running....");

})