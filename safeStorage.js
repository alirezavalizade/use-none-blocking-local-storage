export const safeGet = (key, defaultValue = {}) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) return defaultValue;

    try {
      return JSON.parse(serializedState);
    } catch (e) {
      return serializedState;
    }
  } catch (err) {
    Sentry.captureException(err);

    return defaultValue;
  }
};

export const safeSet = (key, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    // Sentry.captureException(err);
  }
};
