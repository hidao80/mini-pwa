/**
 * Service Worker Installer
 */
export function install(subDirectory = "") {
  window.addEventListener("load", (e) => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/mini-pwa" + "/sw.js");
    }
  });
}
