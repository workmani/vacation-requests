const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const authFile = path.join(__dirname, '..', '.auth', 'user.json');
const loginUrl = 'http://localhost:3000/api/auth/signin'; // Your app's signin entry point
const loggedInUrl = 'http://localhost:3000/'; // URL after successful login (adjust if different, e.g., /dashboard)

(async () => {
  console.log(`
==================================================
Playwright Authentication Setup
==================================================
`);

  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log(`Navigating to login page: ${loginUrl}`);
  await page.goto(loginUrl);

  console.log(`
--------------------------------------------------
ACTION REQUIRED:
1. A browser window has been opened.
2. Please manually log in using your Microsoft Entra ID credentials.
3. After successful login, you should be redirected back to the application (${loggedInUrl}).
4. The script will automatically detect the redirection and save the authentication state.
--------------------------------------------------
`);
  console.log('Waiting for successful login redirection...');

  try {
    // Wait for navigation to the specified URL after successful login
    await page.waitForURL(loggedInUrl, { timeout: 180000 }); // Wait up to 3 minutes

    console.log('Login successful. Saving authentication state...');
    
    // Ensure the .auth directory exists
    const authDir = path.dirname(authFile);
    if (!fs.existsSync(authDir)){
        fs.mkdirSync(authDir, { recursive: true });
        console.log(`Created directory: ${authDir}`)
    }

    // Save storage state
    await context.storageState({ path: authFile });
    console.log(`Authentication state saved successfully to: ${authFile}`);

  } catch (error) {
    console.error('Error during authentication state saving:', error);
    console.error(`Did the page successfully redirect to ${loggedInUrl} after login?`);
  } finally {
    console.log('Closing browser...');
    await browser.close();
  }

  console.log('==================================================');
})(); 