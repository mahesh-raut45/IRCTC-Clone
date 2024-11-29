import { useCallback, useRef } from "react";

export const useDebounce = (fn, delay) => {
  const id = useRef(null);

  const debounceFn = useCallback(
    (...args) => {
      clearTimeout(id.current); // clear previous id's timeout
      // start new timeout for current id
      id.current = setTimeout(() => {
        fn(...args);
      }, delay);
    },
    [fn, delay]
  );

  return debounceFn;
};
