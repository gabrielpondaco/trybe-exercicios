const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// // Adicione o código do exercício aqui:
// function authorBornIn1947() {
//   // escreva aqui o seu código
//   return books.find((book) => book.author.birthYear === 1947).author.name;
// }

// console.log(authorBornIn1947());

// function smallerName() {
//   let nameBook = books[0].name;
//   // escreva aqui o seu código
//   books.forEach((books) => books.name.length < nameBook.length ? nameBook = books.name : false);
//   // Variável nameBook que receberá o valor do menor nome;
//   return nameBook;
// }

// console.log(smallerName());

// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

// function getNamedBook() {
//   // escreva seu código aqui
//   return books.find((book) => book.name.length === 26);
// }

// console.log(getNamedBook());

// function booksOrderedByReleaseYearDesc() {
//   // escreva aqui seu código
//   return books.sort((book1, book2) => book2.releaseYear - book1.releaseYear);
// }

// console.log(booksOrderedByReleaseYearDesc());

// function everyoneWasBornOnSecXX() {
//   // escreva seu código aqui
//   return books.every((book) => book.author.birthYear > 1901);
// }

// console.log(everyoneWasBornOnSecXX());

// function someBookWasReleaseOnThe80s() {
//   // escreva seu código aqui
//   return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
// }

// console.log(someBookWasReleaseOnThe80s());

// Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.
function authorUnique() {
  // escreva seu código aqui
  let found = false;
  books.forEach((book) => {
    books.some((book2) => {
      (book.author.birthYear === book2.author.birthYear && book.author.name !== book2.author.name) ? found = true : '';
    });
  });
  return found;
};

console.log(!authorUnique());


// IMPLEMENTAÇÃO DO MARCOS VINICIUS!!!!
function authorUnique() {
  // O contador propriamente dito
  let birthCount = {}
  // Loop para alimentar o contador
  books.forEach((book) => {
    const birthYear = book.author.birthYear;
    // Caso o ano ainda não esteja no objeto, inicializar ele
    if (birthCount[birthYear] === undefined) {
      birthCount[birthYear] = 0
    }  
    // Somar 1 no contador
    birthCount[birthYear] += 1
  })
  // Caso todos os valores do contador sejam iguais a 1,
  // então nenhum autor nasceu no mesmo ano que outro.
  return Object.values(birthCount).every((count) => count <= 1)
}

console.log(`author unique ${authorUnique()}`);