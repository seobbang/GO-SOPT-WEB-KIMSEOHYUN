export const TODO_DATA = [
  {
    category: "솝트",
    todos: ["2차 세미나 복습", "2차 과제"],
    isDone: [true, false],
  },
  {
    category: "스터디",
    todos: ["웹심화 스터디", "JS 스터디 아티클"],
    isDone: [true, false],
  },
  {
    category: "학교",
    todos: ["졸프 면담 준비", "최종 보고서 작성"],
    isDone: [false, false],
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
