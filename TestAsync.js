const {readFile} = require("fs")

function readFileCapital(path)
{
    return new Promise((resolve, reject) =>{
    readFile(path,"utf8",(error, result)=>{
        if(error)
        {
            reject(error)  
        }
        
        resolve(result);

    })})
}



// readFileCapital("../TestText.txt",(str)=>{
//     str = str.substring(0,5);
//     console.log(str);
// }).then(result=>console.log(result),
//  (error)=>console.log(error)
//  );

// var start = async(path, callback)=>{
//     try{
//         const f = await readFileCapital(path);
//         callback(f);
//     }
//     catch(error)
//     {
//         console.log(error)
//     }
// }

async function start(path, callback)
{
    try
    {
        const f  = await readFileCapital(path);
        callback(f);
    }
    catch(error)
    {
        console.log(error);
    }

}

// start("./TestText.txt",(str)=>{
//         str = str.substring(0);
//          console.log(str);
//      });

async function hello(){
    var value= 0;
    let prom = new Promise((resolve, reject)=>
    {
        setTimeout(()=>resolve(10),2000);
    });

    value = await prom;

    console.log("Aync function : ",value);
    
    
}

//hello().then(a=>console.log("Result : ",a),error=>console.error("Error : ", error));
hello();
console.log("Last stmt")