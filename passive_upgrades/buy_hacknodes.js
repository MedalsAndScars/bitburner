/** @param {NS} ns */
export async function main(ns) {
  while (true) {
    let nodes = ns.hacknet.numNodes();
    if (ns.hacknet.getPurchaseNodeCost() < ns.getServerMoneyAvailable("home")){
      ns.hacknet.purchaseNode();
    }
    for (let i = 0; i <= nodes - 1; i++) {
      if (ns.hacknet.getCoreUpgradeCost(i, 1) < ns.getServerMoneyAvailable("home")) {
        ns.print(ns.hacknet.getCoreUpgradeCost(i, 1));
        ns.print("Buying Core for Node" + i);
        ns.hacknet.upgradeCore(i, 1);
      }
      else if (ns.hacknet.getRamUpgradeCost(i, 1) < ns.getServerMoneyAvailable("home")) {
        ns.print(ns.hacknet.getRamUpgradeCost(i, 1));
        ns.print("Buying RAM for Node" + i);
        ns.hacknet.upgradeRam(i, 1);
      }
      else if (ns.hacknet.getLevelUpgradeCost(i, 5) < ns.getServerMoneyAvailable("home")) {
        ns.print(ns.hacknet.getLevelUpgradeCost(i, 5));
        ns.print("Buying Level for Node" + i);
        ns.hacknet.upgradeLevel(i, 5);
      }
      await ns.sleep(1000);
    }
    await ns.sleep(1000);
  }
}