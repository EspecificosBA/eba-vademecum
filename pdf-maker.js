const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5500/', {waitUntil: 'networkidle2'});
  //await page.emulateMedia('screen');
  await page.pdf({
      path: 'pdf/vademecum-domiciliario-mobile.pdf',
      height: '1450',
      printBackground: true,
      margin: {
      }
    });
    // displayHeaderFooter 
  await browser.close();
})();