//  @ Own
const signatureHeader = require("../statics/signatureHeader");

const processingAllProducts = (dataWithoutProcessing = {}) => {
  let filtersForBreadcrum = [];
  if (dataWithoutProcessing.filters.length > 0)
    filtersForBreadcrum =
      dataWithoutProcessing.filters[0].values[0].path_from_root;

  const products = dataWithoutProcessing.results;
  const size = 4;
  let items = products.slice(0, size);
  let id_list_categories = [];

  const productsList = items.map((item) => {
    id_list_categories = [...id_list_categories, item.category_id];
    const container = {};
    container["id"] = item.id;
    container["title"] = item.title;
    container["price"] = {
      currency: item.currency_id,
      amount: item.price,
      decimals: null,
    };
    container["picture"] = item.thumbnail;
    container["condition"] = item.condition;
    container["free_shipping"] = item.shipping.free_shipping;
    return container;
  });

  // no permite duplicidad de ids de categorias.
  let id_category = [...new Set(id_list_categories)];
  let data = { ...signatureHeader };
  data.categories = id_category;
  data.items = productsList;
  data.filters = filtersForBreadcrum;

  return data;
};

module.exports = processingAllProducts;
