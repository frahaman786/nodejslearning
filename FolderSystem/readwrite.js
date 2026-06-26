//To Read a Folder

//1. This is a synchronous method wait untill the wor completed
 const fs = require('node:fs');
const folderPath = "./test";
const files = fs.readdirSync(folderPath);
console.log(files);


//2. This is a Asynchronous method work for call back. Does not wait for previois work, here first will print done then file
fs.readdir(folderPath, (err, files) => {
    if(err){
        console.log(err);
        return
    }
    console.log(files);
});
console.log("Done"); 

//3. This is a promise based function insted of call back the function gives u a promise.
const fs = require("node:fs/promises");
async function readFolder() {
    try{
        const files = await fs.readdir("./jeet");
        console.log(files);
    } catch(err){
        console.log(err);
    }
}
readFolder(); 

//4. To Write and read something
//here one concept  is await, awit is basically wait for that function to complete it task before moving next code, because 
//next code depend on previous code, if we want to to complete other task then we shoud write the code before awit function 
//async is used because it tell the javascript that function contain asynchronous code and it may pause the code for some task

const bigData = "A".repeat(100_000_000);
const fs = require("node:fs/promises");
async function writefile(){
    try {
        const write =  fs.writeFile("./test/hello.txt",bigData);
        console.log("File Written successfully.");

        console.log(2+3);
        await write;
 
        const data = await fs.readFile("./test/hello.txt", "utf8");
        console.log("Written data is " + data);

    } catch(err){
        console.log(err);
    }
}
writefile();
