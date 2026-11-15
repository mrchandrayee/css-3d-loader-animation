const ring = document.getElementById("spinnerRing");
const toggleButton = document.getElementById("toggleMotion");
const copyButton = document.getElementById("copyCss");
const cssSnippet = document.getElementById("cssSnippet");
const toast = document.getElementById("toast");

let paused = false;

function notify(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(notify.timer);
  notify.timer = setTimeout(() => toast.classList.remove("show"), 1700);
}

toggleButton.addEventListener("click", () => {
  paused = !paused;
  ring.style.animationPlayState = paused ? "paused" : "running";
  toggleButton.textContent = paused ? "Resume animation" : "Pause animation";
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(cssSnippet.textContent);
    notify("CSS copied to clipboard");
  } catch {
    const area = document.createElement("textarea");
    area.value = cssSnippet.textContent;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const copied = document.execCommand("copy");
    area.remove();
    notify(copied ? "CSS copied to clipboard" : "Copy the code manually");
  }
});
