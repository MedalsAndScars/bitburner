/** @param {NS} ns */
export async function main(ns, target = ns.args[0]) {
  while (true) {
    await ns.sleep(100);
    await ns.hack(target);
  }
}