/**
 * @author MintDaL
 * @warn Do not edit code or edit credits
 */

module.exports.config = {
  name: "bot",
  version: "1.2.6",
  hasPermssion: 0,
  credits: "MintDaL",
  description: "Một số thông tin về bot",
  commandCategory: "Người dùng",
  hide:true,
  usages: "?",
  cooldowns: 5,
};


module.exports.run = async function ({ api, event, args, Users, permssion, getText ,Threads}) {
  const content = args.slice(1, args.length);
  const { threadID, messageID, mentions } = event;
  const { configPath } = global.client;
  const { ADMINBOT } = global.config;
   const { NDH } = global.config;
  const { userName } = global.data;
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  const { writeFileSync } = global.nodemodule["fs-extra"];
  const mention = Object.keys(mentions);
  delete require.cache[require.resolve(configPath)];
  var config = require(configPath);
  const listAdmin = ADMINBOT || config.ADMINBOT || [];
  const listNDH = NDH || config.NDH ||  [];
  {
    const PREFIX = config.PREFIX;
    const namebot = config.BOTNAME;
    const { commands } = global.client;
    const threadSetting = (await Threads.getData(String(event.threadID))).data || 
    {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
    : global.config.PREFIX;
    const dateNow = Date.now();
    const time = process.uptime(),
	      	hours = Math.floor(time / (60 * 60)),
		      minutes = Math.floor((time % (60 * 60)) / 60),
		      seconds = Math.floor(time % 60);
    const data = [
      "Bạn không thể tìm được lệnh admin tại 'help' của bot",
     "Đừng mong chờ gì từ bot.",
      "Cái đoạn này á? Của bot.",
      "Nếu muốn không lỗi lệnh thì hãy xài những lệnh có trong help vì những lệnh lỗi đã bị ẩn rồi.",
      "Đây là một con bot được các coder của MiraiProject nhúng tay vào.",
      "Muốn biết sinh nhật của chủ nhân tôi thì hãy xài 'birthday'.",
      "Cặc.",
      "Cút.",
      "Lồn.",
      "Bạn chưa biết.",
      "Bạn đã biết.",
      "Bạn sẽ biết.",
      "Không có gì là hoàn hảo, tôi cũng là ví dụ.",
      "Mirai dropped.",
      "bot là MiraiProject nhưng module là idea của SpermBot.",
      "Bạn không biết cách sử dụng bot? Đừng dùng nữa.",
      "Muốn chơi game? Qua bot khác mà chơi đây không rảnh",
      "Bot có thể hiểu phụ nữ nhưng không thể có được họ.",
      "Bot cân spam nhưng không có gì đáng để bạn spam."
    ];
    var link = [
      "https://i.imgur.com/u6JERZ5.jpeg",
"https://i.imgur.com/kYEaPDy.jpg",
"https://i.imgur.com/vOX9Zk0.jpg",
"https://i.imgur.com/E6ah1UK.jpg",
"https://i.imgur.com/WeMR702.jpg",
"https://i.imgur.com/YjOxaBD.jpg",
"https://i.imgur.com/EzovmPx.jpg",
"https://i.imgur.com/TxsicQy.jpg",
"https://i.imgur.com/jKufVNr.jpg",
"https://i.imgur.com/H21d8eH.jpg",
"https://i.imgur.com/BxwbE4t.jpg",
"https://i.imgur.com/i71XbOL.jpg",
"https://i.imgur.com/w6fsOcA.jpg",
"https://i.imgur.com/N2a8gX4.jpg",
"https://i.imgur.com/2A4E60d.jpg",
"https://i.imgur.com/RbMM9iP.jpg",
"https://i.imgur.com/kF7kvTA.jpg",
"https://i.imgur.com/0OxX2Cg.jpg",
"https://i.imgur.com/g9HCusi.jpg",
"https://i.imgur.com/0RTEZBI.jpg",
"https://i.imgur.com/Cz74tde.jpg",
"https://i.imgur.com/GlmzOoO.jpg",
"https://i.imgur.com/VtJhV2c.jpg",
"https://i.imgur.com/72ouksg.jpg"
    ];
    
    var i = 1;
    var msg = [];
    const moment = require("moment-timezone");
    const date = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
    for (const idAdmin of listAdmin) {
      if (parseInt(idAdmin)) {
        const name = await Users.getNameUser(idAdmin);
        msg.push(`${i++}/ ${name} - ${idAdmin}`);
      }
    }
    var msg1 = [];
            for (const idNDH of listNDH) {
                if (parseInt(idNDH)) {
                  const name1 = (await Users.getData(idNDH)).name
                    msg1.push(`${i++}/ ${name1} - ${idNDH}`);
                }
            }
    var callback = () => 
      api.sendMessage({ body: `====「 ${namebot} 」====\n» Prefix hệ thống: ${PREFIX}\n» Prefix box: ${prefix}\n» Modules: ${commands.size}\n» Ping: ${Date.now() - dateNow}ms\n──────────────\n======「 ADMIN 」 ======\n${msg.join("\n")}\n──────────────\nBot has been working for ${hours} hour(s) ${minutes} minute(s) ${seconds} second(s)\n\n» Total users: ${global.data.allUserID.length} \n» Total threads: ${global.data.allThreadID.length}\n──────────────\n[Bạn có biết?]: ${data[Math.floor(Math.random() * data.length)]}`, attachment: fs.createReadStream(__dirname + "/cache/nah.jpg"), }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/nah.jpg"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/nah.jpg")).on("close", () => callback()); 
  }
};