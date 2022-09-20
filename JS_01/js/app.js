// Selectors
// getElementById - get first element
// getElementsByClassName - get ALL elements with class
// getElementsByName - get ALL elements with name
// querySelector - get by selector
// .parentNode - get parent element


// Manipulation
// textContent - add new text node inside element
// innerHTML
// createElement
// appendChild
// append
// prepend
// insertBefore

// Work with attributes
// setAttribute


// TODO
// clean input after adding a new item - done
// check is done - done
// add details info - done
// add deadline / check if it passed
// add categories Done/Not done
// bootstrap notifications
// active state - done
// add address
// delete items

const LI_CLASSES = 'list-group-item d-flex align-items-center border-0 mb-2 rounded';
const todoList = document.querySelector('#todo');

const todoArr = [
    {
        label: 'Buy Apple',
        isDone: false
    },
    {
        label: 'Feed dog',
        isDone: false
    },
];

function cleanToDo() {
    todoList.innerHTML = '';
};

function toggleModal() {
    const modalW = document.querySelector('.modal');
    const isOpen = modalW.classList.contains('open');

    isOpen ? modalW.classList.remove('open') : modalW.classList.add('open');
};

function createIcon() {
    const a = document.createElement('a');
    a.setAttribute('href', '#');
    a.classList.add('show-icon');

    a.addEventListener('click', e => {
        const targetItem = e.target.parentNode; //шукаю батьківський li для іконки по якій клікнув
        const dataIndex = targetItem.dataset.index; // беру дата-атрибут батьківського li

        const title = document.querySelector('.modal-title'); // шукаю html елемент у який буду додавати текст
        title.textContent = todoArr[dataIndex].label; // додаю значення label потрібного елемента з масиву  
        
        const badge = document.querySelector('.badge');
        badge.textContent = todoArr[dataIndex].isDone ? 'Done' : 'To Do';

        if(todoArr[dataIndex].isDone) {
            badge.classList.remove('badge-alert');
            badge.classList.add('badge-success');
        } else {
            badge.classList.remove('badge-success');
            badge.classList.add('badge-alert');
        }

        toggleModal();
    });

    return a;
};

function createCheckbox() {
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('class', 'form-check-input me-2');

    checkbox.addEventListener('change', e => {
        const targetCheckbox = e.target;
        const isChecked = targetCheckbox.checked;
        const parentLi = targetCheckbox.parentNode;

        parentLi.classList.toggle('active');

        const dataIndex = parentLi.dataset.index;
        todoArr[dataIndex].isDone = isChecked;
    })

    return checkbox;
};

function createLi(item, index) {
    const li = document.createElement('li');
    const checkbox = createCheckbox();
    const icon = createIcon();

    li.setAttribute('class', LI_CLASSES);
    li.setAttribute('data-index', index);
    li.textContent = item.label;
    li.prepend(checkbox);
    li.append(icon);

    return li;
};

function createToDo() {
    todoArr.forEach((item, index) => {
        const li = createLi(item, index);

        todoList.appendChild(li);
    });
}

function addToDo() {
    const inputEl = document.getElementById('createTodoInput');
    const newToDoName = inputEl.value;
    const newToDoObj = { label: newToDoName, isDone: false };

    todoArr.push(newToDoObj);
    inputEl.value = '';

    cleanToDo();
    createToDo();
}

createToDo();