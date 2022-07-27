const os = require("os");

console.log(`The System Uptime is ${os.uptime}`);
console.log(os.cpus()[1]);

const currentOs = {
  name: os.type(),
  release: os.release(),
  cpus: os.cpus(),
  core_cnt: os.cpus().length,
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  user: os.userInfo(),
  uptime: os.uptime(),
  hostname: os.hostname(),
  platform: os.platform(),
};
