//  @ Own
const processingAllProducts = require("../services/processingAllProducts");
const processingProduct = require("../services/processingProduct");
const fetchService = require("../services/fetchService");
const URL = require("../statics/constants");

const getProducts = async (req, res) => {
  try {
    const query = req.query.search;
    const endpoint = `${URL.PRODUCTS}${query}`;
    const multidata = await fetchService(endpoint);
    const data = await processingAllProducts(multidata);
    const idList = data.categories.map((each) => `${URL.CATEGORIES}${each}`);

    const findNamesCategories = async () => {
      try {
        let res = await Promise.all(
          idList.map((eachId) => fetchService(eachId))
        );
        return res.map((eachCategory) => eachCategory.name);
      } catch (err) {
        console.log(err);
      }
    };
    const categoriesNames = await findNamesCategories();
    data.categories = categoriesNames;
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "error en la peticion" });
  }
};

const getProductById = async (req, res) => {
  try {
    const _id = req.params.id;
    const endpoint = `${URL.PRODUCT_BY_ID}${_id}`;
    const multidata = await fetchService(endpoint);
    const data = await processingProduct(multidata);
    const textDescription = await fetchService(`${endpoint}/description`);
    data.description = textDescription.plain_text;
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(404).send("Error ...");
  }
};

module.exports = { getProducts, getProductById };
