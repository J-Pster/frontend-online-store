const API_CATEGORIES = 'https://api.mercadolibre.com/sites/MLB/categories';
const API_SEARCH = 'https://api.mercadolibre.com/sites/MLB/search?';
const API_PRODUCT = 'https://api.mercadolibre.com/items/';

export async function getCategories() {
  const fetchApi = await fetch(API_CATEGORIES);
  const response = await fetchApi.json();
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const fetchApi = await fetch(`${API_SEARCH}category=${categoryId}&q=${query}`);
  const response = await fetchApi.json();
  return response;
}

export async function getProductsFromCategory(categoryId) {
  const fetchApi = await fetch(`${API_SEARCH}category=${categoryId}`);
  const response = await fetchApi.json();
  return response;
}

export async function getProductsFromQuery(query) {
  const fetchApi = await fetch(`${API_SEARCH}q=${query}`);
  const response = await fetchApi.json();
  return response;
}

export async function getProducts(productId) {
  const fetchApi = await fetch(`${API_PRODUCT}${productId}`);
  const response = await fetchApi.json();
  return response;
}
