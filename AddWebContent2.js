import { ClientFunction, Selector } from 'testcafe';
import sign from './pages/sign-in.js';

fixture `Test`
    .page `http://localhost:8080`;

test('Using Page Object Model', async t => {

    await sign.clickSignInAvatar();
    await sign.typeLoginEmail('test@liferay.com');
    await sign.typeLoginPassword('test');
    await sign.clickSubmitSignIn()
        .expect(Selector(welcomePortletHeader).innerText).eql("Welcome to Liferay");
});