/**
 * The debounce function is used to limit the frequency of execution of a given function.
 * It ensures that the provided function is only executed after a specified timeout period has elapsed since the last invocation.
 * This is particularly useful in scenarios where frequent triggering of a function (e.g., due to rapid user input) needs to be throttled to optimize performance.
 */
export function debounce(func: (...args: any[]) => any, timeout: number = 300) {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: any[]): void => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
