
//using Normal Function
const dns=require('dns');
dns.resolve4('www.mum.edu',(err,addr)=>{
console.log(` www.mum.edu iP address resolved using normal function: ${addr[0]}`);

});

//using promises
const {promisify}= require('util');
const promis=promisify(dns.resolve4);
promis('www.mum.edu')
.then(data=>console.log(` www.mum.edu iP address resolved using promise: ${data[0]}`))
.catch(err=>console.log(err));

//using Asych Wait

async function aysWait(){
    try{
    const ipadd=await promis('www.mum.edu');
    console.log(` www.mum.edu iP address resolved using Asynch and Wait : ${ipadd[0]}`);
}
    catch(err){
        console.log(err);
    }
}
aysWait();

//using Observables

const{Observable,from}=require('rxjs');
from(promis('www.mum.edu'))
.subscribe(r=>console.log(` www.mum.edu iP address resolved using Observables: ${r[0]}`),e=>console.log(e));

