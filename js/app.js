/**
 * Add event listener to the Generate button
 */
document.getElementById("generate").addEventListener("click", () => {
  document.getElementById("uuid").value = crypto.randomUUID();
});

/**
 * When the Install button is clicked, install the PWA
 */
// Check if installation is possible
window.addEventListener("beforeinstallprompt", (event) => {
  // Store the event
  window.deferredPrompt = event;
});

// When the Install button is clicked, prompt installation
document.getElementById("install").addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    // Exit processing here if installation is not possible
    return;
  }

  // Consume the event and display the installation prompt
  promptEvent.prompt();

  // Process the result asynchronously
  const result = await promptEvent.userChoice;

  // Perform actions based on user choice
  if (result.outcome === "accepted") {
    console.log("User accepted the installation");
  } else {
    console.log("User declined the installation");
  }

  // Set deferredPrompt to null as it is disposable
  window.deferredPrompt = null;
});
