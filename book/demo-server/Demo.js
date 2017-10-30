/**
 * Created by Administrator on 2017/10/27.
 */
let user =  require ('./User');

console.log('userName:'+ user.userName);

let http = require ('http');

let server = http.createServer((req,res)=>{
  res.statusCode = 200;
  res.setHeader("Content-Type","text/plain; charset=utf-8");
  res.end("Hello,Node.js");
});
server.listen(3000,'127.0.0.1',()=>{
  console.log("服务器")
})
