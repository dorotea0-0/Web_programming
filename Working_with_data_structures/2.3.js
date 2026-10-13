const dictionary = {
  'hello':   { en: 'hello',   es: 'hola',    fr: 'bonjour',  de: 'hallo'   },
  'world':   { en: 'world',   es: 'mundo',   fr: 'monde',    de: 'welt'    },
  'good':    { en: 'good',    es: 'bueno',   fr: 'bon',      de: 'gut'     },
  'morning': { en: 'morning', es: 'mañana',  fr: 'matin',    de: 'morgen'  }
};

function translate(text, lang) {
  const words = text.toLowerCase().split(' ');
  const translated = words.map(word => {
    return dictionary[word] ? dictionary[word][lang] : word;
  });
  return translated.join(' ');
}

console.log(translate('hello world', 'fr'));
console.log(translate('good morning', 'de'));
console.log(translate('hello world', 'es'));