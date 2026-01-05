/** @param {NS} ns */
export async function main(ns) {
  let firstnode = "home"
  async function scanHosts() {
    let hosts = ns.scan(firstnode);
    for (let i = 0; i <= hosts.length - 1; i++) {
      let subhost = ns.scan(hosts[i]);
      for (let j = 0; j <= subhost.length - 1; j++) {
        if (subhost[j] != firstnode && !hosts.includes(subhost[j])) {
          hosts.push(subhost[j])
        }
      }
    }
  }
  scanHosts()
}