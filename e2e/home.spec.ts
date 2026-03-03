import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load and display the component showcase', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('gos-root')).toBeVisible();
    await expect(page.locator('text=GetOrderStack Component Showcase')).toBeVisible();
  });

  test('should render all button variants', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('gos-button').first()).toBeVisible();
    const buttons = page.locator('gos-button');
    expect(await buttons.count()).toBeGreaterThanOrEqual(8);
  });

  test('should render card components', async ({ page }) => {
    await page.goto('/');
    const cards = page.locator('gos-card');
    expect(await cards.count()).toBeGreaterThanOrEqual(3);
  });

  test('should render input components', async ({ page }) => {
    await page.goto('/');
    const inputs = page.locator('gos-input');
    expect(await inputs.count()).toBeGreaterThanOrEqual(3);
  });

  test('should render badge components', async ({ page }) => {
    await page.goto('/');
    const badges = page.locator('gos-badge');
    expect(await badges.count()).toBeGreaterThanOrEqual(6);
  });
});
