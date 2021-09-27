// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//     const totalPrice =  orderedQuantity * pricePerDroid + deliveryFee;
//     const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
    
//   // Change code above this line
//   return message;
//   console.log(message);
// }

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//       message = 'There are no products in the order!';
//   } else if (ordered > available) {
//       message = 'Your order is too large, there are not enough items in stock!';
//   } else {
//       message = 'The order is accepted, our manager will contact you';

// }

//     console.log(message);

//   // Change code above this line
//   return message;
// }

// checkStorage(100, 50);

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line

//   if (message.length <= maxLength) {
//   result = message;
//   } else {
//   result = message.slice(0, maxLength)+'...';
//   }
  
//   /// Change code above this line
//   return result;
// }

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   if (message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')) {
//   result = true;
//   } else {
//   result = false;
// }
    
//     console.log(result);

//   // Change code above this line
//   return result;
// }

// checkForSpam('Вам пришло уведомление с магазина NIKE - там сейчас огромный - SALE!!!');