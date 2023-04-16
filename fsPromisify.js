const {readFile, writeFile} = require("fs").promises;
const customeEvent = require("./eventHandling")

customeEvent.subscribeEvent((fileName, line)=>{console.log(`Filename ${fileName} with content: ${line}`);})
customeEvent.subscribeEvent((fileName, line)=>{console.log(`Filename ${fileName} `);})

const start  = async()=>{
    try {
        const firstFile = await readFile("./TestText.txt","utf-8");
        customeEvent.eventEmit("./TestText.txt",firstFile);
        customeEvent.eventEmit("./TestText.txt",firstFile);
        //console.log("First file :",firstFile)
        //await writeFile("./NewWrittenFile.txt",firstFile,{flag:'a'},"utf-8");
    } catch (error) {
        console(error);
    }
}

start();