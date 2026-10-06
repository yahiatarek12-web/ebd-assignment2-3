export function addProduct(name, price) {
  const card = document.createElement("li");
  card.classList.add("card");

  const title = document.createElement("h3");
  title.textContent = name;

  const priceElement = document.createElement("p");
  priceElement.classList.add("price");
  priceElement.textContent = `${price} EGP`;

  card.append(title, priceElement);

  document.querySelector("#list").append(card);
}

export function removeProduct(name) {
  const cards = Array.from(document.querySelectorAll("#list .card"));

  const card = cards.find(
    (card) => card.querySelector("h3").textContent === name
  );

  if (card) {
    card.remove();
  }
}

export function markSoldOut(name) {
  const cards = Array.from(document.querySelectorAll("#list .card"));

  const card = cards.find(
    (card) => card.querySelector("h3").textContent === name
  );

  if (card) {
    card.classList.add("sold-out");
  }
}

export function clearProducts() {
  const cards = document.querySelectorAll("#list .card");

  cards.forEach((card) => card.remove());
}

export function wireButtons() {
  document.querySelector("#add").addEventListener("click", () => {
    addProduct("Notebook", 45);
  });

  document.querySelector("#reset").addEventListener("click", () => {
    clearProducts();
  });
}