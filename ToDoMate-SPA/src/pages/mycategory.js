import DragAndDrop from "../components/draganddrop";

function ToDoMate($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
        <header class="header">
            <h1>WEB TO DO MATE</h1>
        </header>
        <main>
        <section class="mycategory__section">
            <h2>나의 카테고리</h2>
            <ul></ul>
        </section>
        </main>
    `;
    DragAndDrop();
  };

  this.render();
}

export default ToDoMate;
