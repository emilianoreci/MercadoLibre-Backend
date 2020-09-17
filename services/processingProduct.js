//  @ Own
const headerObject = require("../statics/headerObject");

const processingProduct = (product) => {
  let data = { ...headerObject };
  data.item = {
    id: product.id,
    title: product.title,
    price: {
      currency: product.currency_id,
      amount: product.price,
      decimals: 0,
    },
    picture: product.secure_thumbnail,
    condition: product.condition,
    free_shipping: product.shipping.free_shipping,
    sold_quantity: product.sold_quantity,
  };
  return data;
};

module.exports = processingProduct;
