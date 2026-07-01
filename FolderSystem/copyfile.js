import { copyFile } from "fs/promises";
async function copy(){
    try{
        await copyFile("hello.txt", "backup.txt");
        console.log("File copyed");

    }catch(err){
        console.log(err);
    }
}
copy();