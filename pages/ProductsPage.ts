import { expect, Locator, Page } from "@playwright/test";

export class ProductsPage {

    readonly page: Page;
    readonly products: Locator;

    constructor(page: Page) {
        this.page = page;

        this.products = this.page.locator(".inventory_item");
    }

    async viewProduct(productName: string) {

        // Find the complete product card
        const product = this.products.filter({
            hasText: productName
        });

        await expect(product).toBeVisible();

        // Get product name
        const name = await product
            .locator(".inventory_item_name")
            .innerText();

        // Get product price
        const price = await product
            .locator(".inventory_item_price")
            .innerText();

        // Click product name
        await product
            .locator(".inventory_item_name")
            .click();

        return {
            name,
            price
        };
    }
}