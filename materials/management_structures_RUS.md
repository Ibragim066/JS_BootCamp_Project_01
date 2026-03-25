# Управляющие структуры

В JavaScript управляющие структуры обеспечивают контроль над ходом выполнения программы. Эти структуры включают в себя условные операторы (`if`, `else`, `switch`) и циклы (`for`, `while`, `do-while`) и другие. Написанием программ с использованием управляющих структур называется **_условным выполнением_**.

1. `if`, `else`

```javascript
let x = 10;

if (x > 0) {
  console.log('Положительное число');
} else if (x === 0) {
  console.log('Ноль');
} else {
  console.log('Отрицательное число');
}

```

2. `for`. Цикл используется для повторения блока кода определенное количество раз.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}

```

3. `while`. Цикл while выполняет блок кода, пока условие истинно.

```javascript
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

```

4. `do-while`. Цикл do-while похож на while, но он гарантирует выполнение блока кода хотя бы один раз, даже если условие ложно.

```javascript
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);

```

5. `switch`

```javascript
let day = 'Monday';

switch (day) {
  case 'Monday':
    console.log('Понедельник');
    break;
  case 'Tuesday':
    console.log('Вторник');
    break;
  default:
    console.log('Другой день');
}


```

## операторы прерывания

1. `break`

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;  // Прерывает выполнение цикла.
  }
  console.log(i);
}

```

2. `continue`

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;  // Пропускает текущую итерацию и переходит к следующей.
  }
  console.log(i);
}


```

3. `return`

```javascript

function getFirstNum() {

for (let i = 0; i < 10; i++) {
    if (i === 0) {
        return 1;  // Прерывает выполнение цикла и возвращает значение 1.
    }
  }
}


```
