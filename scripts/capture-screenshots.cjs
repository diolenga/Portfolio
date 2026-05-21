const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const sites = [
  { name: 'safariwrap',        url: 'https://safariwrap.com' },
  { name: 'safariwrap-app',    url: 'https://app.safariwrap.com' },
  { name: 'olamtec',           url: 'https://olamtec.co.tz' },
  { name: 'brainyield-schools',url: 'https://www.brainyieldschools.sc.tz' },
  { name: 'darasa360',         url: 'https://www.darasa360.co.tz' },
];

const outDir = path.join(__dirname, '..', 'public', 'pictures', 'projects');

(async () => {
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });

  for (const site of sites) {
    const outPath = path.join(outDir, `${site.name}.jpg`);
    console.log(`Capturing ${site.url} ...`);
    try {
      await page.goto(site.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(1500);
      await page.screenshot({ path: outPath, type: 'jpeg', quality: 85, clip: { x: 0, y: 0, width: 1280, height: 800 } });
      console.log(`  ✓ saved ${outPath}`);
    } catch (err) {
      console.error(`  ✗ failed: ${err.message}`);
    }
  }

  await browser.close();
  console.log('Done.');
})();
