const staff = {
  director:  'Иванов И.И.',
  manager:   'Петров П.П.',
  developer: 'Сидоров С.С.'
};

const staff2 = { ...staff };

staff2.director  = 'Андреева А.А.';
staff2.manager   = 'Борисова Б.Б.';
staff2.developer = 'Волкова В.В.';

console.log('Персонал 1:\n' + JSON.stringify(staff, null, '\n'));
console.log('Персонал 2:\n' + JSON.stringify(staff2, null, '\n'));