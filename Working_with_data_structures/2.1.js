function kebabToCamel(str) {
  const parts = str.split('-');
  let result = parts[0];

  for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    result += part.at(0).toUpperCase() + part.slice(1);
  }
  return result;
}

console.log(kebabToCamel('background-color'));
console.log(kebabToCamel('font-size'));
console.log(kebabToCamel('border-top-width'));