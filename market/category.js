const categoryNavList = $(".nav ul"); // nav 카테고리
const categoryTagList = $(".selected__category"); // tag 카테고리

const NAV = "nav";
const TAG = "tag";

/** list 순회하여 클래스 추가, 삭제 함수 **/
function handleClassList(targetList, targetType, action) {
  switch (action) {
    case "ADD":
      targetList.forEach(({ classList }) =>
        classList.add(
          targetType === TAG ? "selected" : `selected_${targetType}`
        )
      );
      break;

    case "REMOVE":
      targetList.forEach(({ classList }) =>
        classList.remove(
          targetType === TAG ? "selected" : `selected_${targetType}`
        )
      );
      break;

    default:
      break;
  }
}

/**  상품 필터링, 태그 부착 삭제 함수 **/
function filterProductList(categoryName, action) {
  const categoryButtonList = $$(`li.${categoryName}`); // 해당 카테고리 버튼들 (nav, tag)

  switch (categoryName) {
    case "all":
      const productList = $$(".card__section article");
      handleClassList(productList, categoryName, action); // 전체 상품 필터링
      handleClassList(categoryButtonList, TAG, action); // 전체 태그 부착, 삭제
      break;

    case "drink":
    case "snack":
    case "ramyun":
      const targetList = $$(`.card__section article.${categoryName}`);
      handleClassList(targetList, categoryName, action); // 해당 카테고리 상품 필터링
      handleClassList(categoryButtonList, TAG, action); // 해당 태그 부착, 삭제
      break;

    default:
      break;
  }
}

/** 카테고리 클릭 핸들링 함수 **/
function handleCategoryClick(elementType, e) {
  const { tagName, classList } = e.target;
  const categoryName = classList[0];

  // nav 클릭시
  if (tagName === "LI" && elementType === NAV) {
    classList.contains("selected")
      ? filterProductList(categoryName, "REMOVE") // 카테고리 해제
      : filterProductList(categoryName, "ADD"); // 카테고리 추가
  }
  // tag X 버튼 클릭시
  else if (tagName === "BUTTON") {
    filterProductList(categoryName, "REMOVE"); // 카테고리 해제
  }
  // 그 외 요소 이벤트 막기
  else {
    e.preventDefault();
  }
}

/** 이벤트리스너 부착 함수 **/
function addEvent() {
  categoryNavList.addEventListener("click", (e) => handleCategoryClick(NAV, e));
  categoryTagList.addEventListener("click", (e) => handleCategoryClick(TAG, e));
}

addEvent();
