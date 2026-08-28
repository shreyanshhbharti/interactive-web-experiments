import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const outDir = 'C:\\Users\\Shreyansh Bharti\\.gemini\\antigravity-ide\\brain\\0eca2855-ff06-45f0-afc3-4c83032c155a\\screenshots_v3';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const chromePath = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
  ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  : 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function runQA() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--hide-scrollbars'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1536, height: 864, deviceScaleFactor: 1 });

  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));

  // 1. Process Section
  await page.evaluate(() => {
    const el = document.getElementById('process');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, '01_process_centered_fixed.png') });
  console.log('Saved 01_process_centered_fixed.png');

  // 2. Projects Section
  await page.evaluate(() => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, '02_projects_section.png') });
  console.log('Saved 02_projects_section.png');

  // 3. Footer Section
  await page.evaluate(() => {
    const el = document.getElementById('footer');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, '03_footer_section.png') });
  console.log('Saved 03_footer_section.png');

  // 4. Click burst on footer
  await page.mouse.click(500, 700);
  await new Promise(r => setTimeout(r, 60));
  await page.screenshot({ path: path.join(outDir, '04_click_burst_footer.png') });
  console.log('Saved 04_click_burst_footer.png');

  await browser.close();
  console.log('Complete verification finished!');
}

runQA().catch((err) => {
  console.error('QA failed:', err);
  process.exit(1);
});
