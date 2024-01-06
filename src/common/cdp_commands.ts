import { Page} from '@playwright/test';

export async function CC_slow_network (page: Page){
    const client = await page.context().newCDPSession(page);
    await client.send('Network.enable');
    await client.send('Network.canEmulateNetworkConditions',{
        onoffline: false,
        downloadThroughput:(2 * 1024 * 1024) / 4,
        uploadThroughput: (3 * 1024 * 1024) / 4,
        conectionType: 'celular3g',
        latency: 5000,
    });
}