const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const categoryList = $(".nav ul");

const clickCategory = (e) => {
  const { tagName, classList } = e.target;
  // li 요소인지 검사
  if (tagName === "LI") {
    // class에 selected 포함되어 있는지 검사
    if (classList.contains("selected")) {
      classList.remove("selected");
    } else {
      classList.add("selected");
    }
  } else {
    e.preventDefault(); // li 요소가 아니라면 이벤트 막기
  }
};

function handleCategoryNav(categoryList) {
  categoryList.addEventListener("click", clickCategory);
}

// 페이지 내 모든 요소가 로드된 후 호출되도록 함.
window.onload = function () {
  handleCategoryNav(categoryList);
};
