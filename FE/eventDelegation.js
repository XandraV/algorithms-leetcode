/**
 * @param {HTMLElement} root
 * @param {(el: HTMLElement) => boolean} predicate
 * @param {(e: Event) => void} handler
 */
const onClick = (root, predicate, handler) => {
  // Keep a map of handlers per root
  if (!root.delegatedHandlers) {
    root.delegatedHandlers = [];

    root.addEventListener("click", function (e) {
      // Flags to handle stopPropagation / stopImmediatePropagation
      let stopped = false;
      let stoppedImmediate = false;

      // Save original methods
      const origStopProp = e.stopPropagation;
      const origStopImmediate = e.stopImmediatePropagation;

      // Override for this event only
      // e.stopImmediatePropagation() is called inside handler function by the user
      // we override it to track the flag stoppedImmediate per event
      // because in a delegation loop, the browser doesn’t know we’re iterating through
      // multiple handlers on the same element.
      // Native stopImmediatePropagation() only affects native listeners, not your custom loop.
      // Our override ensures the next handler in the delegatedHandlers array doesn’t run
      e.stopPropagation = function () {
        stopped = true;
        origStopProp.call(e);
      };
      e.stopImmediatePropagation = function () {
        stopped = true;
        stoppedImmediate = true;
        origStopImmediate.call(e);
      };

      // Traverse from target up to root
      let node = e.target;
      // When you click, event.target is the deepest element clicked.
      // But maybe it’s nested inside other tags.
      // Traverse up the DOM tree until you reach the root
      while (node && node !== root && !stopped) {
        for (const { predicate: p, handler: h } of root.delegatedHandlers) {
          if (p(node)) {
            h.call(node, e);
            if (stoppedImmediate) break; // stop running other handlers for this element
          }
        }
        node = node.parentElement;
      }
    });
  }
   // Add the handler for this root
   // Without this, the listener exists but has no handlers to iterate over.
  root.delegatedHandlers.push({ predicate, handler });
}