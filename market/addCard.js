const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const button = $("button.addButton");

function handleAddButton() {
  const { value: productName } = $("input.name");
  const { value: tags } = $("input.tags");
  const tag = tags.split(",");
  const newData = { productName, tag };

  localStorage.setItem("newData", JSON.stringify(newData));

  location.href = "market.html";
}

button.addEventListener("click", handleAddButton);
