const os = require('os');
const { memoryUsage } = require('process');

//platform
console.log(os.platform());

//cpu arch
console.log(os.arch);

//cpu core info
console.log(os.cpus);

//free memory
console.log(os.freemem());

//total memory
console.log(os.totalmem());

//home dir
console.log(os.homedir());

//up time
console.log(os.uptime());