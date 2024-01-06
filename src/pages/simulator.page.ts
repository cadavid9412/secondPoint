import { expect, Locator, Page } from "@playwright/test";
import { pageController } from "../common/page_controller";


export class simulatorPage extends pageController {
    
    productAndServices : Locator = this.page.locator('#menu-productos')
    buttonInversions : Locator = this.page.getByRole('link', { name: 'Inversiones' })
    buttonVirtualInversion: Locator = this.page.getByRole('link', { name: 'Inversión Virtual' })
    buttonSimulator: Locator = this.page.getByRole('button', { name: 'SIMULAR INVERSIÓN' })
    constructor(public readonly page:Page) {super(page)}

    async goToInversions () {
        await this.buttonInversions.click()
        await expect(this.page).toHaveURL(/inversiones/);
    }
    
    async goToSimulator (){
        await this.buttonVirtualInversion.click()
        await this.page.goto("https://www.bancolombia.com/personas/productos-servicios/inversiones/inversion-virtual");
        await expect(this.page).toHaveURL(/inversion-virtual/);
        await this.page.locator('.btnInver > div').first().click()
    }
}