const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

import { TODO_DATA } from "../constant/TODO_DATA";

export default function ToDoList() {
  const toDoListSection = $("section.todo__list");
  const todayCount = $("section.calendar span.today > p");
  let toDoCount = 0; // 남은 할 일 카운트

  /** 할 일 목록 렌더링 함수 **/
  function renderToDoList() {
    const orderArray = JSON.parse(localStorage.getItem("categoryOrder"));
    function createElement({ category, todos }) {
      let toDoList = "";

      // 할 일 li요소 만들기
      todos.forEach(({ todoName, isDone }) => {
        const done = isDone ? "done" : "";
        !isDone && toDoCount++; // 남은 일 카운트 +1

        toDoList += `
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 96 960 960"
            width="48"
            class=${done}
          >
            <path
              d="m480 935-41-37q-106-97-175-167.5t-110-126Q113 549 96.5 504T80 413q0-90 60.5-150.5T290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.5T880 413q0 46-16.5 91T806 604.5q-41 55.5-110 126T521 898l-41 37Z"
            />
          </svg>
        ${todoName}
        </li>`;
      });

      toDoListSection.insertAdjacentHTML(
        "beforeend",
        `
      <section class="todo__category">
        <h2 id="${category}">${category}
          <button type="button" class="${category}">+</button>
        </h2>
        <ul class="${category}">
        ${toDoList}
        </ul>
      </section>`
      );
    }

    orderArray.forEach((category) => {
      TODO_DATA.forEach((item) => {
        category === item.category && createElement(item);
      });
    });

    // 하트 안 남은 일 개수
    todayCount.innerText = toDoCount;
  }

  const dialogContainer = $(".dialog__container");
  const addButton = $("dialog button.add");
  const closeButton = $("dialog button.close");
  const input = $("dialog input");

  /** 할 일 리스트 클릭 핸들 함수 **/
  function handleClickToDoList(e) {
    const { tagName, classList } = e.target;

    // 완료 버튼
    if (tagName === "path") {
      const { classList } = e.target.parentElement;
      classList.toggle("done");
      if (classList.contains("done")) {
        todayCount.innerText++;
      } else {
        todayCount.innerText--;
      }
    }
    // 할 일 추가 버튼
    else if (tagName === "BUTTON") {
      dialogContainer.classList.remove("hidden"); // 모달 띄우기
      // 모달 닫기 이벤트 부착
      closeButton.addEventListener("click", () => {
        dialogContainer.classList.add("hidden");
      });
      input.focus();
      addButton.addEventListener("click", () =>
        handleSubmitButton(classList[0])
      );
    } else {
      e.preventDefault();
    }
  }

  /** 할 일 추가 함수 **/
  function handleSubmitButton(category) {
    const ul = $(`ul.${category}`);
    const li = $$(`ul.${category} > li`);

    let isDuplicate = false;

    li.forEach(({ innerText }) => {
      innerText.replace(/\n/g, "");
      innerText.replaceAll(" ", "");
      if (input.value === innerText) {
        isDuplicate = true;
      }
    });

    if (isDuplicate) {
      alert("이미 있는 항목입니다.");
    } else {
      ul.insertAdjacentHTML(
        "beforeend",
        `
    <li>
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
    ${input.value}
    </li>`
      );
      input.value = ""; // input 비우기
      todayCount.innerText++; // 할 일 개수 1 추가
    }
  }

  toDoListSection.addEventListener("click", handleClickToDoList);
  renderToDoList();
}
