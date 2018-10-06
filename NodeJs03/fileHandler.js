const fs=require('fs');
const path=require('path');
process.on('message',(d)=>{

const f=fs.createReadStream(path.join(__dirname,d));
f.on('data',(data)=>{
    process.send(data.toString());
})
f.on('end',(data)=>{
    process.send('end');
})
})