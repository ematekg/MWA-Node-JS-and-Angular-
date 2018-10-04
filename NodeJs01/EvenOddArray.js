
function even(data){

const d=data.reduce((b,e,i)=>{
    if(e%2===0)
    b.push(e);
   return b;
    },[]);
    console.log(d);

}

function odd(data){
    const d=data.reduce(function(b,e,i){
       if(!(e%2===0))
       b.push(e);
       return b;
       
       },[]);
   
       console.log(d);
   
   }


console.log('start');
process.nextTick(even,[1,2,3,4,5,6,7,8]);
process.nextTick(odd,[1,2,3,4,5,6,7,8]);
console.log('end');

