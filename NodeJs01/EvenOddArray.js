
Array.prototype.even=function(){
    process.nextTick(()=>{
      const d=this.reduce((b,e,i)=>{
          if(e%2===0)
          b.push(e);
         return b;
          },[]);
          console.log(d);
  
    })
  
        
      }
  
  Array.prototype.odd=function(){
      process.nextTick(()=>{
          const d=this.reduce(function(b,e,i){
              if(!(e%2===0))
              b.push(e);
              return b;
              
              },[]);
          
              console.log(d);
      });
      
     
     }
  
  console.log('start');
  [1,2,3,4,5,6,7,8].even();
  [1,2,3,4,5,6,7,8].odd();
  console.log('end');
  
  