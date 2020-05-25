import { useState, useEffect } from 'react';
import { safeGet, safeSet } from './safeStorage';

let pState = {};
if (typeof window === 'object') {
  pState = safeGet('state', {});
  window.addEventListener('beforeunload', () => {
    safeSet('state', pState);
  });
}

const useStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => pState[key] || defaultValue);

  useEffect(() => {
    pState[key] = state;
  }, [key, state]);

  return [state, setState];
};

export default useStorage;
