const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const PRODUCT_DATA = [
  {
    category: "솝트",
    todos: ["1차 세미나 복습", "1차 과제"],
  },
  {
    category: "스터디",
    todos: ["웹심화 스터디 킥오프", "JS 스터디"],
  },
  {
    category: "학교",
    todos: ["졸프 발표 준비", "1차 보고서 작성"],
  },
];

const toDoListSection = $("section.todo__list");

PRODUCT_DATA.forEach(({ category, todos }) => {
  let toDoList = "";
  todos.forEach((todos) => {
    toDoList += `<li>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 96 960 960"
    width="48"
    class="done"
  >
    <path
      d="m480 935-41-37q-106-97-175-167.5t-110-126Q113 549 96.5 504T80 413q0-90 60.5-150.5T290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.5T880 413q0 46-16.5 91T806 604.5q-41 55.5-110 126T521 898l-41 37Z"
    />
  </svg>
  ${todos}
  </li>`;
  });

  toDoListSection.innerHTML += `<section class="todo__category">
  <h2 id="${category}">${category}</h2>
  <ul>
  ${toDoList}
  </ul>
</section>`;
});
