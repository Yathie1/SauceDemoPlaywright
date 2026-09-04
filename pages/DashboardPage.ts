import { Page, Locator } from '@playwright/test';

export class DashboardPage{
    readonly page: Page;
    readonly logo: Locator;
    readonly menuButton: Locator;
    readonly logoutButton: Locator;
    //readonly sauceLabBackpackProduct: Locator;

    constructor(page: Page){
        this.page = page;
        this.logo = this.page.locator('.app_logo');
        this.menuButton = this.page.locator('#react-burger-menu-btn');
        this.logoutButton = this.page.locator('#logout_sidebar_link');
        //this.sauceLabBackpackProduct = this.page.getByText('Sauce Labs Backpack');
    }
    
    async verifyLogoIsVisible(){
        return await this.logo.isVisible();
    }

    async clickMenuButton(){
        await this.menuButton.click();
    }

    async logoutUser(){
        await this.clickMenuButton();
        await this.logoutButton.click();
    }

    






}