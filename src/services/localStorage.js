export function newItemOnCart({ title, id, price }) {
  // Pega os itens do local
  const atualLocalStorage = localStorage.getItem('cartItems');
  const atualItems = atualLocalStorage ? JSON.parse(atualLocalStorage) : [];

  // Interceptar Item Já Adicionado
  if (atualItems.find((item) => item.id === id)) return;

  // Adicionar um novo item
  const novoItem = { title, id, price, quantity: 1 };
  const newItems = [...atualItems, novoItem];
  localStorage.setItem('cartItems', JSON.stringify(newItems));
}

export function newComment({ email, selectedRate, textArea, productId }) {
  // Pega os itens do local
  const atualLocalStorage = localStorage.getItem(productId);
  const atualItems = atualLocalStorage ? JSON.parse(atualLocalStorage) : [];

  // Adicionar um novo item
  const novoItem = { email, selectedRate, textArea };
  const newItems = [...atualItems, novoItem];
  localStorage.setItem(productId, JSON.stringify(newItems));
}

export function getitensFromCart() {
  const atualLocalStorage = localStorage.getItem('cartItems');
  const atualItems = atualLocalStorage ? JSON.parse(atualLocalStorage) : [];
  return atualItems;
}

export function getCommentsFromitem(id) {
  const atualLocalStorage = localStorage.getItem(id);
  const atualItems = atualLocalStorage ? JSON.parse(atualLocalStorage) : [];
  return atualItems;
}
