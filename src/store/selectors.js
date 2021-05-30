export const getIsLogged = (state) => state.auth;

// este sería el lugar apropiado para ordenar el listado
export const getProducts = (state) => state.productList.reverse();

export const getTagList = (state) => state.tags;

export const getProductDetail = (state) => state.productDetail;
