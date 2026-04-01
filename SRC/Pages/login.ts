import { Page } from "playwright"
import {expect, Locator} from '@playwright/test'



export class LoginPage {

    page: Page
    user:Locator
    pass:Locator
    userName: string
    password: string
    baseurl:string

    constructor(page: Page) {
        this.page = page
        this.user = this.page.getByRole('textbox', { name: 'Username' })
        this.pass = this.page.getByRole('textbox', { name: 'Password' })
        this.baseurl = process.env.BASE_URL|| " "
        this.userName = process.env.USER_NAME|| " "
        this.password = process.env.PASSWORD|| " "

    }


    async userLogin() {
        await this.page.goto(`${this.baseurl}/Login`)
        await this.page.waitForLoadState('load')
        await this.user.fill(this.userName)
        await this.pass.fill(this.password)
        await this.page.getByRole('button', { name: 'Login' }).click()
        
        await this.page.locator('[class="rz-menu rz-profile-menu"]').waitFor({ state: 'visible', timeout: 60000 })
        await expect(this.page.locator('[class="rz-menu rz-profile-menu"]')).toBeVisible()
    }





}