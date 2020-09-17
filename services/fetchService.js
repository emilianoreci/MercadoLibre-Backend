//  @ Package
const fetch = require("node-fetch");

const fetchService = async (endpoint) => {
  try {
    return await fetch(endpoint).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchService;
