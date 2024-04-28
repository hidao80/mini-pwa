/**
 * Service Worker Installer
 */
export function install(subDirectory = "") {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register(subDirectory + "/sw.js");
  }  
}
