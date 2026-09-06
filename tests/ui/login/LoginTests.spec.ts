import {test,expect} from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';
import { DashboardPage } from '../../../pages/DashboardPage';
import { ENV } from '../../../config/env';


//Check if the user can login successfully and the logo is visible on the dashboard page
test('Login Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    await page.goto(ENV.BASE_URL);
    await loginPage.login(ENV.USERNAME, ENV.PASSWORD);
    expect(await dashboardPage.verifyLogoIsVisible()).toBe(true);
});

//Check if the user can login successfully and logout successfully
test('Login and Logout Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    await page.goto(ENV.BASE_URL);
    await loginPage.login(ENV.USERNAME, ENV.PASSWORD);
    expect(await dashboardPage.verifyLogoIsVisible()).toBe(true);
    await dashboardPage.logoutUser();
    expect(await loginPage.username.isVisible()).toBe(true);
});

test('Login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto(ENV.BASE_URL);
    await loginPage.login('invalid_user', 'invalid_password');
    expect(await loginPage.errorMessage.isVisible()).toBe(true);        

});