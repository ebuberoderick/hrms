
export function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    }, wait);
    if (callNow) func.apply(context, args);
  }
}

export function throttle(func, delay) {
  let lastExecuted = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastExecuted >= delay) {
      func.apply(this, args);
      lastExecuted = now;
    }
  };
}