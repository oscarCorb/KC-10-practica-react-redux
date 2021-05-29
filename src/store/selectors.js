export const getIsLogged = (state) => state.auth;

// este sería el lugar apropiado para ordenar el listado
export const getProducts = (state) => {
  return state.products;
};
