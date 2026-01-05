/** @param {NS} ns */
export async function main(ns) {
  while(true){
    let servers = ns.getPurchasedServers();
    ns.print(servers.length);
    for (let i = 0; i <= servers.length - 1; i++){
      let currentServer = servers[i];
      await ns.sleep(2000);
      ns.scp("multiple_hosts_hack.js",currentServer,"home");
      let currentRAM = ns.getServerMaxRam(currentServer);
      ns.print("Current Server is " + currentServer);
      if(currentRAM < ns.getServerUsedRam(currentServer)){
        var availableThreads = Math.floor((ns.getServerMaxRam(currentServer) - ns.getServerUsedRam(currentServer)) / ns.getScriptRam("multiple_hosts_hack.js"));
        ns.print("Threads " + availableThreads);
        ns.exec("multiple_hosts_hack.js",currentServer,availableThreads);
      }else{
        continue;
      }
    }
    await ns.sleep(100);
  }
}