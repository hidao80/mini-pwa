/**
 * Service Worker Installer
 */
export function install() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js");
  }  
}
