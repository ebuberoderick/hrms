export function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
      const context = this;
      clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        clearTimeout(timeoutId);
        func.apply(context, args);
      }, delay);
    };
  }

  export function throttle(func, delay) {
    let lastExecuted = 0;
    
    return function(...args) {
      const now = Date.now();
      
      if (now - lastExecuted >= delay) {
        func.apply(this, args);
        lastExecuted = now;
      }
    };
  }