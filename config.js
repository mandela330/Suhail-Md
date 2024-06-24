const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348117971863";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_33_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA4LFxuICAgICAgICA4MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDcwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2MixcbiAgICAgICAgMTg5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzLFxuICAgICAgICA0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg2LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDkxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0OSxcbiAgICAgICAgODksXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTksXG4gICAgICAgIDkwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDksXG4gICAgICAgIDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDU2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODMsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA4NCxcbiAgICAgICAgODUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk4LFxuICAgICAgICA5MixcbiAgICAgICAgMjE0LFxuICAgICAgICA0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAzNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDk3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE1LFxuICAgICAgICA3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAzOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjYsXG4gICAgICAgIDg5LFxuICAgICAgICA3MixcbiAgICAgICAgNDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAzOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjksXG4gICAgICAgIDM1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieThBeWkrTkxxdngwWEtYdFBjQzk3Y2RZdTBtSnNhOERVTElmNm5IZ0lYbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQkVydnEzRDVSSHV5YjlvRUJlQnM2Z1wiLFxuICBcInBob25lSWRcIjogXCI2NDFiZTQwMy04OGNjLTQ5M2UtYTAzYS1kYmFmZGEyZDY0ZWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTYsXG4gICAgICAxMSxcbiAgICAgIDIxOCxcbiAgICAgIDE4OCxcbiAgICAgIDEyNCxcbiAgICAgIDI0OCxcbiAgICAgIDIzNCxcbiAgICAgIDQxLFxuICAgICAgMjUsXG4gICAgICAxNzgsXG4gICAgICAxNCxcbiAgICAgIDQ2LFxuICAgICAgMTMzLFxuICAgICAgMTY1LFxuICAgICAgMjksXG4gICAgICAxMTcsXG4gICAgICAxMDMsXG4gICAgICAyMDcsXG4gICAgICAxNjUsXG4gICAgICAyMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjUsXG4gICAgICAxMTcsXG4gICAgICAxNyxcbiAgICAgIDIyMCxcbiAgICAgIDk0LFxuICAgICAgMjAsXG4gICAgICA0NSxcbiAgICAgIDI0MyxcbiAgICAgIDE4MCxcbiAgICAgIDQ3LFxuICAgICAgMTE0LFxuICAgICAgNTQsXG4gICAgICA5NyxcbiAgICAgIDEwMixcbiAgICAgIDE0NSxcbiAgICAgIDE2NixcbiAgICAgIDEzNyxcbiAgICAgIDEwNCxcbiAgICAgIDE4NSxcbiAgICAgIDE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjQxUThaUkhLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTE3OTcxODYzOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1MjM2ODAxNjkzNjk3NToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00vQjdOa0ZFUEQ2NUxNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieHdXd09ialUrYzZJbG9UVFpqZ1I5YzdOOVdNblQyYm95N3Y0dDRWSFhqOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNdWRzaXVQZ0lxL0ZYNVlUTTUzelg3UXJNdkFKd0V4Z1lxZmF3OVp0VllXU3pQM3o0cDBQM0Y1V1ZwdWVNeXZqVkc4YURwQUd1MWF0bllKT3Y2aGREUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIyR3VGWHBIYkw3OC9sdTMvU242akVqMWNUSUZCKzZTV0lPaFFnREh0amg5MVAvYnVBVlVTMlNrSmNFY0dNUm1qSHhjYU9zMXVmdG9VaEk2QzZ4cnVEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTE3OTcxODYzOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MjIxNjIwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
