/**
 * Generate opengraph image from url
 *
 * POST /.netlify/functions/og
 *
 * @arg /posts/1.png
 * @from https://github.com/mheap/netlify-opengraph-on-demand-builders/blob/main/netlify/functions/og/og.js
 * @post https://michaelheap.com/og-image-netlify-on-demand-builders/
 * @return image/png
 */

const chromium = require("chrome-aws-lambda");
const puppeteer = require("puppeteer-core");
const { builder } = require("@netlify/functions");

exports.handler = builder(async function (event, context) {
  try {
    let path = event.path.split("/");
    let host = event.headers.host
    let targetPath = path.slice(4).join("/").replace('.png', '');
    let targetUrl = `http://${host}/${targetPath}/og.html`;

    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: { height: 630, width: 1200 },
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
    });
    const page = await browser.newPage();
    await page.goto(targetUrl, { waitUntil: 'networkidle2' });
    const buffer = await page.screenshot();
    return {
      statusCode: 200,
      headers: {"Content-Type": "image/png"},
      body: buffer.toString("base64"),
      isBase64Encoded: true,
    };
  }
  catch (err) {
    console.error('error ocurred in processing ', event);
    console.error(err);
    return {
      statusCode: 500,
      body: err.toString()
    };
  }
});
