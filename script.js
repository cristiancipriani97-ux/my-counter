document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  if (!app) {
    return;
  }

  let count = Number.parseInt(localStorage.getItem("counterValue"), 10) || 0;

  const container = document.createElement("div");
  container.classList.add("counter-container");

  const title = document.createElement("h1");
  title.classList.add("counter-title");
  title.textContent = "Contatore";

  const display = document.createElement("div");
  display.classList.add("counter-value");
  display.textContent = count;

  const controls = document.createElement("div");
  controls.classList.add("controls");

  const mainButtons = document.createElement("div");
  mainButtons.classList.add("buttons-group");

  const quickButtons = document.createElement("div");
  quickButtons.classList.add("buttons-group", "buttons-group-secondary");

  const btnDecrement = document.createElement("button");
  btnDecrement.classList.add("btn", "btn-decrement");
  btnDecrement.textContent = "−";
  btnDecrement.setAttribute("aria-label", "Decrementa di 1");

  const btnIncrement = document.createElement("button");
  btnIncrement.classList.add("btn", "btn-increment");
  btnIncrement.textContent = "+";
  btnIncrement.setAttribute("aria-label", "Incrementa di 1");

  const btnStepDown = document.createElement("button");
  btnStepDown.classList.add("btn", "btn-step");
  btnStepDown.textContent = "−10";
  btnStepDown.setAttribute("aria-label", "Decrementa di 10");

  const btnStepUp = document.createElement("button");
  btnStepUp.classList.add("btn", "btn-step");
  btnStepUp.textContent = "+10";
  btnStepUp.setAttribute("aria-label", "Incrementa di 10");

  const btnReset = document.createElement("button");
  btnReset.classList.add("btn-reset");
  btnReset.textContent = "Azzera";

  const hint = document.createElement("p");
  hint.classList.add("keyboard-hint");
  hint.textContent = "Scorciatoie: + / − / R";

  mainButtons.appendChild(btnDecrement);
  mainButtons.appendChild(btnIncrement);

  quickButtons.appendChild(btnStepDown);
  quickButtons.appendChild(btnStepUp);

  controls.appendChild(mainButtons);
  controls.appendChild(quickButtons);

  container.appendChild(title);
  container.appendChild(display);
  container.appendChild(controls);
  container.appendChild(btnReset);
  container.appendChild(hint);

  app.appendChild(container);

  function updateUI() {
    display.textContent = count;

    display.classList.remove("positive", "negative", "neutral");
    if (count > 0) {
      display.classList.add("positive");
    } else if (count < 0) {
      display.classList.add("negative");
    } else {
      display.classList.add("neutral");
    }

    display.classList.add("pulse");
    window.setTimeout(() => display.classList.remove("pulse"), 180);

    localStorage.setItem("counterValue", String(count));
  }

  function increment(step = 1) {
    count += step;
    updateUI();
  }

  function decrement(step = 1) {
    count -= step;
    updateUI();
  }

  function reset() {
    count = 0;
    updateUI();
  }

  btnIncrement.addEventListener("click", () => increment(1));
  btnDecrement.addEventListener("click", () => decrement(1));
  btnStepUp.addEventListener("click", () => increment(10));
  btnStepDown.addEventListener("click", () => decrement(10));
  btnReset.addEventListener("click", reset);

  document.addEventListener("keydown", (event) => {
    if (event.key === "+" || event.key === "ArrowUp") {
      increment();
    } else if (event.key === "-" || event.key === "ArrowDown") {
      decrement();
    } else if (event.key === "PageUp") {
      increment(10);
    } else if (event.key === "PageDown") {
      decrement(10);
    } else if (event.key.toLowerCase() === "r") {
      reset();
    }
  });

  updateUI();
});