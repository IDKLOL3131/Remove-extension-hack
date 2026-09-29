const extensions = [
  {
    name: "Example Extension",
    description: "Example Chrome extension",
    enabled: true
  },
  {
    name: "Another Extension",
    description: "Another example extension",
    enabled: true
  },
  {
    name: "Test Extension",
    description: "Extension used for testing",
    enabled: false
  }
];

const container = document.getElementById("extensions");

function renderExtensions() {
  container.innerHTML = "";

  extensions.forEach((extension, index) => {
    const element = document.createElement("div");

    element.className = "extension";

    element.innerHTML = `
      <div class="extension-info">
        <h2>${extension.name}</h2>
        <p>${extension.description}</p>
      </div>

      <div>
        <span class="status ${extension.enabled ? "enabled" : "disabled"}">
          ${extension.enabled ? "Enabled" : "Disabled"}
        </span>

        <button onclick="toggleExtension(${index})">
          ${extension.enabled ? "Disable" : "Enable"}
        </button>
      </div>
    `;

    container.appendChild(element);
  });
}

function toggleExtension(index) {
  extensions[index].enabled = !extensions[index].enabled;
  renderExtensions();
}

renderExtensions();
