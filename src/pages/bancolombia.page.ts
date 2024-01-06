import { expect, Locator, Page } from "@playwright/test";
import { pageController } from "../common/page_controller";


export class HomePage extends pageController {
    
    productAndServices : Locator = this.page.locator('#menu-productos')
    buttonInversions : Locator = this.page.getByRole('link', { name: 'Inversiones' })
    buttonVirtualInversion: Locator = this.page.getByRole('link', { name: 'Inversión Virtual' })
    buttonSimulator: Locator = this.page.getByRole('button', { name: 'SIMULAR INVERSIÓN' })
    
    // touchBusinessEntity : Locator = this.businessEntitySubmneu.locator('.ng-star-inserted').getByText("Business Entities")
    // clickBusinessesAdd : Locator = this.businessEntitySubmneu.locator('.menuitem-text').getByText("Businesses");
    // createButton : Locator = this.page.locator('#btnAdd').getByText(" Add new ");
    // deleteButton : Locator = this.page.locator('#businessesGENERALDELETE')
    constructor(public readonly page:Page) {super(page)}
    async navigate() {
        await this.page.goto("https://www.bancolombia.com/personas");
        await expect(this.page).toHaveURL(/personas/);
    }

    async goToInversions () {
        await this.buttonInversions.click()
        await expect(this.page).toHaveURL(/inversiones/);
    }
    
    async goToSimulator (){
        await this.buttonVirtualInversion.click()
        await this.page.goto("https://www.bancolombia.com/personas/productos-servicios/inversiones/inversion-virtual");
        await expect(this.page).toHaveURL(/inversion-virtual/);
        //await this.page.locator('.col-md-6 > div:nth-child(6)').first().click()
        await this.page.locator('.btnInver > div').first().click()
        await this.page.getByRole('button', { name: 'CONTINUAR' }).click();
        await this.page.getByPlaceholder('1.000.000').click();
        await this.page.getByPlaceholder('1.000.000').fill('100,0000');
        await this.page.getByPlaceholder('días').click();
        await this.page.getByPlaceholder('días').fill('180');
        await this.page.getByRole('button', { name: 'SIMULAR' }).click();
    }
    async deleteBusinesse (businessName: string) {
    }

    async navigateToBusiness(businessId: string) {
    }
}