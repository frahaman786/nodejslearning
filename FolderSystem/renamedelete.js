//For Rename
const fs = require('node:fs/promises');


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function rename(){
    try{
        await fs.rename('./Test', './Tested');
        console.log("Renamed....");
    }catch (err){

        console.log(err);
    }
}
//delete
async function removeFolder(){
    try{
        await fs.rmdir('./Tested');
        console.log("File Removed.....");

    }catch(err){
        console.log(err);
    }
}
//main
async function main(){
    await rename();
    console.log("Waiting For 5 Second");
    await delay(5000);
    await removeFolder();
    
}
main();






