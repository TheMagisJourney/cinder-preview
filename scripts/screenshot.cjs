const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const out = path.join(__dirname, '..', 'qa');
fs.mkdirSync(out, { recursive: true });

const pages = [
  { name: 'home', url: 'https://cinder-preview-orpin.vercel.app/' },
  { name: 'dating', url: 'https://cinder-preview-orpin.vercel.app/dating/' },
  { name: 'career', url: 'https://cinder-preview-orpin.vercel.app/career/' },
  { name: 'acting', url: 'https://cinder-preview-orpin.vercel.app/acting/' },
  { name: 'portfolio', url: 'https://cinder-preview-orpin.vercel.app/portfolio/' },
];

(async () => {
  const browser = await chromium.launch();
  const report = [];

  for (const vp of [
    { key: 'desktop', width: 1440, height: 900 },
    { key: 'mobile', width: 390, height: 844 },
  ]) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();

    for (const p of pages) {
      const res = await page.goto(p.url, { waitUntil: 'networkidle', timeout: 60000 });
      await page.waitForTimeout(1000);
      const imgInfo = await page.evaluate(() => {
        return Array.from(document.images).map((img) => ({
          src: img.currentSrc || img.src,
          naturalWidth: img.naturalWidth,
          complete: img.complete,
          w: img.clientWidth,
          h: img.clientHeight,
        }));
      });
      const broken = imgInfo.filter((i) => !i.naturalWidth);
      const title = await page.title();
      const bodyText = await page.locator('body').innerText();
      const badSymbols = (bodyText.match(/[ÃÂ]|â€|Â·|Ã|ï¿½/g) || []).length;
      const file = path.join(out, p.name + '-' + vp.key + '.png');
      await page.screenshot({ path: file, fullPage: true });
      const entry = {
        page: p.name,
        vp: vp.key,
        status: res && res.status(),
        title,
        brokenImages: broken.length,
        brokenList: broken.map((b) => b.src).slice(0, 5),
        badSymbols,
        screenshot: file,
        imgCount: imgInfo.length,
        facesLoaded: imgInfo.filter((i) => i.naturalWidth > 0).length,
      };
      report.push(entry);
      console.log(JSON.stringify(entry));
    }
    await context.close();
  }

  fs.writeFileSync(path.join(out, 'report.json'), JSON.stringify(report, null, 2));
  await browser.close();
  console.log('DONE', report.length);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});