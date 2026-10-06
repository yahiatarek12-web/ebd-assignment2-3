import { items } from "./items.js";

export function renderItems(list) {
  const container = document.querySelector("#list");
  container.innerHTML = "";

  list.forEach((item) => {
    const entry = document.createElement("li");
    entry.classList.add("entry");
    entry.textContent = item.name;
    container.append(entry);
  });
}

export function matching() {
  return items.filter((item) => item.inStock === true);
}

export function start() {
  renderItems(items);

  document.querySelector("#show-some").addEventListener("click", () => {
    renderItems(matching());
  });
}