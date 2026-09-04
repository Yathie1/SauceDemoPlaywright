import { Locator, Page } from "@playwright/test";

export class ProductsDetailsPage {

    readonly page: Page;
    readonly productName: Locator;
    readonly productPrice: Locator;

    constructor(page: Page) {

        this.page = page;

        this.productName =
            page.locator(".inventory_details_name");

        this.productPrice =
            page.locator(".inventory_details_price");
    }

    async getProductName(): Promise<string> {

        return await this.productName.innerText();
    }

    async getProductPrice(): Promise<string> {

        return await this.productPrice.innerText();
    }
}