// Very small event bus using DOM CustomEvent under the hood

export const emit = (eventName, detail = {}) => {
  const evt = new CustomEvent(eventName, { detail });
  window.dispatchEvent(evt);
};

export const on = (eventName, handler) => {
  const listener = (e) => handler(e.detail);
  window.addEventListener(eventName, listener);
  return () => window.removeEventListener(eventName, listener);
};


