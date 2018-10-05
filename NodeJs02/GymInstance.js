const gym=require('./Gym')

const g=new gym();

g.on('go',d=>console.log(d));
setInterval(function(){g.workout()},1000);
