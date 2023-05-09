const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

import { TODO_DATA } from "../constant/TODO_DATA";

export default function DragAndDrop() {
  const ul = $(".mycategory__section > ul");
  const section = $(".mycategory__section");

  /* 카테고리 렌더링 */
  function render() {
    const orderArray = JSON.parse(localStorage.getItem("categoryOrder"));

    function createList(category) {
      const li = document.createElement("li");
      const button = document.createElement("button");

      button.classList.add(category);
      button.innerText = category;
      button.draggable = true;

      li.appendChild(button);

      ul.appendChild(li);

      return;
    }

    orderArray.forEach((category) => {
      TODO_DATA.forEach((item) => {
        category === item.category && createList(category);
      });
    });
  }

  /* 카테고리 순서 바꾸기 함수 */
  function changeOrder(category) {
    const orderArray = JSON.parse(localStorage.getItem("categoryOrder"));
    // 움직인 카테고리 인덱스
    const moveIdx = orderArray.indexOf(category);

    ul.addEventListener("drop", (e) => {
      const { tagName, className } = e.target;
      if (tagName === "BUTTON" || "LI") {
        const targetIdx = orderArray.indexOf(className);

        // 움직인 카테고리 배열에서 제거
        orderArray.splice(moveIdx, 1);
        // 새로운 위치에 넣기
        orderArray.splice(targetIdx, 0, category);

        localStorage.setItem("categoryOrder", JSON.stringify(orderArray));

        const li = $$(".mycategory__section li");
        li.forEach((item) => {
          item.remove();
        });
        render();
      } else {
        e.preventDefault();
      }
    });
  }

  /* drag and drop 이벤트 부착 */
  ul.addEventListener("dragstart", (e) => {
    changeOrder(e.target.className);
  });

  section.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  render();
  console.log("here");
}
