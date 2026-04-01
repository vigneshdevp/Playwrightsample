import { Locator, Page } from "playwright"


export class GenricUtils {

    page: Page

    constructor(page: Page) {
        this.page = page
    }

    async elementVisible(locator: Locator, timeout: number) {
        await locator.waitFor({ state: 'visible', timeout: timeout })
    }



}