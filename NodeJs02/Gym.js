const EventEmitter=require('events');

class Gym extends EventEmitter{

constructor(){
    super();
    this.msg='Athlet is working out';
   // setInterval(this.workout,1000);
   }

workout(){
this.emit('go',this.msg);
}

}

module.exports=Gym;