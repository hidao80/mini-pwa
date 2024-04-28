/**
 * Add event listener to the Generate button
 */
document.getElementById("generate").addEventListener("click", () => {
  document.getElementById("uuid").value = crypto.randomUUID();
});
