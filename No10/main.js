const addTask = document.querySelector(".add");
const addButton = document.querySelector(".add-button");
const list = document.querySelector(".todos");

function createTodoList(task) {
    const html = `
    <div class="addTask">
        <span>${task}</span>
        <span class="delete" onclick="deleteItem(event)">x</span>
    </div>
    `;

    list.innerHTML += html;
}

addButton.addEventListener("click", function () {
    const task = addTask.value;
    if (task.length > 0) {
        createTodoList(task);
        addTask.value = "";
    }
})

function deleteItem(e) {
    const result = window.confirm("を削除します。本当に消してもいいですか？");
    if (result) {
        e.target.parentElement.remove();
    } else {
        return;
    }
}