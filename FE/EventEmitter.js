// There is Event Emitter in Node.js
// You are asked to create an Event Emitter Class
class EventEmitter {
  // same (or different) callback could subscribe
  // on same event multiple times
  events = new Map(); // new Map([eventName, new Map([id, callback])])
  id = 0;

  subscribe(eventName, callback) {
    const events = this.events;
    const id = this.id;

    if (!events.has(eventName)) {
      events.set(eventName, new Map());
    }
    const eventCallbacks = events.get(eventName);
    eventCallbacks.set(id, callback);

    this.id++;
    return {
      // Each subscription has to remember which event it belongs to (eventName),
      // which id identifies this subscription with the correct callback to delete.
      release: () => {
        if (!events.has(eventName)) return;
        if (!events.get(eventName).has(id)) return;
        events.get(eventName).delete(id);

        // once no callback, delete the event
        if (events.get(eventName).size == 0) {
          events.delete(eventName);
        }
      },
    };
  }

  emit(eventName, ...args) {
    const eventCallbacks = this.events.get(eventName);
    if (!eventCallbacks) return;
    for (let [id, callback] of eventCallbacks.entries()) {
      callback(...args);
      // console.log("id", id);
    }
  }
}
// Test cases
const emitter = new EventEmitter();
const callback1 = (...args) => console.log("called", ...args);
const callback2 = (...args) => console.log("called", ...args);
// same callback could subscribe
// on same event multiple times
const sub1 = emitter.subscribe("event", callback1);
const sub2 = emitter.subscribe("event", callback2);

sub1.release();
sub1.release();
sub1.release();
emitter.emit("event", "sub2 should receive it");
