export const setToLocalStorage = (key, value) =>
  localStorage.setItem(key, value);

export const deleteFromLocalStorage = key => localStorage.removeItem(key);

export const getFromlocalStorage = key => localStorage.getItem(key);

export const clearLocalStorage = () => localStorage.clear();
