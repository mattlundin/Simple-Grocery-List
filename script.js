const groceries = document.querySelector('.groceries');
const userInput = document.querySelector('.userInput');
const allItems = document.querySelector('.allItems');
const trash = document.querySelector('h2 .trash');

userInput.addEventListener('keydown', function (e) {
	if (e.key === 'Enter') {
		addItem();
	}
});

function addItem() {
	const h2 = document.createElement('h2');
	h2.classList.add('item[]');
	h2.innerHTML = `${userInput.value}`;

	h2.addEventListener('click', function () {
		h2.style.textDecoration = 'line-through';
	});

	allItems.insertAdjacentElement('beforeend', h2);

	userInput.value = '';
}
