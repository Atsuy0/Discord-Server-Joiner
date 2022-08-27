const lineReader = require('line-reader');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fs = require('fs')
const setColors = require("hexadecimalcl");
var colors = require('colors');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.clear();

console.log(" ".magenta)
console.log(" ".magenta)
console.log("      ░██████╗███████╗██████╗░██╗░░░██╗███████╗██████╗░  ░░░░░██╗░█████╗░██╗███╗░░██╗███████╗██████╗░".magenta)
console.log("      ██╔════╝██╔════╝██╔══██╗██║░░░██║██╔════╝██╔══██╗  ░░░░░██║██╔══██╗██║████╗░██║██╔════╝██╔══██╗".magenta)
console.log("      ╚█████╗░█████╗░░██████╔╝╚██╗░██╔╝█████╗░░██████╔╝  ░░░░░██║██║░░██║██║██╔██╗██║█████╗░░██████╔╝".magenta)
console.log("      ░╚═══██╗██╔══╝░░██╔══██╗░╚████╔╝░██╔══╝░░██╔══██╗  ██╗░░██║██║░░██║██║██║╚████║██╔══╝░░██╔══██╗".magenta)
console.log("      ██████╔╝███████╗██║░░██║░░╚██╔╝░░███████╗██║░░██║  ╚█████╔╝╚█████╔╝██║██║░╚███║███████╗██║░░██║".magenta)
console.log("      ╚═════╝░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝  ░╚════╝░░╚════╝░╚═╝╚═╝░░╚══╝╚══════╝╚═╝░░╚═╝".magenta)
console.log(" ".magenta)
console.log(" ".magenta)
console.log(" ".magenta)
console.log(" ".magenta)




let invitelink = readline.question('            Paste server invite code -> https://discord.gg/', invitelink => {
    console.clear();

console.log(" ".magenta)
console.log(" ".magenta)
console.log("      ░██████╗███████╗██████╗░██╗░░░██╗███████╗██████╗░  ░░░░░██╗░█████╗░██╗███╗░░██╗███████╗██████╗░".magenta)
console.log("      ██╔════╝██╔════╝██╔══██╗██║░░░██║██╔════╝██╔══██╗  ░░░░░██║██╔══██╗██║████╗░██║██╔════╝██╔══██╗".magenta)
console.log("      ╚█████╗░█████╗░░██████╔╝╚██╗░██╔╝█████╗░░██████╔╝  ░░░░░██║██║░░██║██║██╔██╗██║█████╗░░██████╔╝".magenta)
console.log("      ░╚═══██╗██╔══╝░░██╔══██╗░╚████╔╝░██╔══╝░░██╔══██╗  ██╗░░██║██║░░██║██║██║╚████║██╔══╝░░██╔══██╗".magenta)
console.log("      ██████╔╝███████╗██║░░██║░░╚██╔╝░░███████╗██║░░██║  ╚█████╔╝╚█████╔╝██║██║░╚███║███████╗██║░░██║".magenta)
console.log("      ╚═════╝░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝  ░╚════╝░░╚════╝░╚═╝╚═╝░░╚══╝╚══════╝╚═╝░░╚═╝".magenta)
console.log(" ".magenta)
console.log(" ".magenta)
console.log(" ".magenta)
console.log(" ".magenta)

function join_token(token) {
    var req = new XMLHttpRequest();
    req.open("POST", "https://discord.com/api/v9/invites/" + invitelink, false);
    req.setRequestHeader("accept", "*/*");
    req.setRequestHeader("accept-language", "pt-PT,pt;q=0.9,en-US;q=0.8,en;q=0.7");
    req.setRequestHeader("authorization", token);
    req.setRequestHeader("content-type", "application/json");
    req.setRequestHeader("sec-ch-ua-mobile", "?0");
    req.setRequestHeader("sec-fetch-dest", "empty");
    req.setRequestHeader("sec-fetch-mode", "cors");
    req.setRequestHeader("sec-fetch-site", "same-origin");
    req.setRequestHeader("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36");
    req.setRequestHeader("x-context-properties", "eyJsb2NhdGlvbiI6IkpvaW4gR3VpbGQiLCJsb2NhdGlvbl9ndWlsZF9pZCI6Ijk1ODQ5NDk5MDU1ODk1MzU1MyIsImxvY2F0aW9uX2NoYW5uZWxfaWQiOiI5NTg0OTU4NDc5NzExOTI4NjIiLCJsb2NhdGlvbl9jaGFubmVsX3R5cGUiOjB9");
    req.setRequestHeader("x-debug-options"," bugReporterEnabled");
    req.setRequestHeader("x-discord-locale", "en-US");
    req.setRequestHeader("x-super-properties", "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwic3lzdGVtX2xvY2FsZSI6InB0LVBUIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwMC4wLjQ4OTYuMTI3IFNhZmFyaS81MzcuMzYiLCJicm93c2VyX3ZlcnNpb24iOiIxMDAuMC40ODk2LjEyNyIsIm9zX3ZlcnNpb24iOiIxMCIsInJlZmVycmVyIjoiaHR0cHM6Ly9kaXNjb3JkLmNvbS8iLCJyZWZlcnJpbmdfZG9tYWluIjoiZGlzY29yZC5jb20iLCJyZWZlcnJlcl9jdXJyZW50IjoiIiwicmVmZXJyaW5nX2RvbWFpbl9jdXJyZW50IjoiIiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X2J1aWxkX251bWJlciI6MTM4MjU0LCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsfQ==");
    req.onload = function () {
        const result = JSON.parse(this.responseText);
        const coderesult = result.code
        if (coderesult == null) {console.log(`            [-] ${token} | Fail for join`.red)}
        if (coderesult == invitelink) {console.log(`            [+] ${token} | Success for join`.green)}
        else {(console.log(`            [!] ${token} | ${this.responseText}`.yellow))}
    };
    req.send('{}');

}
lineReader.eachLine('./tokens.txt',(line,last)=>{
    join_token(line)
})

readline.close();
});
