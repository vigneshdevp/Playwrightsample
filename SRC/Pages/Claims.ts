import { Locator, Page } from "playwright";
import {expect} from '@playwright/test'



export class claimsPage{
    
    page : Page
    constructor(page: Page) {
         this.page = page
        }


    async validatetableheaders(head:string[]){

        await this.page.locator('.rzi-circle-o-notch').waitFor({"state":"detached",timeout:60000})
        for (let headers of head){

            console.log(headers);
            
            await expect(this.page.locator("thead th" ,{hasText:headers})).toBeVisible({timeout:250000})

            
        }



    }

}