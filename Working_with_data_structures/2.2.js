const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const copy1 = arr.slice();
const copy2 = [...arr];

copy1.reverse();

for (let i = 0; i < Math.floor(copy2.length / 2); i++) {
  const j = copy2.length - 1 - i;
  [copy2[i], copy2[j]] = [copy2[j], copy2[i]];
}

console.log('Исходный :', arr);
console.log('Копия 1  :', copy1);
console.log('Копия 2  :', copy2);