/** @param {NS} ns */
export async function main(ns) {
  while(true){
    let servers = ns.getPurchasedServers();
    ns.print(servers);
    for (let i = 0; i <= servers.length - 1; i++){
      let currentServer = servers[i];
      ns.scp("multiple_hosts_hack.js",currentServer,"home");
      let currentRAM = ns.getServerMaxRam(currentServer);
      let newRAM = currentRAM * 2;
      ns.print("Current Server is " + currentServer);
      if(ns.getPurchasedServerMaxRam() > ns.getServerMaxRam(currentServer) && ns.getPurchasedServerUpgradeCost(currentServer,newRAM) <= ns.getServerMoneyAvailable("home")){
        ns.upgradePurchasedServer(currentServer,newRAM);
        var availableThreads = Math.floor((ns.getServerMaxRam(currentServer) - ns.getServerUsedRam(currentServer)) / ns.getScriptRam("multiple_hosts_hack.js"));
        ns.exec("multiple_hosts_hack.js",currentServer,availableThreads);
      }
    }
    await ns.sleep(100);
  }
}