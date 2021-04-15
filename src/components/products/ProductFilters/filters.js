const saleFilter = {
  all: { value: 'all', label: 'Todo' },
  sell: { value: 'sell', label: 'Venta' },
  buy: { value: 'buy', label: 'Compra' },
};

const defaultFilters = {
  name: '',
  priceFrom: 0,
  priceTo: 0,
  sale: saleFilter.all.value,
  tags: [],
};

const filterByName = (name) => {
  return name.trim().toLowerCase();
};

const filterByPrice = (priceFrom, priceTo) => {};

export { saleFilter, defaultFilters };
