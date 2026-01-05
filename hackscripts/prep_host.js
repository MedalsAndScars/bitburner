/** @param {NS} ns */
export async function main(ns, firstnode = ns.args[0]) {
  let hosts = ns.scan(firstnode);
  for (let i = 0; i <= hosts.length - 1; i++) {
    let subhost = ns.scan(hosts[i]);
    for (let j = 0; j <= subhost.length - 1; j++) {
      if (subhost[j] != firstnode) {
        openports(ns, subhost[j])
      }
    }
    openports(ns, hosts[i])
  }
}


async function openports(ns, host = ns.args[0]) {
  if (ns.getServerRequiredHackingLevel(host) <= ns.getHackingLevel() && !ns.hasRootAccess(host)) {
    if (ns.fileExists("BruteSSH.exe")) {
      ns.brutessh(host);
    }
    if (ns.fileExists("FTPCrack.exe")) {
      ns.ftpcrack(host);
    }
    if (ns.fileExists("relaySMTP.exe")) {
      ns.relaysmtp(host)
    }
    if (ns.fileExists("HTTPWorm.exe")){
      ns.httpworm(host)
    }
    ns.nuke(host);
  }
  else{
    stop
  }
}