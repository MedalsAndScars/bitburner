/** @param {NS} ns */
export async function main(ns, target = ns.args[0]) {
  while (true) {
    let host = ns.scan("home");
    for (let i = 0; i <= host[i].length - 1; i++) {
      if(host[i] != "pserv-*") {
        await ns.grow(host[i]);
        await ns.weaken(host[i]);
        await ns.hack(host[i]);
      }
    }
    await ns.sleep(100);
  }
}