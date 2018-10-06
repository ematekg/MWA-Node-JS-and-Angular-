const os=require('os');
const {Observable}=require('rxjs');
function checkSystem(){


console.log('checking your System');

if(os.totalmem()<4*1024*1024*1024)
console.log('THe app needs at least 4GB ram');

if(os.cpus().length<2)
console.log('Processor is not supported');
else
console.log("System is  checked succesfully");


}
//using observable



function checkSystemObservable()
{
console.log("Checking system using observable...");
Observable.create(observer=>{
    const memSize=os.totalmem();
    if(memSize<4*1024*1024*1024)
    {
        console.log('THe app needs at least 4GB ram');
        observer.complete();
    }
        
    const cpuCores=os.cpus().length;
    if(cpuCores<12)
    {
        observer.error("Processor not supported");
        observer.complete();
    }
    observer.next("System is  checked succesfully");
    observer.complete();

}).subscribe(
    (message)=>console.log(message),
    (err)=>console.log(err)
)
}

checkSystem();
checkSystemObservable();