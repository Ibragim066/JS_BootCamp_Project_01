# DOM (Document Object Model)

**_DOM (Document Object Model)_** - представляет собой программный интерфейс для взаимодействия с HTML и XML документами. Он представляет документ в виде дерева объектов, где каждый узел представляет часть документа (тег, атрибут, текстовое содержимое и т.д.).

В зависимости от вида документа (т.е. HTML или XML (en-US)) у объекта document могут быть доступны разные API.

## Основные концепции

- **_Узел (Node)_**. Узлы могут быть элементами, атрибутами, текстом и т.д. Примеры типов узлов: `ELEMENT_NODE` (элемент), `TEXT_NODE` (текст), `ATTRIBUTE_NODE` (атрибут).

- **_Элемент (Element)_**. Представляет HTML-тег в документе. Пример: `<div>...</div>`.

- **_Атрибут (Attribute)_**. Представляет атрибут HTML-элемента. Пример: `<div id="myDiv">...</div>`.

## Основные операции с DOM

Каждая веб-страница, которая загружается в браузер, имеет свой собственный объект `document`. Интерфейс документа служит точкой входа для получения содержимого веб-страницы , а также обеспечивает функциональность, которая является глобальной для документа, например, для получения URL-адреса страницы или создания новых элементов в документе.

1. **Выборка элементов**

```javascript
document.getElementById('id'); // Получение элемента по идентификатору.
document.querySelector('selector'); // Получение первого элемента, соответствующего селектору.
document.querySelectorAll('selector'); // Получение всех элементов, соответствующих селектору.
```

2. **Манипуляция содержимым**

```javascript
element.innerHTML // Получение или установка HTML-содержимого элемента.
element.textContent // Получение или установка текстового содержимого элемента.
element.setAttribute('attribute', 'value') // Установка значения атрибута элемента.
element.getAttribute('attribute') // Получение значения атрибута элемента.
```

3.**Навигация по DOM**

```javascript
element.parentNode; // Получение родительского элемента.
element.childNodes; // Получение коллекции дочерних узлов.
element.children; // Получение коллекции дочерних элементов (без текстовых узлов).
element.nextElementSibling и element.previousElementSibling; // Получение следующего и предыдущего элементов на том же уровне.
```

4. **Создание элементов**

```javascript
document.createElement('tag'); // Создание нового элемента.
document.createTextNode('text'); // Создание текстового узла.
```

5. **Добавление и удаление элементов**

```javascript
parentElement.appendChild(newChild); // Добавление элемента в конец родительского элемента.
parentElement.insertBefore(newChild, referenceChild); // Вставка элемента перед
parentElement.removeChild(newChild); //удаление элемента
parentElement.replaceChild(newChild, oldChild); //заменяет старый элемент на новый
```

## Способы отображения данных

Можно отобразить данные разными путями, например:

- Запись в элемент HTML с использованием `innerHTML`.
- Запись в вывод HTML с использованием `document.write()`.
- Запись в окно оповещения с использованием `window.alert()`.
- Запись в консоль браузера с помощью `console.log()`.

Использование `innerHTML`.Установка значения innerHTML удаляет всё содержимое элемента и заменяет его на узлы, которые были разобраны как HTML, указанными в строке.

```javascript
<!DOCTYPE html>
<html>
<body>

<h1>Display Data</h1>
<p>Equation</p>

<p id="equation-result"></p>

<script>
document.getElementById("equation-result").innerHTML = 5 + 6;
</script>

</body>
</html>
```

Использование `document.write()`. Пишет строку в поток документа. Запись в документ, загруженный без вызова document.open(), автоматически вызовет document.open. По окончании записи рекомендуется вызвать document.close(), чтобы браузер завершил загрузку страницы. Записываемый текст разбирается в структурную модель документа.

```javascript
<!DOCTYPE html>
<html>
<body>

<h1>Display Data</h1>
<p>Equation</p>

<p id="equation-result"></p>

<script>
document.write(5 + 6);
</script>

</body>
</html>
```

Использование `window.alert()`. Метод Window.alert() показывает диалоговое окно с опциональным (необязательным) сообщением и кнопкой OK.

```javascript
<!DOCTYPE html>
<html>
<body>

<h1>Display Data</h1>
<p>Equation</p>

<p id="equation-result"></p>

<script>
window.alert(5 + 6);
</script>

</body>
</html>
```
