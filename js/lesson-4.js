// 1 - отримай body елемент і виведи його в консоль;

const body = document.querySelector("body"); //const body = document.body;
console.log(body);

// 2 - отримай елемент id="title" і виведи його в консоль;

const titleElem = document.querySelector("#title");
console.log(titleElem);

// 3 - отримай елемент class="list" і виведи його в консоль;

const listElem = document.querySelector(".list");
console.log(listElem);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;

const topicElem = document.querySelectorAll("[data-topic]");
console.log(topicElem);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

console.log(topicElem[0]);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

console.log(topicElem[topicElem.length-1]);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;

const h1Elem = document.querySelector("h1");
console.log(h1Elem.nextElementSibling);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;

const h3Elem = document.querySelectorAll("h3");
console.log(h3Elem);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір

h3Elem.forEach (el => el.classList.add("active"));

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;

const navigationElem = document.querySelector("[data-topic ='navigation']");
console.log(navigationElem);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим

navigationElem.style.backgroundColor = "yellow";

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

const navigationElemP = navigationElem.querySelector("p");
navigationElemP.textContent = "Я змінив тут текст!";

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;

const currentTopic = "manipulation";
const currentElement = document.querySelector(`[data-topic="${currentTopic}"]`);
console.log(currentElement);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

currentElement.style.backgroundColor = "blue";

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

const completedElem = document.querySelector('.completed');
console.log(completedElem);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

const completedElemLi = completedElem.closest("li");
completedElemLi.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"

const newP = document.createElement("p");
newP.textContent = "Об'єктна модель документа (Document Object Model)";
h1Elem.insertAdjacentElement('afterend', newP);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

const newLi = document.createElement("li");
const newH3 = document.createElement("h3");
newH3.textContent = "Властивість innerHTML";

const newPElem = document.createElement("p");
newPElem.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";

newLi.append(newH3, newPElem);
listElem.append(newLi);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

const newElements = `
  <li>
    <h3>Властивість innerHTML</h3>
    <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
  </li>
`;
listElem.insertAdjacentHTML('beforeend', newElements);

// 20 - очисти список

listElem.innerHTML = '';

// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const numberContainer = document.querySelector('.number-container');

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

for (let i = 0; i < 100; i++) {
  const number = randomNumber();

  const div = document.createElement('div');
  div.classList.add('number');
  div.textContent = number;

  if (number % 2 === 0) {
    div.classList.add('even');
  } else {
    div.classList.add('odd'); 
  }

  numberContainer.append(div);
}

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

const form = document.querySelector('.js-contact-form');
const input = document.querySelector('.js-username-input');
const checkbox = document.querySelector('.js-policy-checkbox');
const span = document.querySelector('.js-username-output');
const submitBtn = document.querySelector('.js-contact-form-submit');

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

input.addEventListener('input', e => {
  const value = e.target.value.trim();

  input.classList.remove('success', 'error');
  if (value.length >= 6) {
    input.classList.add('success');
  } else {
    input.classList.add('error');
  }

  span.textContent = value ? value : 'Anonymous';
});

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

input.addEventListener('focus', e => {
  const value = e.target.value.trim();
  input.style.outline = value ? '3px solid green' : '3px solid red';
});

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

input.addEventListener('blur', e => {
  const value = e.target.value.trim();
  input.style.outline = value ? '3px solid lime' : '3px solid red';
});

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.

form.addEventListener('submit', e => {
  e.preventDefault(); 

  const name = input.value.trim();
  const isChecked = checkbox.checked;

  if (name && isChecked) {
    const userData = { userName: name };
    console.log('✅ Дані форми:', userData);
  } else {
    console.log('❌ Заповніть ім\'я та погодьтесь з політикою');
  }

  input.value = '';
  checkbox.checked = false;
  span.textContent = 'Anonymous';
  input.classList.remove('success', 'error');
  input.style.outline = 'none';
});

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const box = document.querySelector('.box');
const btnDecrease = document.querySelector('.js-decrease');
const btnIncrease = document.querySelector('.js-increase');

let size = 50;

btnIncrease.addEventListener('click', () => {
  size += 20;
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
});

btnDecrease.addEventListener('click', () => {
  if (size > 20) {
    size -= 20;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
  }
});

