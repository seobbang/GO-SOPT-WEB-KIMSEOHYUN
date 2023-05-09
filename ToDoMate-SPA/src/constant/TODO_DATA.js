export const TODO_DATA = [
  {
    category: "솝트",
    todos: [
      { todoName: "2차 세미나 복습", isDone: true },
      { todoName: "2차 과제", isDone: false },
    ],
  },
  {
    category: "스터디",
    todos: [
      { todoName: "웹심화 스터디", isDone: true },
      { todoName: "JS 스터디 아티클", isDone: false },
    ],
  },
  {
    category: "학교",
    todos: [
      { todoName: "졸프 면담 준비", isDone: false },
      { todoName: "최종 보고서 작성", isDone: false },
    ],
  },
];

const orderArray = JSON.parse(localStorage.getItem("categoryOrder"));
if (!orderArray) {
  localStorage.setItem(
    "categoryOrder",
    JSON.stringify([
      TODO_DATA[0].category,
      TODO_DATA[1].category,
      TODO_DATA[2].category,
    ])
  );
}
