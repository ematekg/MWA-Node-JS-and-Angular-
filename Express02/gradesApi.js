const express=require('express');
const morgan=require('morgan');
const app=express();
const cors=require('cors');
const {check,validationResult}=require('express-validator/check');

let grades=[
    {id:1,name:"merih",course:"mwa",grade:"A"},
    {id:2,name:"amanuel",course:"mwa",grade:"A"},
    {id:3,name:"john",course:"mwa",grade:"B"}
];


app.use(cors());
app.use(express.json());
app.use(morgan());
app.get('/grades',(req,resp)=>{
    resp.send(grades);
 
});


app.post('/grades',[check('id').isNumeric().withMessage('ID shoudl not be empty and is numeric')

,check('grade').isLength({max:1})],

(req,resp)=>{


    if(!(Object.keys(req.body).length===0)){
      
const errors=validationResult(req);
if(!errors.isEmpty()){
    return resp.status(422).json({errors:errors.array()});
}
        grades.push(req.body);
        resp.send(grades);
    }
    else{
        throw new Error('insert json data');
    }
  
});


app.get('/grade/:id',(req,resp)=>{
    const id=req.params.id;
    
    grades.forEach(function(grade,index){
     
   if(grade.id==id)
   {
 return resp.send(grade);
    
    }}
    )
     
  });

app.put('/grade/:id',[check('id').isNumeric(),check('grade').isLength({max:1})],(req,resp)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return resp.status(422).json({errors:errors.array()});
    }

    const id=req.params.id;
    
 grades.forEach(function(grade,index){
  
if(grade.id==id)
{
    grades.splice(index,1);
  grades.push(req.body);
 
 }}
 )
    resp.send(grades);
});
app.delete('/grade/:id',(req,resp)=>{
    const id=req.params.id;
    
 grades.forEach(function(grade,index){
  
    if(grade.id==id)
    {
        grades.splice(index,1);
      
    }
     })

    resp.send(grades);
});
app.listen(3000,()=>{
console.log('server started on port 3000...');

})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send(err.message);
  })