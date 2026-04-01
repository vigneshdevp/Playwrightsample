import { Locator, Page } from "playwright";
import { CommonPage } from "./common";
import {expect} from '@playwright/test'


export class userPage extends CommonPage {
    
        email : Locator;
        password : Locator;
        page : Page
        confirmpassword:Locator
        

    constructor(page: Page) {
        super(page)
        this.page = page;
        this.email = this.page.locator("//input[@name='Email']")
        this.password = page.locator("//input[@name='Password']")
        this.confirmpassword = page.locator("//input[@name='ConfirmPassword']")
        
        
    }



      async createNewUsers() {
        //await this.page.getByText('Add').nth(1).waitFor({state: 'visible', timeout: 60000})
        await this.page.getByText('Add').nth(1).click()
        await expect(this.page.getByText('Add Application User')).toBeVisible({timeout:60000})
        await this.email.fill("Testcase201@test.com") 
        
        await this.page.locator('//label[@class="rz-dropdown-label rz-inputtext "]').nth(0).click()
        
        
        await this.page.getByRole('option', { name: "Test_33852" }).click()
        await this.password.fill("Hello@123") 
        await this.confirmpassword.fill("Hello@123")
        await this.page.getByRole('button', { name: 'save Save' }).click()
        await expect(this.page.getByText('User created successfully')).toBeVisible({timeout:600000})

    }
       
      async verifyblankfield() {
         await this.page.getByText('Add').nth(1).click()
        await expect(this.page.getByText('Add Application User')).toBeVisible({timeout:60000})
        await this.page.getByRole('button', { name: 'save Save' }).click()
        await expect(this.page.getByText('Email is required')).toBeVisible()
        await expect(this.page.getByText('Password is required',{ exact: true })).toBeVisible()
        await expect(this.page.getByText('Confirm Password is required',{ exact: true })).toBeVisible()
        
    }

    


}