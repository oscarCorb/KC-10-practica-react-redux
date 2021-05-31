export const getIsLogged = (state) => state.auth;

// este sería el lugar apropiado para ordenar el listado
export const getProducts = (state) => state.products.data.reverse();

export const getProductDetail = (state, productId) =>
  state.products.data.find((item) => item.id === productId);

export const getTagList = (state) => state.tags;

export const getUi = (state) => state.ui;
