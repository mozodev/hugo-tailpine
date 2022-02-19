/**
 * Google spreadsheet
 *
 * POST /.netlify/functions/gsheet
 *
 * @see env-vars
 * GOOGLE_SERVICE_ACCOUNT_EMAIL=
 * GOOGLE_PRIVATE_KEY=
 * GOOGLE_SPREADSHEET_ID_FROM_URL=
 *
 * @from https://github.com/sw-yx/netlify-google-spreadsheet-demo
 */

const { GoogleSpreadsheet } = require('google-spreadsheet');

if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)
  throw new Error('no GOOGLE_SERVICE_ACCOUNT_EMAIL env var set');
if (!process.env.GOOGLE_PRIVATE_KEY)
  throw new Error('no GOOGLE_PRIVATE_KEY env var set');
if (!process.env.GOOGLE_SPREADSHEET_ID_FROM_URL)
  throw new Error('no GOOGLE_SPREADSHEET_ID_FROM_URL env var set');

exports.handler = async (event, context) => {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID_FROM_URL);
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
  });
  await doc.loadInfo();

  let sheet = doc.sheetsByIndex[0];
  if ('sheet-title' in event.headers) {
    let sheetTitle = event.headers['sheet-title'];
    if (sheetTitle in doc.sheetsByTitle) {
      sheet = doc.sheetsByTitle[sheetTitle];
    }
    else {
      throw new Error('Sheet title "' + sheetTitle + '" not found.');
    }
  }

  try {
    switch (event.httpMethod) {
      case 'POST':
        const data = JSON.parse(event.body);
        const addedRow = await sheet.addRow(data);
        return {
          statusCode: 200,
          body: JSON.stringify({
            message: `POST Success - added row ${addedRow._rowNumber - 1}`,
            rowNumber: addedRow._rowNumber - 1
          })
        };
      default:
        return {
          statusCode: 500,
          body: 'unrecognized HTTP Method, must be one of GET/POST/PUT/DELETE'
        };
    }
  }
  catch (err) {
    console.error('error ocurred in processing ', event);
    console.error(err);
    return {
      statusCode: 500,
      body: err.toString()
    };
  }
};
