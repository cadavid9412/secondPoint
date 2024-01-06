import {CC_slow_network} from "./cdp_commands";
import {Page} from '@playwright/test';

export class pageController {
    constructor(public readonly page: Page){
        if(process.env.SLOW?.trim()) CC_slow_network(page);
    }
}