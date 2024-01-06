import { test } from "@playwright/test";
import { HomePage } from "../../pages/bancolombia.page";
import { simulatorPage } from "../../pages/simulator.page";
import { simulatorVirtualPage } from "../../pages/simulator_virtual.page";

test.describe('test bancolombia', () =>{


    test ('validate access to Bancolombia', async ({page})=>{
        const home = new HomePage(page)
        await home.navigate()
        await home.productAndServices.click()
        await home.goToInversions()
        const simulator = new simulatorPage(page)
        await simulator.goToSimulator()
        const simulatorVirtual = new simulatorVirtualPage(page)
        await simulatorVirtual.goToVirtual()
        
      })
})
