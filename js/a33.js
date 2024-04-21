function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
 //  if (message.length <= maxLength) {
 // result = message;
 //    // .slice(0, maxLength);
 //  } 
    message = message.slice(0, maxLength);
 result = (message + "...");

  /// Change code above this line
  return result;
}
// ('Curabitur ligula sapien', 23) 
// ('Vestibulum facilisis purus nec', 30)
// ('Nunc sed turpis a felis in nunc fringilla', 41) 
