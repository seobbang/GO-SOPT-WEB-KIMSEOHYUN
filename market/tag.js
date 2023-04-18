const section = $(".card__section");

function handleModal(e) {
  const { tagName, classList } = e.target;

  // 버튼인지 검사
  if (tagName === "BUTTON") {
    const { classList: tagModalList } = $(
      `.card__section article#${classList[1]} div.tagModal`
    );

    // 버튼에 따라 action 정의
    const action = classList[0] === "showMore" ? "SHOW" : "HIDDEN";
    switch (action) {
      case "SHOW":
        tagModalList.remove("hidden");
        break;

      case "HIDDEN":
        tagModalList.add("hidden");
        break;

      default:
        break;
    }
  } else {
    e.preventDefault();
  }
}

function addEvent() {
  section.addEventListener("click", handleModal);
}

addEvent();
