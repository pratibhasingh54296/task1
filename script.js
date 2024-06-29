const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const stats = document.getElementById('stats');
const toggleThemeBtn = document.getElementById('toggle-theme');

let todos = [];
let theme = 'light';

addBtn.addEventListener('click', addTodo);

function addTodo() {
	const todoText = todoInput.value.trim();
	if (todoText!== '') {
		const todo = {
			text: todoText,
			done: false
		};
		todos.push(todo);
		renderTodos();
		todoInput.value = '';
		updateStats();
	}
}

function renderTodos() {
	todoList.innerHTML = '';
	todos.forEach((todo, index) => {
		const todoItem = document.createElement('li');
		todoItem.textContent = todo.text;
		todoItem.dataset.index = index;
		if (todo.done) {
			todoItem.classList.add('done');
		}
		todoList.appendChild(todoItem);
	});
}

todoList.addEventListener('click', toggleDone);

function toggleDone(event) {
	if (event.target.tagName === 'LI') {
		const index = event.target.dataset.index;
		todos[index].done =!todos[index].done;
		renderTodos();
		updateStats();
	}
}

function updateStats() {
	const todoCount = todos.length;
	const doneCount = todos.filter(todo => todo.done).length;
	stats.children[0].textContent = `${todoCount} todos`;
	stats.children[1].textContent = `${doneCount} done`;
}

toggleThemeBtn.addEventListener('click', toggleTheme);

function toggleTheme() {
	if (theme === 'light') {
		theme = 'dark';
		document.body.classList.add('dark-theme');
	} else {
		theme = 'light';
		document.body.classList.remove('dark-theme');
	}
}

// Local storage
function saveTodos() {
	localStorage.setItem('todos',)
}

