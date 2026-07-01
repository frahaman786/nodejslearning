import { stat } from "fs/promises";
async function check(){
    const info = await stat("photo.jpeg");
    //Creation Time
    console.log("Creation Time: " + info.birthtime);
    //file size
    console.log("File Size: " + info.size);
    //access time
    console.log("Access Time: " + info.atimeMs);
    //check if it is file
    console.log("Is it file: " + info.isFile());
    //check if it is folder
    console.log("Is is Folder: " + info.isDirectory());
    //last access time
    console.log("Last Access Time: " + info.atime);

    if(info.size > 1*1024*1024){
        console.log("File is too big");
    }else{
        console.log("Accepted file");
    }
}
check();