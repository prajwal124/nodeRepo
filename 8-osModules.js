const os = require(`os`);

//info about current user

const currentUser = os.userInfo();
console.log(currentUser);

//system uptime
console.log(os.uptime() + ` in seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOs);
