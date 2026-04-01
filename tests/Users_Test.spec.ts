import { test } from '../SRC/Config/Fixtures'
import { userPage } from '../SRC/Pages/User'

test.describe('User Page Tests', ()=> {
  

    let Userpage : userPage

    test.beforeEach(async({pageWithLogin})=>{
          Userpage = new userPage(pageWithLogin)

    })


    test('Verify user can create user', async({})=> {
        await Userpage.navigateViaDashboard('Administrator', 'Users')
        await Userpage.createNewUsers()
        //await Userpage.verifyblankfield()
        
        
    })

    test('Verify user cannot create user with empty field', async({})=> {
        await Userpage.navigateViaDashboard('Administrator', 'Users')
        await Userpage.verifyblankfield()

    })

})