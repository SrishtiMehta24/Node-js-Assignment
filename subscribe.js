const { EventEmitter } = require('events');

// Create an event emitter instance
const eventEmitter = new EventEmitter();

// Determine the current maximum number of listeners
const currentMaxListeners = eventEmitter.getMaxListeners();
console.log('Current Maximum Number of Listeners:', currentMaxListeners);

// Update the maximum number of listeners for the "subscribe" event
const updatedMaxListeners = 20; // Change this value as per your requirement
eventEmitter.setMaxListeners(updatedMaxListeners);
console.log('Updated Maximum Number of Listeners for "subscribe" event:', updatedMaxListeners);

// Subscribe to the "subscribe" event
eventEmitter.on('subscribe', () => {
  console.log('Congratulations! You have subscribed.');
});

// Function to trigger the "subscribe" event
function subscribeUser() {
  eventEmitter.emit('subscribe');
}

// Simulate a user subscribing after a few seconds
setTimeout(subscribeUser, 5000); // Change the delay time as per your requirement





