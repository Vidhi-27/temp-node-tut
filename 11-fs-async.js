const {readFile,writeFile} =require('fs')
//sync:we need to provide ?callback?(run when we are done,when the functionality is done then call)
//Buffer if we do not provide ?utf8?
console.log('start');

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
if(err){
    console.log(err)
    return
}
const second = result;
writeFile(
    './content/result-async.txt',
    `Here is the result : ${first} , ${second}`,
    (err,result)=>{
        if(err)
        {
            console.log(err)
            return
        }
        console.log('done with this task');

    })
    })
    
})
console.log('starting the next one');

