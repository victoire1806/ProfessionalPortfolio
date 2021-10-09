import { useEffect } from 'react';

export function useClick(ref, handler) {
  useEffect(() => {
    const handleClick = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [ref, handler]);
}
