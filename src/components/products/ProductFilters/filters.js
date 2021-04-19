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

const filterByName = (name, product) => {
  const filteredName = name.trim().toLowerCase();
  const productName = product.name.toLowerCase();
  if (!productName) {
    return true;
  }
  return productName.includes(filteredName);
};

const filterBySale = (sale, product) => {
  if (sale === saleFilter.all.value) {
    return true;
  }
  if (sale === saleFilter.sell.value) {
    return product.sale;
  }
  return !product.sale;
};

const filterByPrice = (priceFrom, priceTo, product) => {
  if (!priceFrom && !priceTo) {
    return true;
  }
  return priceFrom <= product.price && priceTo >= product.price;
};

const filterByTags = (tags, product) => {
  if (!tags.length || tags.every((tag) => product.tags.includes(tag))) {
    return true;
  }
};

const filterProducts = (products, filteredValues) => {
  return products.filter((product) => {
    return (
      filterByName(filteredValues.name, product) &&
      filterBySale(filteredValues.sale, product) &&
      filterByPrice(filteredValues.priceFrom, filteredValues.priceTo, product) &&
      filterByTags(filteredValues.tags, product)
    );
  });
};

export { saleFilter, defaultFilters, filterProducts };
