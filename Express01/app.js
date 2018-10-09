const express=require('express');
const axios=require('axios');
const {from}=require('rxjs');
const {map}=require('rxjs/operators');


const app=express();
app.set('trust proxy',true);
app.set('strict routing',true);
app.set('x-powered-by',false);
app.enable('case sensitive routing');

//using prmoises

app.get('/users',(req,resp)=>{
    axios.get('http://jsonplaceholder.typicode.com/users/').then(
        data=> resp.send(data.data)
    ).catch(e=>console.log(e))

})
let result;

//using Observables

app.get('/users',(req,resp)=>{
    from(axios.get('http://jsonplaceholder.typicode.com/users/'))
    .pipe(map(data=>data.data))
    .subscribe(data=>resp.send(data))
    
    })
    app.listen(3000,()=>console.log('server started on port 3000...'))
    
//using Aynch and wait

app.get('/users',async (req,resp)=>{
  
        try{
            result = await axios.get('http://jsonplaceholder.typicode.com/users/') ;
            resp.send(result.data);
        }catch(error){
            console.log(error);
        }
    
})
