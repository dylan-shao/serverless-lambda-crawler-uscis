const axios = require('axios');
const cheerio = require('cheerio');
const { caseNumber } = require('./vault.js');

const getInfoFromHTML = html => {
  const $ = cheerio.load(html);
  const title = $('.rows h1').text();
  const content = $('.rows p').text();

  return { title, content };
};

module.exports.getCaseStatus = async (event, context) => {
  const url = `https://egov.uscis.gov/casestatus/mycasestatus.do?appReceiptNum=${caseNumber}`;

  const response = await axios.get(url);
  const { title, content } = getInfoFromHTML(response.data);

  return {
    statusCode: 200,
    body: JSON.stringify({
      title,
      content,
    }),
  };
};
