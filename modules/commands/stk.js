module.exports.config = {
  name: "stk",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Q.Huy",
  description: "Donate cho admin",
  commandCategory: "Người dùng",
  usages: "stk",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/CygJIqC.gif",
"https://i.imgur.com/ij2RQ0j.gif",
  ];
	  var callback = () => api.sendMessage({body:``, attachment: fs.createReadStream(__dirname + "/cache/5.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.gif")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.gif")).on("close",() => callback());
   };