const subjects = {
  list: 'Математика, Физика, Химия, История',

  add(subject) {
    const arr = this.list.split(', ');
    if (!arr.includes(subject)) {
      arr.push(subject);
      this.list = arr.join(', ');
      console.log(`Добавлен: ${subject}`);
    } else {
      console.log(`Предмет "${subject}" уже есть`);
    }
  },

  remove(subject) {
    const arr = this.list.split(', ');
    const idx = arr.indexOf(subject);
    if (idx !== -1) {
      arr.splice(idx, 1);
      this.list = arr.join(', ');
      console.log(`Удалён: ${subject}`);
    } else {
      console.log(`Предмета "${subject}" нет в списке`);
    }
  }
};

console.log('Исходно:', subjects.list);

subjects.add('Биология');
subjects.add('Физика');
subjects.remove('История');
subjects.remove('География');

console.log('Итог:', subjects.list);