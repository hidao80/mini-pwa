import * as sw from "./sw_installer.js";

/**
 * Add event listener to the Generate button
 */
document.getElementById("generate").addEventListener("click", () => {
  document.getElementById("uuid").value = crypto.randomUUID();
});

window.addEventListener("load", (e) => {
  sw.install();
});
