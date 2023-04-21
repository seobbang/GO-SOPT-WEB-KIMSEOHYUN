const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const button = $("button.addButton");
const img = $("img");
const imgInput = $("input.img");

/* 업로드 이미지 미리 보기 함수 */
function uploadImg() {
  const { files } = $("input.img");
  const reader = new FileReader();
  reader.readAsDataURL(files[0]);
  reader.onloadend = () => {
    img.src = reader.result;
    img.classList.remove("hidden");
  };
}

function handleAddButton() {
  const { value: productName } = $("input.name");
  const { value: tags } = $("input.tags");

  const tag = tags.split(",");
  const newData = { productName, tag };

  localStorage.setItem("newData", JSON.stringify(newData));

  location.href = "market.html";
}

button.addEventListener("click", handleAddButton);
imgInput.addEventListener("change", uploadImg);
