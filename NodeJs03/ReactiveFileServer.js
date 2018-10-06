const {Subject}=require('rxjs');
const subject=new Subject();
const url=require('url');
const http=require('http');
const {fork}=require('child_process');

http.createServer(function(req,resp){

    subject.next({req:req,resp:resp});
}
).listen(4000,()=>console.log('started server on port 4000'));
subject.subscribe(x=>fileHandler(x));

function fileHandler(data){
     const path=url.parse(data.req.url,true).query.url;

const childp=fork('fileHandler.js');
childp.send(path);
childp.on('message',(d)=>{
   
    if(d==='end')
     data.resp.end();
    else
    data.resp.write(d);

});
  



}

