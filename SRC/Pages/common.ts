import { Page } from "playwright";
import {expect} from '@playwright/test'
import { GenricUtils } from "../Utils/Utils";

export class CommonPage extends GenricUtils {

    page: Page

    constructor(page: Page) {
        super(page)
        this.page = page
    }


   
    async navigateViaDashboard(parentMenu: string, childMenu?: string) {
        await this.page.getByText(parentMenu, { exact: true }).waitFor({ state: 'visible', timeout: 60000 })
        await this.page.getByText(parentMenu, { exact: true }).click()
        if (childMenu) {
            await this.page.getByRole('link', { name: childMenu }).waitFor({ state: 'visible', timeout: 60000 })
            await this.page.getByRole('link', { name: childMenu }).click()
        }
    }

     async randomNumGenerator() {
        const randomNum = await Math.floor(Math.random() * 10000)
        return randomNum;
    }


}