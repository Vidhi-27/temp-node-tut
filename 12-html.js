const http = require('http');

//both of the parameters are object
//req -> represents incoming request(client requesting from the web browser, som you can have methods and all kinds of useful stuff in that req object )
//res -> it is what we r sending back
const server = http.createServer((req,res)=> {
    if(req.url ==='/') //equal to home page(fpr home page use simple '/')
    {
        res.end('Welcome to our home page');
    }
   if(req.url === '/about')
   {
    res.end('Here is our short story');
    //due to res.end() it will not print or got o the statements out of this if {block}
   }
   //direct html, if any resource(/.....) is not avaliable
   res.end(`
    <h1>Oops!</h1>
    <p>Can't seem to find the page you are looking for.</p>
    <a href="/">back home</a>
    `)
})
//what port our serving going to be listening to
server.listen(5000)