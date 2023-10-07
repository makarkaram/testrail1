const { Page } = require('./page')
const { expect } = require('@playwright/test');
const VhidBtn = '[class="NavbarAuthBlock_buttonEnter__c9siH"]'
const EmailField = '#email'
const PasswordField = '#password'
const UviytiBtn = '//*[@id="__next"]/div[1]/div/div[2]/form/div[3]/button'
const ProfileDropDown = '[data-testid="avatarBlock"]'
const OholoshenyaButton = '[data-testid="units"]'
const MojiOholoshenyaSelector = "//*[contains(text(),'Мої оголошення')]"
const VyityBtn = '[data-testid="logout"]'
const PodatiOholoshBtn = '[class="EmptyBlockInfo_btn__hvPKg"]'
const BudTehnikaDropdown = '[data-testid="firstCategoryLabel"][for="category1"]'
const CategoryDropdown = '[class="CategorySelect_button__UbbJB"]'
const AvtoKranyDropdown = '[class="SecondCategory_namesBlock__b9JGu SecondCategory_namesBlock_unit__4bfbi"][data-testid=namesBlock]>[for="category6"]'
const AvtoKranyBtn = '[data-testid="thirdCategoryWrapper"]>[for="category60"]'
const NazvaField = '[placeholder="Введіть назву оголошення"]'
const VyrobnikField = '[placeholder="Введіть виробника транспортного засобу"]'
const WagnerBtn = "//*[contains(text(),'WAGNER')]"
const NazvaModeliField = '[placeholder="Введіть назву моделі"]'
const VybratyNaMapiBtn = '[class="AddressSelectionBlock_locationBtn__IvqEL"]'
const DaliBtn = '[data-testid="nameNextBtn"]'
const DeaktuvovaniBtn = "//*[contains(text(),'Деактивовані')]"
const PidtverdityVyborBtn = '[class="ItemButtons_darkBlueBtn__juupv ItemButtons_fullWidth__3HqA0"]'
const DaliBtn2 = "//*[contains(text(),'Далі')]"
const PoslugiField = '[placeholder="Наприклад: Рихлення грунту, буріння"]'
const UborkaBtn = "//*[contains(text(),'Уборка')]"
const DaliBtn3 = "//*[contains(text(),'Далі')]"
const MinZamovlenyaField = '[placeholder="Наприклад, 1000"]'
const DaliBtn4 = "//*[contains(text(),'Далі')]"
const PodatyNarozglyadBtn = "//*[contains(text(),'Подати на розгляд')]"
const AdminGearsBtn = '[data-testid="superuserIcon_Navbar"]'
const OholoshenyaBtn = '[href="/admin/units/"]'
const ZnaytyInput = '[data-testid="input"]'
const ApproveBtn = "//*[contains(text(),'Підтвердити публікацію')]"
const UborkaBtn2 = '[data-testid="serviceBtn"]'
const CategoryDropdown2 = '[data-testid="div_CustomSelect"]'
const ZberegtiBtn = '[data-testid="submitBtn"]'
const clickHomeBtn = '[data-testid="homeButton"]'
const DeaktyvatyBtn = "//*[contains(text(),'Деактивувати')]"
const OchikyuchiBtn = '[class="AdminUnits_button__aUXCA AdminUnits_active__uuRXR"]'
const VyhidBtn2 = "//*[contains(text(),'Вихід')]"
const TakBtn = "//*[contains(text(),'Так')]"
const bucketBtn = '[data-testid="bucketBtn"]'
class MainPage extends Page {

