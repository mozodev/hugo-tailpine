/**
 * Google spreadsheet
 *
 * GET /.netlify/functions/gsheet
 * POST /.netlify/functions/gsheet
 *
 * @see env-vars
 * GOOGLE_SERVICE_ACCOUNT_EMAIL=
 * GOOGLE_PRIVATE_KEY=
 * GOOGLE_SPREADSHEET_ID_FROM_URL=
 */

// from https://github.com/sw-yx/netlify-google-spreadsheet-demo

const { GoogleSpreadsheet } = require('google-spreadsheet');

// required env vars
if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)
  throw new Error('no GOOGLE_SERVICE_ACCOUNT_EMAIL env var set');
if (!process.env.GOOGLE_PRIVATE_KEY)
  throw new Error('no GOOGLE_PRIVATE_KEY env var set');
if (!process.env.GOOGLE_SPREADSHEET_ID_FROM_URL)
  // spreadsheet key is the long id in the sheets URL
  throw new Error('no GOOGLE_SPREADSHEET_ID_FROM_URL env var set');

exports.handler = async (event, context) => {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID_FROM_URL);
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
  });
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  // console.log('accessing', sheet.title, 'it has ', sheet.rowCount, ' rows');
  const path = event.path.replace(/\.netlify\/functions\/[^/]+/, '');
  const segments = path.split('/').filter((e) => e);

  try {
    switch (event.httpMethod) {
      /* GET /.netlify/functions/gsheet */
      case 'GET':
        const rows = await sheet.getRows(); // can pass in { limit, offset }
        const serializedRows = rows.map(serializeRow);
        return {
          statusCode: 200,
          // body: JSON.stringify(rows) // dont do this - has circular references
          body: JSON.stringify(serializedRows) // better
        };
      /* POST /.netlify/functions/gsheet */
      case 'POST':
        /* parse the string body into a useable JS object */
        const data = JSON.parse(event.body);
        data.UserIP = UserIP;
        // console.log('`POST` invoked', data);
        const addedRow = await sheet.addRow(data);
        // console.log({ addedRow });
        return {
          statusCode: 200,
          body: JSON.stringify({
            message: `POST Success - added row ${addedRow._rowNumber - 1}`,
            rowNumber: addedRow._rowNumber - 1 // minus the header row
          })
        };
      /* Fallthrough case */
      default:
        return {
          statusCode: 500,
          body: 'unrecognized HTTP Method, must be one of GET/POST/PUT/DELETE'
        };
    }
  } catch (err) {
    console.error('error ocurred in processing ', event);
    console.error(err);
    return {
      statusCode: 500,
      body: err.toString()
    };
  }

  /**
   * utils
   */
  function serializeRow(row) {
    let temp = {};
    sheet.headerValues.map((header) => {
      temp[header] = row[header];
    });
    return temp;
  }
};
