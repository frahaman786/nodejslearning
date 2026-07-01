import { access } from  "fs/promises";
async function chekfile(){
    try{
        await access ("notes.txt");
        console.log("File Exist");
    }catch(err){
        console.log(err);
    }
}
chekfile();