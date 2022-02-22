/**
 * Google spreadsheet
 *
 * POST /.netlify/functions/gsheet
 *
 * @see env-vars
 * DEPLOY_URL
 * DEPLOY_SECRET
 */
const process = require('process')
const fetch = require('node-fetch')

exports.handler = async function (event, context) {
  if (event.queryStringParameters.secret === process.env.DEPLOY_SECRET) {
    const response = await fetch(process.env.DEPLOY_URL, {
      method: "POST",
    });

    return {
      statusCode: 200,
      body: "Your site is now deploying! Have a great day!",
    };
  } else {
    return {
      statusCode: 403,
      body: "Access denied! Please include the correct secret URL parameter.",
    };
  }
};
