//  @ Own
const headerObject = require("../statics/headerObject");

const processingAllProducts = (dataWithoutProcessing) => {
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

  // no permite duplicidad de ids.
  let id_category = [...new Set(id_list_categories)];
  let data = { ...headerObject };
  data.categories = id_category;
  data.items = productsList;

  return data;
};

module.exports = processingAllProducts;
