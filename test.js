let users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Pete' },
  { id: 3, name: 'Mary' },
];

const id = 1;

// mengembalikan array dua user pertama
let someUsers = users.filter((item) => item.id === id).length > 1;
console.log(someUsers);
