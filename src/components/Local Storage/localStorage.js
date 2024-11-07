function getFromLocalStorage(key) {
  const item = JSON.parse(localStorage.getItem(key));
  return item ? item : [];
}

function setLocalStorage(key, productId) {
  const items = getFromLocalStorage(key);
  if (items.includes(productId)) {
    return;
  } else {
    items.push(productId);
    localStorage.setItem(key, JSON.stringify(items));
  }
}

function removeFromLocal(key, productId) {
  const items = getFromLocalStorage(key);

  const newArray = items.filter((item) => item !== productId);
  localStorage.setItem(key, JSON.stringify(newArray));
}

export { getFromLocalStorage, setLocalStorage, removeFromLocal };
