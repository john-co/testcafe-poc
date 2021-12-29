import { ClientFunction, t, Selector } from 'testcafe';
import XPathSelector from '../xpath-selector';

export default class sign {
    constructor() {
        this.signInButton = XPathSelector('//a[contains(@class,"sign-in")]');
        this.submitSignIn = XPathSelector('//button[contains(@id,"_com_liferay_login_web_portlet_LoginPortlet")]');
        this.welcomePortletHeader = XPathSelector('//h1[contains(@data-lfr-editable-id,"element-text")]');
        this.loginEmailInput = Selector('input').withAttribute('id','_com_liferay_login_web_portlet_LoginPortlet_login');
        this.loginPasswordInput = Selector('input').withAttribute('id','_com_liferay_login_web_portlet_LoginPortlet_password');
    }

    async typeLoginEmail(email){
        await t.selectText(this.loginEmailInput);
        await t.typeText(this.loginEmailInput, email);
    }

    async typeLoginPassword(password){
        await t.selectText(this.loginEmailInput);
        await t.typeText(this.loginEmailInput, password);
    }

    async clickSignInAvatar(){
        await t.click(this.signInButton);
    }

    async clickSubmitSignIn(){
        await t.click(this.submitSignIn);
    }
}