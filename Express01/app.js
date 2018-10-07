const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const RX = require('rxjs/Rx');
const {from,Observable} = RX;
const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.set('x-powered-by','false');
app.set('strict routing',true);
app.enable('case sensitive routing');
app.enable('trust proxy');

app.use(express.static('views'))

app.get('/users',(req,res)=>
{
    const fetchusers=fetch('http://jsonplaceholder.typicode.com/users');
    var fetchPromise=fetchusers.then(users=>{return users.json()});
    //Using Promise
    // fetchPromise.then(jsonusers=>{
    //        res.render("users",{"users":jsonusers});
    // }).catch((error)=>console.log(error));

    //Using Async Await
    // async function renderUsers()
    // {
    // try{
    //     let jsonusers=await fetchPromise;
    //     console.log(jsonusers);
    //     res.render("users",{"users":jsonusers});
    // }
    // catch(error)
    // {
    //     console.log(error);
    // }
    // }
    // renderUsers();

    //Using Rx Observables
    Observable.from(fetchPromise).subscribe(
        (jsonusers)=>{
            console.log(jsonusers);
            res.render("users",{"users":jsonusers});
        },
        (error)=>{ console.log(error);}
    )

});

app.listen(1111);