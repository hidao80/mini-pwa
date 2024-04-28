/**
 * Add event listener to the Generate button
 */
document.getElementById("generate").addEventListener("click", () => {
  document.getElementById("uuid").value = crypto.randomUUID();
});

/**
 * Service Worker Installer
 */
window.addEventListener("load", (e) => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/mini-pwa" + "/sw.js");
  }
});
