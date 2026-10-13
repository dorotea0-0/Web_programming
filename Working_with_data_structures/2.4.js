const daysOfWeek = {
  1: 'Понедельник',
  2: 'Вторник',
  3: 'Среда',
  4: 'Четверг',
  5: 'Пятница',
  6: 'Суббота',
  7: 'Воскресенье',

  getCurrentDay() {
    const jsDay = new Date().getDay();
    const dayNum = jsDay === 0 ? 7 : jsDay;
    return this[dayNum];
  }
};

console.log('Сегодня:', daysOfWeek.getCurrentDay());
