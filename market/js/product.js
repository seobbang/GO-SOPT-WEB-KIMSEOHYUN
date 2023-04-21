import { $, PRODUCT_DATA } from "./PRODUCT_DATA.js";

const cardSection = $(".card__section");
const newProduct = JSON.parse(localStorage.getItem("newData"));
if (newProduct) {
  PRODUCT_DATA.push({
    ...newProduct,
    category: "snack",
    img: "images/ABC초코쿠키.png",
  });
  console.log(PRODUCT_DATA);
}

PRODUCT_DATA.forEach(({ category, productName, tag, img }) => {
  let tagList = "";
  tag.forEach((tag) => {
    tagList += `<li>${tag}</li>`;
  });

  cardSection.innerHTML += `<article class="${category}" id="${productName
    .split(" ")
    .join("")}">
            <header>${productName}</header>
            <div class="tagContainer">
                <ul>${tagList}</ul>
                <button type="button" class="showMore ${productName
                  .split(" ")
                  .join("")}"}">+</button>
            </div>
            <div class="tagModal hidden">
                <ul>${tagList}
                <button type="button" class="close ${productName
                  .split(" ")
                  .join("")}">x</button></ul>
            </div>
            <img src="${img}" alt="상품 사진"  />
            <button type="button" class="heartButton" onclick="javascript:handle()">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 96 960 960"
                width="48"
              >
                <path
                  d="m480 935-41-37q-106-97-175-167.5t-110-126Q113 549 96.5 504T80 413q0-90 60.5-150.5T290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.5T880 413q0 46-16.5 91T806 604.5q-41 55.5-110 126T521 898l-41 37Z"
                />
              </svg>
            </button>
          </article>`;
});
