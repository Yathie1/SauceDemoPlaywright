import {test, expect} from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';
import { DashboardPage } from '../../../pages/DashboardPage';
import { ProductsPage } from '../../../pages/ProductsPage';
import { ProductsDetailsPage } from '../../../pages/ProductsDetailsPage';
import products from '../../../testData/products.json';

//View a product and verify the product name and price on the product details page
for (const product of products) {

test(`View product - ${product.productName}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');
    const productpage = new ProductsPage(page);
    const productdetailpage = new ProductsDetailsPage(page);
    const expectedProduct = await productpage.viewProduct(product.productName);
    const actualProductName = await productdetailpage.getProductName();
    const actualProductPrice = await productdetailpage.getProductPrice();
    await expect(actualProductName).toBe(expectedProduct.name);
    await expect(actualProductPrice).toBe(expectedProduct.price);
    console.log(`Product Name: ${actualProductName}`);
    console.log(`Product Price: ${actualProductPrice}`);
    
}

)
}


//