    constructor(page) {
        super(page);
        this.page = page;
    }
    async openLetkaBackend() {
        await super.openURL('https://letkabackend.click/')
    }
    async clickVhidBtn() {
        await super.click(VhidBtn)
    }
    async FillEmailField() {
        await super.type(EmailField, "testuserrentzila@gmail.com")
    }
    async FillEmailField2() {
        await this.page.locator('#email').fill('testuserrentzila@gmail.com')
    }
    async FillPasswordField() {
        await super.type(PasswordField, 'Testuser10')
    }
    async FillPasswordField2() {
        await this.page.locator('#password').nth(-1).fill('Testuser10')
    }
    async clickUviytiBtn() {
        await super.click(UviytiBtn)
    }
    async clickProfileDropdown() {
        await super.click(ProfileDropDown)
    }
    async SelectOholoshenyaBtn() {
        await this.page.locator(OholoshenyaButton).hover()
    }
    async ClickMojiOholoshenya() {
        await super.click(MojiOholoshenyaSelector)
    }
    async ClickVyityBtn() {
        await super.click(VyityBtn)
    }
    async FillAdminEmailFild() {
        await super.type(EmailField, "makarran63@gmail.com")
    }
    async FillAdminPasswordField() {
        await super.type(PasswordField, 'Test123228')
    }
    async clickPodatiOholoshBtn() {
        await super.click(PodatiOholoshBtn)
    }
    async clickCategoryDropdown() {
        await super.click(CategoryDropdown)
    }
    async clickBudTehnikaDropdown() {
        await super.click(BudTehnikaDropdown)
    }
    async clickAvtoKranyDropdown() {
        await super.click(AvtoKranyDropdown)
    }
    async clickAvtoKranyBtn() {
        await super.click(AvtoKranyBtn)
    }
    async fillNazvaField() {
        await super.type(NazvaField, 'Автокран777')
    }
    async fillVyrobnikField() {
        await super.type(VyrobnikField, 'Wa')
    }
    async clickWagnerBtn() {
        await super.click(WagnerBtn)
    }
    async fillNazvaModeliField() {
        await super.type(NazvaModeliField, 'Kotleta')
    }
    async fillTehHarakteristikiField() {
        await this.page.locator('[data-testid="textarea-customTextAriaDescription"]').first().fill('qwerqewwqejqeklqnelknqekjnqekjnqekjnqkljenq')
    }
    async fieldDetalyiOpysField() {
        await this.page.locator('[data-testid="textarea-customTextAriaDescription"]').nth(-1).fill('1111111111111111111111qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')
    }
    async clickVybratyNaMapiBtn() {
        await super.click(VybratyNaMapiBtn)
    }
    async clickPidtverdityVyborBtn() {
        await super.click(PidtverdityVyborBtn)
    }
    async clickDaliBtn() {
        await super.click(DaliBtn)
    }
    async InputImage1() {
        let [fileChooser] = await Promise.all([
            this.page.waitForEvent('filechooser'),
            this.page.locator('[data-testid="imageBlock"]:not([class*="Disabled"])','tests/pageObjects/kran.jpg').click(),
          ]);
          await fileChooser.setFiles([`tests/pageObjects/kran.jpg`]);
    }
    async ClickDaliBtn2() {
        await super.click(DaliBtn2)
    }
    async FillPoslugiField() {
        await super.type(PoslugiField, 'убо')
    }
    async ClickUborkaBtn() {
        await super.click(UborkaBtn)
    }
    async ClickDaliBtn3() {
        await super.click(DaliBtn3)
    }
    async FillMinZamovlenyaField() {
        await super.type(MinZamovlenyaField, '10000')
    }
    async ClickDaliBtn4() {
        await super.click(DaliBtn4)
    }
    async ClickPodatyNarozglyadBtn() {
        await super.click(PodatyNarozglyadBtn)
    }
    async ClickAdminGearsBtn() {
        await super.click(AdminGearsBtn)
    }
    async ClickOholoshenyaBtn() {
        await super.click(OholoshenyaBtn)
    }
    async FillZnaytyInput() {
        await super.type(ZnaytyInput, 'Автокран777')
    }
    async clickDiyaBtn() {
        await this.page.locator('[data-testid="adminShowButton"]').first().click()
    }
    async ClickApproveBtn() {
        await super.click(ApproveBtn)
    }
    async ClickUborkaBtn2() {
        await super.click(UborkaBtn2)
    }
    async InputImage2() {
        let [fileChooser] = await Promise.all([
            this.page.waitForEvent('filechooser'),
            this.page.locator('[name="image"]','tests/pageObjects/kran.jpg').click(),
          ]);
          await fileChooser.setFiles([`tests/pageObjects/kran.jpg`]);
        }
    async clickCategoryDropdown2() {
        await super.click(CategoryDropdown2)
    }
    async clickBudivelniBtn() {
        await this.page.locator('[class="CustomSelect_option__x3Rbv"]').first().click()
    }
    async ClickZberegtiBtn() {
        await super.click(ZberegtiBtn)
    }
    async ClickHomeBtn() {
        await super.click(clickHomeBtn)
    }
    async CheckDeaktyvatyBtn() {
        await expect(this.page.getByText('Деактивувати')).toBeVisible()
    }
    async ClickDeaktyvatyBtn() {
        await super.click(DeaktyvatyBtn)
    }
    async ClickCloseBtn() {
        await this.page.locator('[class="ItemButtons_lightRedBtn__cecpm"]').first().click()
    }
    async ClickOchikyuchiBtn() {
        await super.click(OchikyuchiBtn)
    }
    async ClickVyhidBtn2() {
        await super.click(VyhidBtn2) 
    } 
    async ClickTakBtn() {
        await super.click(TakBtn)
    }
    async CheckNenayeOholoshenText() {
        await expect(this.page.getByText('У Вас поки немає активних оголошень')).toBeVisible()
    }
    async ClickDeaktuvovaniBtn() {
        await this.page.locator('[class="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-1tfao7c"]').first().click()
    }
    async CheckOholoshenyaText() {
        await expect(this.page.locator('[class="ItemButtons_wrapper__bOHMs"]>[class="ItemButtons_lightRedBtn__cecpm"]')).toBeVisible()
    }
    async clickVydalityBtn() {
        await super.click('[class="ItemButtons_wrapper__bOHMs"]>[class="ItemButtons_lightRedBtn__cecpm"]')
    }
    async CheckDeaktuvovaniBtn() {
        await expect(this.page.locator('[data-testid="bucketBtn"]')).toBeVisible()
    }
    async ClickDeaktuvovaniBtn() {
        await super.click(DeaktuvovaniBtn)
    }
    async ClickBucketBtn() {
        await super.click(bucketBtn)
    }
    
    }



module.exports = { MainPage };