// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
// ];

// // for (const book of books) {
// //   console.log(book.title);
// //   console.log(book.author);
// //   console.log(book.rating);
// // }

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// // for (const { title, author, rating } of books) {
// //   console.log(title);
// //   console.log(author);
// //   console.log(rating);
// // }

// ------------------------------

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// --------------------------------

 // ✅ Логиески и синтаксически сгруппированные сущности
// const bookShelf = {
//   books: ["Последнее королевство", "Страж снов"],
//   // Это метод объекта
//   getBooks() {
//     console.log("Этот метод будет возвращать все книги - свойство books");
//   },
//   // Это метод объекта
//   addBook(bookName) {
//     console.log("Этот метод будет добавлять новую книгу в свойство books");
//   },
// };

// // Вызовы методов
// bookShelf.getBooks();
// bookShelf.addBook("Новая книга");

// ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

const card = {
    items: [],
    getItems() {
        return this.items;
    },
    add(product) {
        // console.table(this.items);

        for (const item of this.items) {
            // console.log(item);

            if (item.name === product.name) {
                // console.log('Такой продукт уже есть: ', product.name);
                item.quantity += 1;
                return;
            }
        }

        const newProduct = {
            ...product,
            quantity: 1,
        }
        this.items.push(newProduct);
    },
    remove(productName) {
        const { items } = this;

        for (let i = 0; i < items.length; i += 1) {
            // const item = this.items[i];
            const { name } = items[i];

             if (productName === name) {
                //  console.log('нашли такой продукт: ', productName);
                //  console.log('индекс: ', i);

                 items.splice(i, 1);
            }
        }
        
    },
    clear() {
        this.items = [];
    },
    countTotalPrice() {
        const { items } = this;

        let total = 0;

        for (const { price, quantity } of items) {
            total += price * quantity;
        }
        return total;
    },
    increaseQuantity(productName) {
         const { items } = this;

        for (const item of items) {
            if (item.name === productName) {
                item.quantity += 1;
                return;
            }
        }
    },
    decreaseQuantity(productName) {
        for (const item of this.items) {
            if (item.name === productName) {
                item.quantity -= 1;
                return;
            }
        }
    }, 
};

// console.log(card.getItems());

card.add({name: 'apple', price: 50,});
card.add({name: 'vino', price: 60,});
card.add({name: 'lime', price: 60,});
card.add({name: 'lime', price: 60,});
card.add({name: 'berry', price: 110, });
card.add({name: 'berry', price: 110, });
card.add({name: 'berry', price: 110, });

// console.table(card.getItems());

// card.remove('lime');
// console.table(card.getItems());

// card.clear();
// console.log(card.getItems());

card.increaseQuantity('apple');
card.increaseQuantity('vino');
// console.table(card.getItems());

card.decreaseQuantity('berry');
// console.table(card.getItems());

// console.log('Total price: ', card.countTotalPrice());