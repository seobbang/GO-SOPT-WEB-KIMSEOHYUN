const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const PRODUCT_DATA = [
  {
    kind: "ramyun",
    name: "불닭볶음면",
    tag: ["매운맛", "코스빌지수"],
    img: "images/불닭볶음면.jpg",
  },
  {
    kind: "snack",
    name: "무뚝뚝 감자칩",
    tag: ["후추", "감자칩", "양념감자"],
    img: "images/무뚝뚝감자칩.webp",
  },
  {
    kind: "snack",
    name: "프링글스 오리지널",
    tag: ["오리지널", "미국"],
    img: "images/프링글스.jpg",
  },
  {
    kind: "ramyun",
    name: "왕뚜껑",
    tag: ["컵라면", "킹뚜껑 도전"],
    img: "images/왕뚜껑.jpg",
  },
  {
    kind: "drink",
    name: "제로 닥터페퍼",
    tag: ["무설탕", "탄산", "미국 1위"],
    img: "images/닥터페퍼.webp",
  },
  {
    kind: "drink",
    name: "코카콜라",
    tag: ["탄산", "근본"],
    img: "images/코카콜라.jpg",
  },
  {
    kind: "ramyun",
    name: "신라면",
    tag: ["내 최애 라면", "매움"],
    img: "images/신라면.jpg",
  },
  {
    kind: "drink",
    name: "포카리스웨트",
    tag: ["이온 음료", "청량함", "시원함"],
    img: "images/포카리스웨트.jpg",
  },
  {
    kind: "ramyun",
    name: "진라면 매운맛",
    tag: ["이온 음료", "청량함", "시원함"],
    img: "images/진라면.png",
  },
  {
    kind: "drink",
    name: "옥수수수염차",
    tag: ["0칼로리", "심지어 맛있음"],
    img: "images/옥수수.jpg",
  },

  {
    kind: "snack",
    name: "홈런볼",
    tag: ["얼려도", "맛있어", "시원함"],
    img: "images/홈런볼.jpg",
  },
];

const cardSection = $(".card__section");

PRODUCT_DATA.forEach((item) => {
  let tagList = "";
  const { tag } = item;
  tag.forEach((tag) => {
    tagList += `<li>${tag}</li>`;
  });

  cardSection.innerHTML += `<article class="${item.kind}" id="${item.name
    .split(" ")
    .join("")}">
            <header>${item.name}</header>
            <div class="tagContainer">
                <ul>${tagList}</ul>
                <button type="button" class="showMore ${item.name
                  .split(" ")
                  .join("")}">+</button>
            </div>
            <div class="tagModal hidden">
                <ul>${tagList}
                <button type="button" class="close ${item.name
                  .split(" ")
                  .join("")}">x</button></ul>
            </div>
            <img src="${item.img}" alt="상품 사진" />
            <button type="button"  class="heartButton">
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
