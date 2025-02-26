const http = require('http')

const server = http.createServer((req,res)=>{ 
  
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end("Hello for my server")
})

 
    const PORT= 5000 
    server.listen(PORT,()=>{
        console.log('server is running on port',PORT)
    }) 

 
 

