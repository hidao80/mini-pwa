/**
 * Service Worker Installer
 */
export function install(subDirectory = "") {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/mini-pwa" + "/sw.js");
  }  
}
