const { expect } = require('@playwright/test');
class Page {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
      this.page = page;
        }
  
    async openURL(link) {
          await this.page.goto(link);
          await this.page.waitForLoadState('load');
        }
    async getElement(locator) {
            return await this.page.locator(locator);
        }
    async checkElement(locator,text) {
          return await this.page.locator(locator,{hasText:text});
      }
     
    async click(locator) {
          await (await this.getElement(locator)).click();
        }
    async findElement(element) {
        return await this.page.locator(element);
      }    
     
    async type(element, text) {
        await (await this.findElement(element)).fill(text);
     }
    
    

   
  
  
  }
module.exports = { Page };