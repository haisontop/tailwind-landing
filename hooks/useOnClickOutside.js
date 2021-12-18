import { useEffect, RefObject } from 'react';

const useOnClickOutside = (ref, handler) => {
  useEffect(
    () => {
      const onClickHandler = (event) => {
        if (!ref.current || ref.current.contains(event.target) ||
          ((event.target).id) === 'skip-in-click-outside') {
          return;
        }
        handler();
      };

      document.addEventListener('mousedown', onClickHandler);
      return () => {
        document.removeEventListener('mousedown', onClickHandler);
      };
    },
    [ref, handler]
  );
};

export default useOnClickOutside;
