//  @ Package
const fetch = require("node-fetch");

const fetchService = async (endpoint = "") => {
  const urlWithSpecialCharacters = encodeURI(endpoint);
  try {
    return await fetch(urlWithSpecialCharacters).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchService;
