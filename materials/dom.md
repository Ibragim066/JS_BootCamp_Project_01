# DOM (Document Object Model)

**DOM (Document Object Model)** is a programming interface for interacting with HTML and XML documents. It represents a document as a tree of objects, where each node corresponds to a part of the document — a tag, an attribute, a text node, etc.

Depending on the document type (i.e., HTML or XML), the document object may expose different APIs.

**Core Concepts**

- **Node** — a basic unit in the DOM tree. Nodes can represent elements, attributes, text, and more.\
  Examples of node types:
  - `ELEMENT_NODE` — element
  - `TEXT_NODE` — text
  - `ATTRIBUTE_NODE` — attribute
- **Element** — represents an HTML tag in the document.\
  Example: `<div>...</div>`
- **Attribute** — represents an attribute of an HTML element.\
  Example: `<div id="myDiv">...</div>`
**Core DOM Operations**

Every web page loaded in a browser has its own document object. The document interface acts as the entry point for retrieving page content and provides global functionality — such as accessing the page’s URL or creating new elements.

**1. Selecting elements**

```javascript
document.getElementById('id');              // Get element by ID
document.querySelector('selector');         // Get first matching element
document.querySelectorAll('selector');      // Get all matching elements
```

**2. Modifying content**

```javascript
element.innerHTML                          // Get or set element's HTML content
element.textContent                        // Get or set element's text content
element.setAttribute('attribute', 'value') // Set attribute value
element.getAttribute('attribute')          // Get attribute value
```

**3. Navigating the DOM**

```javascript
element.parentNode;                        // Get parent element
element.childNodes;                        // Get all child nodes
element.children;                          // Get all child elements (no text nodes)
element.nextElementSibling;                // Get next sibling element
element.previousElementSibling;            // Get previous sibling element
```

**4. Creating elements**

```javascript
document.createElement('tag');             // Create new element
document.createTextNode('text');           // Create text node
```

**5. Adding and removing elements**

```javascript
parentElement.appendChild(newChild);             // Add to end of parent
parentElement.insertBefore(newChild, refChild);  // Insert before specific child
parentElement.removeChild(child);                // Remove child
parentElement.replaceChild(newChild, oldChild);  // Replace existing child
```

**Displaying Data**

There are multiple ways to display data on a page:

- Writing to an HTML element using `innerHTML`
- Writing to the HTML output using `document.write()`
- Displaying a popup using `window.alert()`
- Logging to the browser console using `console.log()`

**Using innerHTML**

Setting `innerHTML` removes the current content and replaces it with parsed HTML from a string.

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

**Using document.write()**

`document.write()` outputs a string to the document. If used after the page has loaded without calling document.open(), it will automatically call document.open(). It's recommended to call document.close() after writing.

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

**Using window.alert()**

`Window.alert()` displays a popup dialog with an optional message and an "OK" button.

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

