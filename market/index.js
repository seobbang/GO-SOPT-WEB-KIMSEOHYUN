const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const categoryNavList = $(".nav ul");
const categoryTagList = $(".selected__category");

// 클래스 추가, 삭제 함수
function handleClassList(targetList, action) {
  switch (action) {
    case "ADD":
      targetList.forEach((targetList) => targetList.classList.add("selected"));
      break;

    case "REMOVE":
      targetList.forEach((targetList) =>
        targetList.classList.remove("selected")
      );
      break;
  }
}

// 카테고리 클릭 핸들링 함수
function handleCategoryClick(type, e) {
  const { tagName, classList: navClassList } = e.target;
  const targetCategory = $$(`li.${navClassList[0]}`);

  // nav 클릭시
  if (tagName === "LI" && type === "nav") {
    navClassList.contains("selected")
      ? handleClassList(targetCategory, "REMOVE") // 카테고리 해제
      : handleClassList(targetCategory, "ADD"); // 카테고리 추가
  }
  // tag X 버튼 클릭시
  else if (tagName === "BUTTON") {
    handleClassList(targetCategory, "REMOVE"); // 카테고리 해제
  }
  // 그 외 요소 이벤트 막기
  else {
    e.preventDefault();
  }
}

function addEvent() {
  categoryNavList.addEventListener("click", (e) =>
    handleCategoryClick("nav", e)
  );
  categoryTagList.addEventListener("click", (e) =>
    handleCategoryClick("tag", e)
  );
}

// 페이지 내 모든 요소가 로드된 후 호출되도록 함.
window.onload = function () {
  addEvent();
};
