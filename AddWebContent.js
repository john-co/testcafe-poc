import { ClientFunction, Selector } from 'testcafe';
import XPathSelector from './xpath-selector';

fixture`Getting Started`
    .page`http://localhost:8080`;

test('My first test', async t => {
    const signInButton = XPathSelector('//a[contains(@class,"sign-in")]');
    const submitSignIn = XPathSelector('//button[contains(@id,"_com_liferay_login_web_portlet_LoginPortlet")]');
    const welcomePortletHeader = XPathSelector('//h1[contains(@data-lfr-editable-id,"element-text")]');

    await t
    .click(signInButton)
    .selectText('#_com_liferay_login_web_portlet_LoginPortlet_login')
    .typeText('#_com_liferay_login_web_portlet_LoginPortlet_login', 'test@liferay.com')
    .selectText('#_com_liferay_login_web_portlet_LoginPortlet_password')
    .typeText('#_com_liferay_login_web_portlet_LoginPortlet_password', 'test')
    .click(submitSignIn)
        .expect(Selector(welcomePortletHeader).innerText).eql("Welcome to Liferay");

});