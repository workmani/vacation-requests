import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in an ES module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define auth file paths
const employeeAuthFile = path.join(__dirname, '..', '.auth', 'employee.json');
const managerAuthFile = path.join(__dirname, '..', '.auth', 'manager.json');

test.describe('Authentication Flow - Unauthenticated', () => {
  // Keep the existing unauthenticated test
  test('should redirect unauthenticated user to Next-Auth signin page from root', async ({ page }) => {
    // Navigate to the base URL (root)
    await page.goto('/');

    // Expect the title to be "Sign In"
    await expect(page).toHaveTitle(/Sign In/);

    // Expect the URL to be the Next-Auth signin page path
    await expect(page).toHaveURL(/.*\/api\/auth\/signin/);

    // Expect the Microsoft Entra ID sign-in button to be visible
    await expect(page.getByRole('button', { name: /Sign in with Microsoft Entra ID/i })).toBeVisible();
  });
});

// RBAC Tests - Employee Role
test.describe('RBAC - Employee Role', () => {
  test.use({ storageState: employeeAuthFile });

  test('should access common pages', async ({ page }) => {
    // Test /requests
    await page.goto('/requests');
    await expect(page).not.toHaveURL(/.*\/api\/auth\/signin/);
    await expect(page.getByRole('heading', { name: /My Requests/i })).toBeVisible();

    // Test /calendar
    await page.goto('/calendar');
    await expect(page).not.toHaveURL(/.*\/api\/auth\/signin/);
    await expect(page.getByRole('heading', { name: /Calendar/i })).toBeVisible();

    // Test /balances
    await page.goto('/balances');
    await expect(page).not.toHaveURL(/.*\/api\/auth\/signin/);
    await expect(page.getByRole('heading', { name: /Time Off Balances/i })).toBeVisible();
  });

  test('should NOT access manager pages', async ({ page }) => {
    // Test /team-calendar
    await page.goto('/team-calendar');
    // Expect redirection to home ('/') based on the code in team-calendar/page.tsx
    await expect(page).toHaveURL('/');
    // Verify it's not the team calendar page by checking the heading is absent
    await expect(page.getByRole('heading', { name: /Team Calendar/i })).not.toBeVisible();

    // Test /team-requests (Assuming similar redirect logic to home)
    await page.goto('/team-requests');
    await expect(page).toHaveURL('/');
    // Verify it's not the team requests page by checking the heading is absent
    // ** Verify this locator is correct for the team requests page **
    await expect(page.getByRole('heading', { name: /Team Time Off Requests/i })).not.toBeVisible(); 
  });
});

