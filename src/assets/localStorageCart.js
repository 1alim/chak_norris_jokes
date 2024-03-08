

export const loadLS = () => {
  const storage = localStorage.getItem("jokesArray");
    const items = storage ? JSON.parse(storage) : [];
};

export const setLS = (items) => {
  localStorage.setItem('jokesArray', JSON.stringify(items));
};

export const removeLs = () => {
  localStorage.removeItem('jokesArray');
};