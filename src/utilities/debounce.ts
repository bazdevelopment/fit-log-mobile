export function debounce(func: (...args: any[]) => any, timeout: number = 300) {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: any[]): void => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
