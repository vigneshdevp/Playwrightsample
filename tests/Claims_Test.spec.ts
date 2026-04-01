import { test } from '../SRC/Config/Fixtures'
import { claimsPage } from '../SRC/Pages/Claims'
import { headers } from "../SRC/Constants/Const";

test.describe('claims Page Tests', ()=> {
  

    let claimpage : claimsPage
    

    test.beforeEach(async({pageWithLogin})=>{
          claimpage = new claimsPage(pageWithLogin)

    })

    test('Verify headers in the table', async()=> {
        claimpage.validatetableheaders(headers)

        
    })


})