export const getIsLogged = (state) => state.auth;

// este sería el lugar apropiado para ordenar el listado
export const getProducts = (state) => {
  console.log('state.products ->', state.products);
  console.log('state:', state);
  return state.products;
};