// RBAC Tests - Manager Role
test.describe('RBAC - Manager Role', () => {
  test.use({ storageState: managerAuthFile });

  test('should access common pages', async ({ page }) => {
    // Test /requests
    await page.goto('/requests');
    await expect(page).not.toHaveURL(/.*\/api\/auth\/signin/);
    await expect(page.getByRole('heading', { name: /My Requests/i })).toBeVisible();

    // Test /calendar
    await page.goto('/calendar');
    await expect(page).not.toHaveURL(/.*\/api\/auth\/signin/);
    await expect(page.getByRole('heading', { name: /Calendar/i })).toBeVisible();

    // Test /balances
    await page.goto('/balances');
    await expect(page).not.toHaveURL(/.*\/api\/auth\/signin/);
    await expect(page.getByRole('heading', { name: /Time Off Balances/i })).toBeVisible();
  });

  test('should access manager pages', async ({ page }) => {
    // Test /team-calendar
    await page.goto('/team-calendar');
    await expect(page).not.toHaveURL(/.*\/api\/auth\/signin/);
    await expect(page.getByRole('heading', { name: /Team Calendar/i })).toBeVisible();

    // Test /team-requests
    await page.goto('/team-requests');
    await expect(page).not.toHaveURL(/.*\/api\/auth\/signin/);
    // ** Verify this locator is correct for the team requests page **
    // Assuming the heading is 'Team Requests' - adjust if needed
    await expect(page.getByRole('heading', { name: /Team Time Off Requests/i })).toBeVisible();
  });

  // Logout test moved here
  test('should log out successfully', async ({ page }) => {
    // Start on the root page where the header is visible
    await page.goto('/'); 

    // Find and click the user menu trigger button by looking for the button containing the user's name
    // ** Verify "Test Manager" matches the display name in the UI for the manager user **
    const userMenuTrigger = page.locator('button:has-text("Test Manager")'); 
    await expect(userMenuTrigger).toBeVisible();
    await userMenuTrigger.click();

    // Wait for the dropdown menu to appear
    const dropdownMenu = page.getByRole('menu');
    await expect(dropdownMenu).toBeVisible();

    // Find and click the logout menu item within the menu
    const logoutMenuItem = dropdownMenu.getByRole('menuitem', { name: /Log out/i });
    await expect(logoutMenuItem).toBeVisible();
    await logoutMenuItem.click();

    // Wait for and assert redirection to the sign-in page
    await expect(page).toHaveURL(/.*\/api\/auth\/signin/);
    await expect(page).toHaveTitle(/Sign In/);

    // Optional: Verify the Microsoft sign-in button is visible again
    await expect(page.getByRole('button', { name: /Sign in with Microsoft Entra ID/i })).toBeVisible();

    // Optional: Try accessing a protected route again and expect redirect
    await page.goto('/'); // Go back to root or a known protected route
    await expect(page).toHaveURL(/.*\/api\/auth\/signin/);
  });
});

// --- API Authentication & Authorization Tests ---

// Define actual API routes used in the application
// Common route example: fetching user's own requests or profile
const PROTECTED_API_COMMON = '/api/requests'; 
// Manager-only route example: fetching team requests or performing manager actions
const PROTECTED_API_MANAGER_ONLY = '/api/team-requests'; // Adjust if your manager route is different

test.describe('API Security - Unauthenticated', () => {
  test('should return 401/403 for protected API routes', async ({ request }) => {
    // Test common protected route (e.g., GET own requests)
    const commonResponse = await request.get(PROTECTED_API_COMMON);
    expect(commonResponse.status()).toBeGreaterThanOrEqual(400); // Expect 401 or 403

    // Test manager-only route (e.g., GET team requests)
    const managerResponse = await request.get(PROTECTED_API_MANAGER_ONLY);
    expect(managerResponse.status()).toBeGreaterThanOrEqual(400); // Expect 401 or 403
  });
});

test.describe('API Security - Employee Role', () => {
  test.use({ storageState: employeeAuthFile });

  test('should access common protected API routes', async ({ request }) => {
    const response = await request.get(PROTECTED_API_COMMON); // e.g., GET /api/requests (should return own requests)
    expect(response.ok()).toBeTruthy(); // Expect 2xx status
  });

  test('should NOT access manager-only API routes (receive 403)', async ({ request }) => {
    const response = await request.get(PROTECTED_API_MANAGER_ONLY); // e.g., GET /api/team-requests
    expect(response.status()).toBe(403); // Expect Forbidden specifically
  });
});

test.describe('API Security - Manager Role', () => {
  test.use({ storageState: managerAuthFile });

  test('should access common protected API routes', async ({ request }) => {
    const commonResponse = await request.get(PROTECTED_API_COMMON); // e.g., GET /api/requests (should return own requests)
    expect(commonResponse.ok()).toBeTruthy(); // Expect 2xx status
  });

  test('should access manager-only API routes', async ({ request }) => {
    const managerResponse = await request.get(PROTECTED_API_MANAGER_ONLY); // e.g., GET /api/team-requests
    expect(managerResponse.ok()).toBeTruthy(); // Expect 2xx status
  });
});

// --- TODO: Add more authentication tests ---
// - Test login with valid/invalid credentials

// REMOVE LEFTOVER BLOCK
// test.describe('Authentication Flow', () => {
  
//     // Group tests that require authentication
// }); 