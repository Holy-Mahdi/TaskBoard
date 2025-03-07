if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js")
      .then(() => console.log("Service Worker Registered"))
      .catch((err) => console.log("Service Worker Registration Failed:", err));
  }
  let deferredPrompt;
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  
  const installButton = document.createElement("button");
  installButton.textContent = "Install To-Do App";
  installButton.style.position = "fixed";
  installButton.style.bottom = "20px";
  installButton.style.right = "20px";
  installButton.style.padding = "10px";
  
  document.body.appendChild(installButton);

  installButton.addEventListener("click", () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choice) => {
      if (choice.outcome === "accepted") {
        console.log("User installed the app");
      }
      installButton.remove();
    });
  });
});
