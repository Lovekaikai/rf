var fs=require('fs');

var rf=function(path,callback){

fs.access(path, (err) => {
   if(err){
     //throw err;
      callback(err);
   }
    fs.readFile(path,'utf8',(err,data)=>{
       // console.log(123);

        callback(null,data)
    })
});

}
module.exports=rf;