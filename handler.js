const axios = require('axios');
const cheerio = require('cheerio');
const Nexmo = require('nexmo');
const {
  caseNumber,
  NEXMO_API_KEY,
  NEXMO_API_SECRET,
  MY_PHONE_NUMBER,
  FROM,
} = require('./secrets.js');

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

  const nexmo = new Nexmo({
    apiKey: NEXMO_API_KEY,
    apiSecret: NEXMO_API_SECRET,
  });

  // free trail Nexmo cannot send title & content together, too long
  // const msg = title + content;
  nexmo.message.sendSms(FROM, MY_PHONE_NUMBER, title);

  return {
    statusCode: 200,
    body: JSON.stringify({
      title,
      content,
    }),
  };
};
