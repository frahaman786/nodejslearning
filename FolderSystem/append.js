import { open } from "fs/promises";
async function main(){
    const fileHandle = await open("notes.txt", "a");

    await fileHandle.appendFile("Hello");
    await fileHandle.appendFile("My self fazley");

    await fileHandle.close();
}
main()