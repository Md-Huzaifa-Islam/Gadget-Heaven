function getFromLocalStorage(key) {
  const item = JSON.parse(localStorage.getItem(key));
  return item ? item : [];
}

function setLocalStorage(key, product) {
  const items = getFromLocalStorage(key);
  const product_id = product["product_id"];
  let flag = true;
  items.map((prev) => {
    if (prev["product_id"] == product_id) {
      flag = false;
    }
  });
  if (flag == true) {
    items.push(product);
    localStorage.setItem(key, JSON.stringify(items));
  }
}

function removeFromLocal(key, productId) {
  const items = getFromLocalStorage(key);

  const newArray = items.filter((item) => item !== productId);
  localStorage.setItem(key, JSON.stringify(newArray));
}

export { getFromLocalStorage, setLocalStorage, removeFromLocal };
