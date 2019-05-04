const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5500/', {waitUntil: 'networkidle2'});
  await page.emulateMedia('screen');
  await page.pdf({
      path: 'sample.pdf',
      height: '1450',
      displayHeaderFooter: true,
      footerTemplate: '<div style="width:100%;font-size:11px!important;color:grey!important;text-align:right!important;padding-right:10px!important;" class="pdfheader"><span class="pageNumber"></span></div>',
      margin: {bottom: 35}
    });

  await browser.close();
})();