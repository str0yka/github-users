import { useCallback, useRef } from "react";

export const useDebounce = (callback: (...args: any) => any, delay: number) => {
  const timer = useRef<null | ReturnType<typeof setTimeout>>(null);

  const debouncedCallback = useCallback(
    (...args: any) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => callback(...args), delay);
    },
    [callback, delay]
  );

  return debouncedCallback;
};
