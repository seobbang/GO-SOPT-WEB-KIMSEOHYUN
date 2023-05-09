import { $ } from "./PRODUCT_DATA.js";

const section = $(".card__section");

function handleModal(e) {
  const { tagName, classList } = e.target;

  // 버튼인지 검사
  if (tagName === "BUTTON") {
    const { classList: tagModalList } = $(
      `.card__section article#${classList[1]} div.tagModal`
    );

    tagModalList.toggle("hidden");
  } else {
    e.preventDefault();
  }
}

function addEvent() {
  section.addEventListener("click", handleModal);
}

addEvent();
